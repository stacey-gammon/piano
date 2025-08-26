// Template for creating new songs
// Copy this file and modify the songData object

const songData = {
    "notes": [
        {
            "note": "C4",
            "step": 1,
            "lyrics": "Example",
            "singer": "1",
            "duration": 1
        }
    ],
    "tempo": 120,
    "title": "Song Title",
    "singers": {
        "1": { "volume": 5 }
    }
};

// Register this song with the main application
if (typeof registerSong === 'function') {
    registerSong(songData);
}
