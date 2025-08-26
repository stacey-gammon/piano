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
function playNote(note, singerVolume = null) {
    const freq = noteFreqs[note];
    if (!freq) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
    oscillator.type = 'triangle';
    
    // Handle volume - if singerVolume is provided, use it; otherwise use default
    let volume = 0.3; // Default volume
    if (singerVolume !== null) {
        if (singerVolume === 0) return; // Don't play if volume is 0
        volume = (singerVolume / 5) * 0.3; // Scale volume based on singer volume (1-5 scale)
    }
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);

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
        const currentSinger = document.getElementById('currentSinger')?.value || "1";
        recordedNotes.push({ 
            note, 
            step, 
            duration, 
            lyrics: '', 
            singer: currentSinger 
        });
    }
}

// Function to play a chord (multiple notes simultaneously)
function playChord(chordName, singerVolume = null) {
    const chordNotes = chordDefinitions[chordName];
    if (!chordNotes) {
        console.warn(`Unknown chord: ${chordName}`);
        return;
    }
    
    // Play all notes in the chord simultaneously
    chordNotes.forEach(note => {
        playNote(note, singerVolume);
    });
    
    // Visual feedback for chord (highlight multiple keys)
    chordNotes.forEach(note => {
        const keyElement = document.querySelector(`[data-note="${note}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
            setTimeout(() => keyElement.classList.remove('active'), 100);
        }
    });
}

// Function to play a note or chord based on the note object
function playNoteOrChord(noteObject, singerVolume = null) {
    if (noteObject.chord) {
        // Play chord if chord field is specified
        playChord(noteObject.chord, singerVolume);
    } else if (noteObject.note) {
        // Play individual note if note field is specified
        playNote(noteObject.note, singerVolume);
    } else {
        console.warn('Note object must have either "note" or "chord" field:', noteObject);
    }
}

// Legacy function for backward compatibility
function playNoteWithVolume(note, singerVolume = 5) {
    playNote(note, singerVolume);
}

function stopNote() {
    // Visual feedback handled in playNote
}

// Utility function to add a chord to the recording
function addChordToRecording(chordName, step, duration = 1, lyrics = '', singer = "1") {
    if (!isRecording) {
        console.warn('Not currently recording');
        return;
    }
    
    recordedNotes.push({
        chord: chordName,
        step: step,
        duration: duration,
        lyrics: lyrics,
        singer: singer
    });
    
    console.log(`Added chord ${chordName} to recording at step ${step}`);
}
