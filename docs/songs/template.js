// Template for creating new songs
// Copy this file and modify the songData object

const songData = {
    "notes": [
        {
            "degree": "1",
            "step": 1,
            "lyrics": "Example",
            "track": "main",
            "duration": 1
        },
        {
            "degree": "1[+1]",
            "step": 2,
            "lyrics": "Higher",
            "track": "harmony",
            "duration": 1
        }
    ],
    "tempo": 120,
    "key": "C",
    "default_octave": 4,
    "title": "Song Title",
    "tracks": {
        "main": { 
            "volume": 5,
            "default_octave": 4
        },
        "harmony": { 
            "volume": 3,
            "default_octave": 5
        }
    }
};

// Register this song with the main application
if (typeof registerSong === 'function') {
    registerSong(songData);
}
