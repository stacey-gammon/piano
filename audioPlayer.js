// Audio Player Functions
// This file contains consolidated audio playback functions

// Track all active oscillators so we can stop them all
let activeOscillators = [];

// Function to stop all active oscillators
function stopAllOscillators() {
    activeOscillators.forEach(oscillator => {
        try {
            console.log('Stopping oscillator');
            oscillator.stop();
        } catch (e) {
            // Oscillator might already be stopped, ignore error
        }
    });
    activeOscillators = [];
    console.log('Stopped all active oscillators');
}

// Chord definitions (root, third, fifth)
const chordDefinitions = {
    // Major chords
    'C': ['C4', 'E4', 'G4'],
    'C#': ['C#4', 'F4', 'G#4'],
    'D': ['D4', 'F#4', 'A4'],
    'D#': ['D#4', 'G4', 'A#4'],
    'E': ['E4', 'G#4', 'B4'],
    'F': ['F4', 'A4', 'C4'],
    'F#': ['F#4', 'A#4', 'C#4'],
    'G': ['G4', 'B4', 'D4'],
    'G#': ['G#4', 'C4', 'D#4'],
    'A': ['A4', 'C#4', 'E4'],
    'A#': ['A#4', 'D4', 'F4'],
    'B': ['B4', 'D#4', 'F#4'],
    
    // Minor chords
    'Cm': ['C4', 'D#4', 'G4'],
    'C#m': ['C#4', 'E4', 'G#4'],
    'Dm': ['D4', 'F4', 'A4'],
    'D#m': ['D#4', 'F#4', 'A#4'],
    'Em': ['E4', 'G4', 'B4'],
    'Fm': ['F4', 'G#4', 'C5'],
    'F#m': ['F#4', 'A4', 'C#4'],
    'Gm': ['G4', 'A#4', 'D4'],
    'G#m': ['G#4', 'B4', 'D#5'],
    'Am': ['A4', 'C5', 'E5'],
    'A#m': ['A#4', 'C#5', 'F5'],
    'Bm': ['B4', 'D5', 'F#5']
};


// Note frequencies (B2 to D5)
const noteFreqs = {
    'B2': 123.47, 'C3': 130.81, 'C#3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65,
    'A3': 220.00, 'A#3': 233.08, 'B3': 246.94, 'C4': 261.63, 'C#4': 277.18,
    'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99,
    'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
    'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25
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
    
    // Track this oscillator so we can stop it later if needed
    activeOscillators.push(oscillator);
    
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

function mapDegreeToNote(degree, songKey) {
    if (key == "3[4]") {
        return songKey + "4";
    }
    return key;
}

// Map scale degrees to actual notes based on the current key
function mapKeyToNote(scaleDegree, octave, songKey) {
    // Define the major scale intervals (frequency ratios from root)
    // Each number represents how many semitones above the root
    const majorScale = [0, 2, 4, 5, 7, 9, 11]; // Root, 2nd, 3rd, 4th, 5th, 6th, 7th
    const minorScale = [0, 2, 3, 5, 7, 8, 10]; // Root, 2nd, 3rd, 4th, 5th, 6th, 7th
    
    // Get the root frequency for the key
    const rootNote = songKey + octave; 
    const rootFreq = noteFreqs[rootNote];
    
    if (!rootFreq) {
        console.error(`Invalid key: ${songKey}. Valid keys are: C, C#, D, D#, E, F, F#, G, G#, A, A#, B`);
        return null;
    }
    
    // Validate scale degree (1-7)
    if (scaleDegree < 1 || scaleDegree > 7) {
        console.error(`Invalid scale degree: ${scaleDegree}. Must be 1-7.`);
        return null;
    }
    
    // Calculate the frequency for this scale degree
    // Each semitone is a factor of 2^(1/12)
    let semitones = songKey.includes("m") ? minorScale[scaleDegree - 1] : majorScale[scaleDegree - 1];

    const frequency = rootFreq * Math.pow(2, semitones / 12);
    
    // Find the closest note in our noteFreqs table
    let closestNote = null;
    let smallestDiff = Infinity;
    
    for (const [note, freq] of Object.entries(noteFreqs)) {
        const diff = Math.abs(freq - frequency);
        if (diff < smallestDiff) {
            smallestDiff = diff;
            closestNote = note;
        }
    }
    
    return closestNote;
}

// Function to play a note or chord based on the note object
function playNoteOrChord(noteObject, trackVolume = null, songKey = null) {
    // Check if this is a scale degree mapping (new feature)
    if (noteObject.degree !== undefined) {
        // Parse the key field: can be "1", "1[5]", "3[2]", etc.
        const keyMatch = noteObject.degree.toString().match(/^(\d+)(?:\[(\d+)\])?$/);
        
        if (keyMatch) {
            const scaleDegree = parseInt(keyMatch[1]);
            const octave = keyMatch[2] ? parseInt(keyMatch[2]) : 3; // Default to octave 3-4
            
            if (!songKey) {
                console.warn('Song key needs to be defined for scale degree mapping');
                return;
            }
            
            // Map the scale degree to an actual note
            const mappedNote = mapKeyToNote(scaleDegree, octave, songKey);
            
            if (mappedNote) {
                // Adjust octave if specified
                let finalNote = mappedNote;                
                console.log(`Mapped key ${noteObject.degree} to note ${mappedNote} in key ${songKey} for octave ${octave}`);
                // Play the mapped note
                const durationSeconds = (noteObject.duration || 1) * eighthNoteLength / 1000;
                playNote(mappedNote, trackVolume, durationSeconds);
            } else {
                console.error(`Failed to map key ${noteObject.key} to a note`);
            }
        } else {
            console.error(`Invalid key format: ${noteObject.key}. Expected format: "1", "1[5]", "3[2]", etc.`);
        }
        return;
    }
    
    // Existing logic for notes and chords
    const durationSeconds = (noteObject.duration || 1) * eighthNoteLength / 1000;
    
    if (noteObject.chord) {
        playChord(noteObject.chord, trackVolume, durationSeconds);
    } else if (noteObject.note) {
        playNote(noteObject.note, trackVolume, durationSeconds);
    } else {
        console.warn('Note object has neither note, chord, nor key field:', noteObject);
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
