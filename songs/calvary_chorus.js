const calvaryChorus = {
    "notes": [
      {
        "degree": "3",
        "step": 1,
        "lyrics": "Now",
        "track": "main"
      },
      {
        "degree": "6",
        "step": 1,
        "lyrics": "Now",
        "track": "H1"
      },
      {
        "degree": "2",
        "lyrics": "I'm",
        "track": "main"
      },
      {
        "degree": "5",
        "lyrics": "I'm",
        "track": "H1"
      },
      {
        "degree": "1",
        "duration": 3,
        "lyrics": "sa-",
        "track": "main"
      },
      {
        "degree": "5",
        "duration": 3,
        "lyrics": "sa-",
        "track": "H1"
      },
      {
        "degree": "1",
        "lyrics": "-vin",
        "track": "main"
      },
      {
        "degree": "5",
        "lyrics": "-vin",
        "track": "H1"
      },
      {
        "degree": "1",
        "duration": 2,
        "lyrics": "my",
        "track": "main"
      },
      {
        "degree": "5",
        "duration": 2,
        "lyrics": "my",
        "track": "H1"
      },
      {
        "degree": "3",
        "duration": 1,
        "lyrics": "strength",
        "track": "main"
      },
      {
        "degree": "3[+1]",
        "lyrics": "strength",
        "track": "H1"
      },
    ],
    "tempo": 100,
    "key": "D",
    "title": "Calvary Chorus",
    "tracks": {
      "main": {
        "volume": 3,
        "default_octave": 3
      },
      "H1": {
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
  registerSong(calvaryChorus);
}
