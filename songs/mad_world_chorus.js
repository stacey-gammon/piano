const madWorldChorus = {
    "notes": [
      {
        "chord": "1",
        "step": 1,
        "duration": 8,
        "lyrics": "and",
        "track": "chords",
      },
      {
        "degree": "1",
        "step": 1,
        "lyrics": "and",
        "track": "main"
      },
      {
        "degree": "1",
        "lyrics": "I",
        "track": "main"
      },
      {
        "degree": "3",
        "lyrics": "find",
        "track": "main"
      },
      {
        "degree": "3",
        "duration": 1,
        "lyrics": "it",
        "track": "main"
      },
      {
        "degree": "5",
        "duration": 1,
        "lyrics": "kind",
        "track": "main"
      },
      {
        "degree": "5",
        "lyrics": "of",
        "track": "main"
      },
      {
        "chord": "4",
        "lyrics": "funny",
        "track": "chords"
      },
      {
        "degree": "#6",
        "lyrics": "fun-",
        "track": "main"
      },
      {
        "degree": "4",
        "duration": 4,
        "lyrics": "-ny",
        "track": "main"
      },
      {
        "degree": "4",
        "duration": 2,
        "lyrics": "I",
        "track": "main"
      },
      {
        "degree": "#6",
        "lyrics": "find",
        "track": "main"
      },
      {
        "degree": "#6",
        "lyrics": "it",
        "track": "main"
      },
      {
        "degree": "4",
        "lyrics": "kind",
        "track": "main"
      },
      {
        "degree": "4",
        "lyrics": "of",
        "track": "main"
      },
      {
        "degree": "1",
        "duration": 4,
        "lyrics": "sad",
        "track": "main"
      },
      {
        "degree": "1[+1]",
        "duration": 4,
        "lyrics": "harmony",
        "track": "harmony"
      },
      {
        "degree": "3[-1]",
        "duration": 2,
        "lyrics": "low",
        "track": "main"
      }
    ],
    "tempo": 100,
    "key": "Bm",
    "default_octave": 3,
    "title": "Mad World [Chorus]",
    "tracks": {
      "main": {
        "volume": 3,
        "default_octave": 4
      },
      "harmony": {
        "volume": 3,
        "default_octave": 5
      },
      "chords": {
        "volume": 0,
        "default_octave": 3
      }
    }
  }

// Register this song with the main application
if (typeof registerSong === 'function') {
  registerSong(madWorldChorus);
}
