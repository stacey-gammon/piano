
const scales = {
    major: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    minor: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
};


// Helper: map note name → semitone (C=0, C#=1, etc.)
function noteToSemitone(note) {
    const chromatic = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
    return chromatic.indexOf(note);
}

function getChordNotes(key, degree) {
    const scale = getMinorScale(key); // natural minor
    const chordPatterns = {
        1: [0, 2, 4],
        2: [1, 3, 5],
        3: [2, 4, 6],
        4: [3, 5, 0],
        5: [4, 6, 1],
        6: [5, 0, 2],
        7: [6, 1, 3]
    };

    const indices = chordPatterns[degree];
    const notes = indices.map(i => scale[i]);

    // Figure out chord quality
    const root = notes[0];
    const intervals = [
        (12 + (noteToSemitone(notes[1]) - noteToSemitone(root))) % 12,
        (12 + (noteToSemitone(notes[2]) - noteToSemitone(root))) % 12
    ];

    let quality = "";
    if (intervals[0] === 3 && intervals[1] === 7) quality = "m";   // minor triad
    else if (intervals[0] === 4 && intervals[1] === 7) quality = ""; // major triad
    else if (intervals[0] === 3 && intervals[1] === 6) quality = "dim"; // diminished

    return notes
}

function getMinorScale(key) {
    // Strip off "m" if user passes something like "Bm"
    const root = key.replace("m", "");

    // intervals for natural minor: W-H-W-W-H-W-W
    const semitones = [2, 1, 2, 2, 1, 2, 2];
    const chromatic = scales.minor; // full chromatic scale
    const startIdx = chromatic.indexOf(root);
    const scale = [root];
    let idx = startIdx;
    
    for (let i = 0; i < semitones.length; i++) {
        idx = (idx + semitones[i]) % 12;
        scale.push(chromatic[idx]);
    }
    return scale; // 1-7 scale degrees
}