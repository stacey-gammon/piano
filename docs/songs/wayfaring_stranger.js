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
        "track": "1"
      },
      {
        "degree": "3[+1]",
        "step": 1,
        "duration": 2,
        "lyrics": "I'm",
        "track": "2"
      },
      {
        "degree": "1",
        "duration": 3,
        "lyrics": "just",
        "track": "1"
      },
      {
        "degree": "3[+1]",
        "duration": 3,
        "lyrics": "just",
        "track": "2"
      },
      {
        "degree": "5",
        "duration": 1,
        "lyrics": "a",
        "track": "1"
      },
      {
        "degree": "1[4]",
        "duration": 1,
        "lyrics": "a",
        "track": "2"
      },
      {
        "degree": "5",
        "duration": 5,
        "lyrics": "poor",
        "track": "1"
      },
      {
        "degree": "1[4]",
        "duration": 5,
        "lyrics": "poor",
        "track": "2"
      },
      {
        "degree": "5",
        "duration": 2,
        "lyrics": "way",
        "track": "1"
      },
      {
        "degree": "1",
        "duration": 2,
        "lyrics": "way",
        "track": "2"
      },
      {
        "degree": "5",
        "duration": 3,
        "lyrics": "fare",
        "track": "1"
      },
      {
        "degree": "1",
        "duration": 3,
        "lyrics": "fare",
        "track": "2"
      },
      {
        "degree": "3",
        "duration": 1,
        "lyrics": "in",
        "track": "1"
      },
      {
        "degree": "1",
        "duration": 1,
        "lyrics": "in",
        "track": "2"
      },
      {
        "degree": "1",
        "duration": 1,
        "lyrics": "strang",
        "track": "1"
      },
      {
        "degree": "1",
        "duration": 1,
        "lyrics": "strang",
        "track": "2"
      },
      {
        "degree": "1",
        "duration": 1,
        "lyrics": "er",
        "track": "1"
      },
    ],
    "tempo": 100,
    "key": "Dm",
    "title": "Wayfaring Stranger [Verse]",
    "tracks": {
      "1": {
        "volume": 3,
        "default_octave": 3
      },
      "2": {
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
