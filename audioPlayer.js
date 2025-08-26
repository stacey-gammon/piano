// Audio Player Functions
// This file contains consolidated audio playback functions

// Chord definitions (root, third, fifth)
const chordDefinitions = {
    // Major chords
    'C': ['C4', 'E4', 'G4'],
    'C#': ['C#4', 'F4', 'G#4'],
    'D': ['D4', 'F#4', 'A4'],
    'D#': ['D#4', 'G4', 'A#4'],
    'E': ['E4', 'G#4', 'B4'],
    'F': ['F4', 'A4', 'C5'],
    'F#': ['F#4', 'A#4', 'C#5'],
    'G': ['G4', 'B4', 'D5'],
    'G#': ['G#4', 'C5', 'D#5'],
    'A': ['A4', 'C#5', 'E5'],
    'A#': ['A#4', 'D5', 'F5'],
    'B': ['B4', 'D#5', 'F#5'],
    
    // Minor chords
    'Cm': ['C4', 'D#4', 'G4'],
    'C#m': ['C#4', 'E4', 'G#4'],
    'Dm': ['D4', 'F4', 'A4'],
    'D#m': ['D#4', 'F#4', 'A#4'],
    'Em': ['E4', 'G4', 'B4'],
    'Fm': ['F4', 'G#4', 'C5'],
    'F#m': ['F#4', 'A4', 'C#5'],
    'Gm': ['G4', 'A#4', 'D5'],
    'G#m': ['G#4', 'B4', 'D#5'],
    'Am': ['A4', 'C5', 'E5'],
    'A#m': ['A#4', 'C#5', 'F5'],
    'Bm': ['B4', 'D5', 'F#5']
};


// Consolidated playNote function that handles both regular notes and volume-based playback
function playNote(note, trackVolume = null, duration = .25) {
    const freq = noteFreqs[note];
    if (!freq) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
    oscillator.type = 'triangle';
    
    // Handle volume - if trackVolume is provided, use it; otherwise use default
    let volume = 0.3; // Default volume
    if (trackVolume !== null) {
        if (trackVolume === 0) return; // Don't play if volume is 0
        volume = (trackVolume / 5) * 0.3; // Scale volume based on track volume (1-5 scale)
    }
    
    const now = audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, now + 0.01);

    // Sustain until just before note ends
    gainNode.gain.setValueAtTime(volume, now + duration - 0.05);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);

    // Visual feedback
    const keyElement = document.querySelector(`[data-note="${note}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 100);
    }

    // Record if recording
    if (isRecording) {
        const currentTime = Date.now();
        const relativeTime = currentTime - recordingStartTime;
        const step = Math.round(relativeTime / eighthNoteLength);
        const duration = parseInt(document.getElementById('stretch')?.value) || 1;
        const currenttrack = document.getElementById('currenttrack')?.value || "1";
        recordedNotes.push({ 
            note, 
            step, 
            duration, 
            lyrics: '', 
            track: currenttrack 
        });
    }
}

// Function to play a chord (multiple notes simultaneously)
function playChord(chordName, trackVolume = null, duration = 1) {
    const chordNotes = chordDefinitions[chordName];
    if (!chordNotes) {
        console.warn(`Unknown chord: ${chordName}`);
        return;
    }
    
    // Play all notes in the chord simultaneously with the specified duration
    chordNotes.forEach(note => {
        playNote(note, trackVolume, duration);
    });
    
    // Visual feedback for chord (highlight multiple keys for the duration)
    chordNotes.forEach(note => {
        const keyElement = document.querySelector(`[data-note="${note}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
            const noteDurationSeconds = (duration * eighthNoteLength) / 1000;
            setTimeout(() => keyElement.classList.remove('active'), noteDurationSeconds * 1000);
        }
    });
}

// Function to play a note or chord based on the note object
function playNoteOrChord(noteObject, trackVolume = null) {
    // Get duration from the note object, default to 1 if not specified
    const duration = noteObject.duration || 1;
    // duration in steps
    const steps = noteObject.duration || 1;

    // convert steps to seconds
    const durationSeconds = (steps * eighthNoteLength) / 1000;

    if (noteObject.chord) {
        playChord(noteObject.chord, trackVolume, durationSeconds);
    } else if (noteObject.note) {
        playNote(noteObject.note, trackVolume, durationSeconds);
    } else {
        console.warn('Note object must have either "note" or "chord" field:', noteObject);
    }
}

// Legacy function for backward compatibility
function playNoteWithVolume(note, trackVolume = 5, duration = .5) {
    playNote(note, trackVolume, duration); // Default duration of 1
}

function stopNote() {
    // Visual feedback handled in playNote
}

// Utility function to add a chord to the recording
function addChordToRecording(chordName, step, duration = 1, lyrics = '', track = "1") {
    if (!isRecording) {
        console.warn('Not currently recording');
        return;
    }
    
    recordedNotes.push({
        chord: chordName,
        step: step,
        duration: duration,
        lyrics: lyrics,
        track: track
    });
    
    console.log(`Added chord ${chordName} to recording at step ${step}`);
}

// Utility function to add a note to the recording with duration
function addNoteToRecording(note, step, duration = 1, lyrics = '', track = "1") {
    if (!isRecording) {
        console.warn('Not currently recording');
        return;
    }
    
    recordedNotes.push({
        note: note,
        step: step,
        duration: duration,
        lyrics: lyrics,
        track: track
    });
    
    console.log(`Added note ${note} to recording at step ${step} with duration ${duration}`);
}
