// Audio Player Functions
// This file contains consolidated audio playback functions

// Track all active oscillators so we can stop them all
let activeOscillators = [];

// Function to stop all active oscillators
function stopAllOscillators() {
    activeOscillators.forEach(oscillator => {
        try {
            oscillator.stop();
        } catch (e) {
            // Oscillator might already be stopped, ignore error
        }
    });
    activeOscillators = [];
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

// Chord degree mapping for major and minor keys
const chordDegreeMapping = {
    // Major keys: 1=major, 2=minor, 3=minor, 4=major, 5=major, 6=minor, 7=diminished
    'major': {
        1: 'major',
        2: 'minor', 
        3: 'minor',
        4: 'major',
        5: 'major',
        6: 'minor',
        7: 'diminished'
    },
    // Minor keys: 1=minor, 2=diminished, 3=major, 4=minor, 5=minor, 6=major, 7=major
    'minor': {
        1: 'minor',
        2: 'diminished',
        3: 'major', 
        4: 'minor',
        5: 'minor',
        6: 'major',
        7: 'major'
    }
};

// Note names for building chord names
const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];


// Note frequencies (C2 to D6 - expanded range including all second octaves)
const noteFreqs = {
    // Second octave (C2 to B2)
    'C2': 65.41, 'C#2': 69.30, 'D2': 73.42, 'D#2': 77.78, 'E2': 82.41, 'F2': 87.31, 'F#2': 92.50, 'G2': 98.00, 'G#2': 103.83, 'A2': 110.00, 'A#2': 116.54, 'B2': 123.47,
    
    // Third octave (C3 to B3)
    'C3': 130.81, 'C#3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'B3': 246.94,
    
    // Fourth octave (C4 to B4)
    'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
    
    // Fifth octave (C5 to B5)
    'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'B5': 987.77,
    
    // Sixth octave (C6 to D6)
    'C6': 1046.50, 'C#6': 1108.73, 'D6': 1174.66
};


function perceivedLoudnessScale(freq) {
    // crude correction: quieter for lows, boost highs
    // Middle C (C4, ~261 Hz) is our baseline = 1.0
    return Math.min(1.5, Math.max(0.6, Math.log2(freq / 261) * 0.2 + 1));
}

// Consolidated playNote function that handles both regular notes and volume-based playback
function playNote(note, trackVolume = null, duration = .25, startTime = null) {
    const freq = noteFreqs[note];
    if (!freq) {
        console.error('Invalid note:', note);
        return;
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Use provided startTime or current time
    const playTime = startTime || audioContext.currentTime;
    
    oscillator.frequency.setValueAtTime(freq, playTime);
    oscillator.type = 'triangle';
    
    let volume = 0.3;
    if (trackVolume !== null) {
        if (trackVolume === 0) return;
        volume = (trackVolume / 5) * 0.3;
        // Apply frequency scaling so low notes aren’t overpowering
        volume *= perceivedLoudnessScale(freq);
    }
    
    gainNode.gain.setValueAtTime(0, playTime);
    gainNode.gain.linearRampToValueAtTime(volume, playTime + 0.01);

    // Sustain until just before note ends
    gainNode.gain.setValueAtTime(volume, playTime + duration - 0.05);
    
    // Track this oscillator so we can stop it later if needed
    activeOscillators.push(oscillator);
    
    oscillator.start(playTime);

    oscillator.stop(playTime + duration);

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
        currentNotes.push({ 
            note, 
            step, 
            duration, 
            lyrics: '', 
            track: currenttrack 
        });
    }
}

// Function to play a chord (multiple notes simultaneously)
function playChord(chordName, trackVolume = null, duration = 1, songKey = null, startTime = null) {
    // check to see if there are any digits in the chord name
    let chordNotes;
    if (/\d+/.test(chordName)) {
        const degree = parseInt(chordName);
        chordNotes = getChordNotes(songKey, degree);
        // Add the octave to the chord notes
        chordNotes = chordNotes.map(note => note + defaultOctave);
    } else {
        chordNotes = chordDefinitions[chordName];
    }

    if (!chordNotes) {
        console.warn(`Unknown chord: ${chordName}`);
        return;
    }
    
    // Play all notes in the chord simultaneously with the specified duration
    chordNotes.forEach(note => {
        playNote(note, trackVolume, duration, startTime);
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

function mapUnparsedDegreeToNote(degree, songKey, trackId = null) {
    let raiseSemitone = 0;

    // Check for raised degree - support both # at start and #/^ at end
    if (degree.startsWith("#")) {
        raiseSemitone = 1; // raise by one semitone
        degree = degree.slice(1); // remove "#" before parsing
    } else if (degree.endsWith("#") || degree.endsWith("^")) {
        raiseSemitone = 1; // raise by one semitone
        degree = degree.slice(0, -1); // remove "#" or "^" from end
    }

    // Check for octave specification
    if (degree.includes("[")) {
        const [deg, octaveSpec] = degree.split("[");
        const degree_val = parseInt(deg);
        
        if (isNaN(degree_val)) {
            return null;
        }

        // Handle relative octave notation: +1, -1, or absolute number
        let octave;
        if (octaveSpec.startsWith("+") || octaveSpec.startsWith("-")) {
            // Relative octave: +1 means +1 from default, -1 means -1 from default
            const relativeOffset = parseInt(octaveSpec);
            let baseOctave;
            
            if (trackId && tracks[trackId] && tracks[trackId].default_octave !== undefined) {
                // Use track-specific default octave
                baseOctave = tracks[trackId].default_octave;
            } else {
                // Fall back to song default octave
                baseOctave = defaultOctave;
            }
            
            octave = baseOctave + relativeOffset;
        } else {
            // Absolute octave number
            octave = parseInt(octaveSpec);
        }
        
        note = mapDegreeToNote(degree_val, octave, songKey, raiseSemitone);
        console.log('Mapped degree', degree, 'to note:', note);
        return note;
    }

    const degree_val = parseInt(degree);
    if (isNaN(degree_val)) {
        return null;
    }

    // Use track-specific default octave if available, otherwise fall back to song default
    let octave;
    if (trackId && tracks[trackId] && tracks[trackId].default_octave !== undefined) {
        octave = tracks[trackId].default_octave;
    } else {
        octave = defaultOctave;
    }

    return mapDegreeToNote(degree_val, octave, songKey, raiseSemitone);
}

// Map scale degrees to actual notes based on the current key
function mapDegreeToNote(scaleDegree, octave, songKey, raiseSemitone = 0) {
    const majorScale = [0, 2, 4, 5, 7, 9, 11]; 
    const minorScale = [0, 2, 3, 5, 7, 8, 10]; 
    
    const songKeyDropMinor = songKey.replace("m", "");
    const rootNote = songKeyDropMinor + octave; 
    const rootFreq = noteFreqs[rootNote];

    if (!rootFreq) { 
        console.error(`Invalid key: ${songKeyDropMinor}, root note: ${rootNote}`);
        return null;
    }

    if (scaleDegree < 1 || scaleDegree > 7) {
        console.error(`Invalid scale degree: ${scaleDegree}. Must be 1-7.`);
        return null;
    }

    let semitones = songKey.includes("m") ? minorScale[scaleDegree - 1] : majorScale[scaleDegree - 1];

    // Apply the raised semitone
    semitones += raiseSemitone;

    const frequency = rootFreq * Math.pow(2, semitones / 12);

    // Find closest note
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
function playNoteOrChord(noteObject, trackVolume = null, songKey = null, startTime = null) {
    const durationSeconds = (noteObject.duration || 1) * eighthNoteLength / 1000;
    let mappedNote = null;

    is_chord_track = noteObject.track === "chords";
    if (noteObject.chord || is_chord_track) {
        playChord(noteObject.chord || noteObject.degree, trackVolume, durationSeconds, songKey, startTime);
        return;
    }

    // Check if this is a scale degree mapping (new feature)
    if (noteObject.degree !== undefined) {
        // Map the scale degree to an actual note
        mappedNote = mapUnparsedDegreeToNote(noteObject.degree, songKey, noteObject.track);
        
        if (mappedNote === null) {
            console.error(`Failed to map degree ${noteObject.degree} to a note`);
            return;
        }
    }
    
    if (noteObject.note || mappedNote) {
        playNote(noteObject.note || mappedNote, trackVolume, durationSeconds, startTime);
    } else {
        console.warn('Note object has neither note, chord, nor degree field:', noteObject);
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
    
    currentNotes.push({
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
    
    currentNotes.push({
        note: note,
        step: step,
        duration: duration,
        lyrics: lyrics,
        track: track
    });
    
    console.log(`Added note ${note} to recording at step ${step} with duration ${duration}`);
}

// Function to get all notes in a given key
function getNotesInKey(songKey) {
    const notes = [];
    for (let octave = 2; octave <= 4; octave++) {
        for (let i = 1; i <= 7; i++) {
            const note = mapDegreeToNote(i, octave, songKey);
            if (note) {
                notes.push({ note, degree: i });
            }
        }
    }
    return notes;
}

