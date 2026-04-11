const sweetChildOMineVerse = {
    "version": 2,
    "tempo": 100,
    "key": "D",
    "title": "Sweet Child O' Mine (Verse)",
    "tracks": {
      "1": {
        "volume": 3,
        "default_octave": 4,
        "notes": [
         
        ]
      },
      "chords": {
        "volume": 3,
        "notes": [
          {
            "degree": "4",
            "duration": 8,
          },
          {
            "degree": "5",
            "duration": 3,
          },
          {
            "degree": "2",
            "duration": 4,
          },
          {
            "degree": "1",

            "duration": 2,
          },
        ]
    }
  }
}

// Register this song with the main application
if (typeof registerSong === 'function') {
  registerSong(sweetChildOMineVerse);
}
