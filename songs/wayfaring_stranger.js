const wayfaringStranger = {
    "notes": [
      {
        "chord": "Dm",
        "step": 1,
        "duration": 8,
        "lyrics": "I'm",
        "track": "chords",
      },
      {
        "degree": "1",
        "step": 1,
        "duration": 2,
        "lyrics": "I'm",
        "track": "main"
      },
      {
        "degree": "3[+1]",
        "step": 1,
        "duration": 2,
        "lyrics": "I'm",
        "track": "harmony"
      },
      {
        "degree": "1",
        "duration": 2,
        "lyrics": "just",
        "track": "main"
      },
      {
        "degree": "3[+1]",
        "duration": 2,
        "lyrics": "just",
        "track": "harmony"
      },
      {
        "degree": "5",
        "duration": 1,
        "lyrics": "a",
        "track": "main"
      },
      {
        "degree": "1[4]",
        "duration": 1,
        "lyrics": "a",
        "track": "harmony"
      },
      {
        "degree": "5",
        "duration": 5,
        "lyrics": "poor",
        "track": "main"
      },
      {
        "degree": "1[4]",
        "duration": 5,
        "lyrics": "poor",
        "track": "harmony"
      },
    ],
    "tempo": 100,
    "key": "Dm",
    "title": "Wayfaring Stranger [Verse]",
    "tracks": {
      "main": {
        "volume": 3,
        "default_octave": 3
      },
      "harmony": {
        "volume": 3,
        "default_octave": 3
      },
      "chords": {
        "volume": 0
      }
    }
  }

// Register this song with the main application
if (typeof registerSong === 'function') {
  registerSong(wayfaringStranger);
}
