
const scales = {
    major: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    minor: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
};

function getChordNotes(key, degree) {
    const scale = getMinorScale(key); // scale degrees 1-7
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
    return indices.map(i => scale[i]);
}

function getMinorScale(key) {
    // intervals for natural minor: W-H-W-W-H-W-W
    const semitones = [2, 1, 2, 2, 1, 2, 2];
    const chromatic = scales.minor; // full chromatic scale
    const startIdx = chromatic.indexOf(key);
    const scale = [key];
    let idx = startIdx;
    
    for (let i = 0; i < semitones.length; i++) {
        idx = (idx + semitones[i]) % 12;
        scale.push(chromatic[idx]);
    }
    return scale; // 1-7 scale degrees
}