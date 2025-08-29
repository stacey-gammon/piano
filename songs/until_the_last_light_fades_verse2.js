const lastLightFadesV2 = {
  "notes": [
    {
      "chord": "B",
      "step": 1,
      "duration": 8,
      "track": "chords"
    },
    {
      "degree": "3",
      "step": 1,
      "duration": 1,
      "lyrics": "father",
      "track": "1"
    },
    {
      "note": "B3",
      "duration": 1,
      "track": "2"
    },
    {
      "note": "C#4",
      "duration": 1,
      "lyrics": "oh",
      "track": "1"
    },
    {
      "note": "D#4",
      "duration": 2,
      "lyrics": "my",
      "track": "1"
    },
    {
      "note": "D#4",
      "duration": 1,
      "lyrics": "father",
      "track": "1"
    },
    {
      "note": "C#4",
      "duration": 1,
      "lyrics": "i'll",
      "track": "1"
    },
    {
      "note": "B3",
      "duration": 1,
      "lyrics": "be",
      "track": "1"
    },
    {
      "note": "G#3",
      "duration": 1,
      "lyrics": "stan",
      "track": "1"
    },
    {
      "note": "G#3",
      "lyrics": "din",
      "track": "1"
    },
    {
      "note": "B3",
      "lyrics": "in",
      "track": "1"
    },
    {
      "degree": "1",
      "duration": 2,
      "lyrics": "line",
      "track": "1"
    },
    {
      "degree": "1",
      "lyrics": "to",
      "track": "1"
    },
    {
      "degree": "3",
      "duration": 2,
      "lyrics": "face",
      "track": "1"
    },
    {
      "degree": "2",
      "duration": 1,
      "lyrics": "what",
      "track": "1"
    },
    {
      "degree": "1",
      "duration": 2,
      "lyrics": "faults",
      "track": "1"
    },
    {
      "degree": "2",
      "duration": 1,
      "lyrics": "are",
      "track": "1"
    },
    {
      "degree": "2",
      "duration": 4,
      "lyrics": "mine",
      "track": "1"
    },
    {
      "degree": "2",
      "duration": 2,
      "lyrics": "it's",
      "track": "1"
    },
    {
      "degree": "6",
      "duration": 1,
      "lyrics": "not",
      "track": "1"
    },
    {
      "degree": "6",
      "duration": 2,
      "lyrics": "these",
      "track": "1"
    },
    {
      "degree": "6",
      "duration": 1,
      "lyrics": "old",
      "track": "1"
    },
    {
      "degree": "5",
      "duration": 2,
      "lyrics": "bones",
      "track": "1"
    },
    {
      "degree": "2",
      "lyrics": "that",
      "track": "1"
    },
    {
      "degree": "1",
      "lyrics": "i'll",
      "track": "1"
    },
    {
      "degree": "2",
      "duration": 2,
      "lyrics": "miss",
      "track": "1"
    },
    {
      "degree": "2",
      "duration": 1,
      "lyrics": "in",
      "track": "1"
    },
    {
      "degree": "1",
      "duration": 1,
      "lyrics": "my",
      "track": "1"
    },
    {
      "degree": "2",
      "duration": 4,
      "lyrics": "dy",
      "track": "1"
    },
    {
      "degree": "5",
      "duration": 4,
      "lyrics": "-in",
      "track": "1"
    },
    {
      "note": "B3",
      "duration": 2,
      "lyrics": "its",
      "track": "1"
    },
    {
      "note": "D#4",
      "duration": 1,
      "lyrics": "the",
      "track": "1"
    },
    {
      "note": "D#4",
      "duration": 2,
      "lyrics": "girl",
      "track": "1"
    },
    {
      "note": "C#4",
      "duration": 2,
      "lyrics": "im",
      "track": "1"
    },
    {
      "note": "B3",
      "duration": 4,
      "lyrics": "leavin",
      "track": "1"
    },
    {
      "note": "B3",
      "duration": 4,
      "lyrics": "be",
      "track": "1"
    },
    {
      "note": "B3",
      "duration": 4,
      "lyrics": "hind",
      "track": "1"
    }
  ],
  "tempo": 120,
  "key": "B",
  "title": "Until the last light fades [Verse Two]",
  "tracks": {
    "1": {
      "volume": 5,
      "default_octave": 3
    },
    "2": {
      "volume": 2,
      "default_octave": 4
    },
    "chords": {
      "volume": 5
    }
  }
}

// Register this song with the main application
if (typeof registerSong === 'function') {
  registerSong(lastLightFadesV2);
}