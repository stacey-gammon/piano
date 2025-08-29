const lastLightFadesV1 = {
    "notes": [
      {
        "chord": "B",
        "step": 1,
        "duration": 8,
        "track": "chords"
      },
      {
        "key": "3",
        "step": 1,
        "duration": 1,
        "lyrics": "born",
        "track": "1"
      },
      {
        "note": "B3",
        "step": 1,
        "duration": 1,
        "track": "2"
      },
      {
        "note": "C#4",
        "step": 2,
        "duration": 1,
        "lyrics": "to",
        "track": "1"
      },
      {
        "note": "D#4",
        "step": 3,
        "duration": 2,
        "lyrics": "die",
        "track": "1"
      },
      {
        "note": "D#4",
        "step": 5,
        "duration": 1,
        "lyrics": "born",
        "track": "1"
      },
      {
        "note": "C#4",
        "step": 6,
        "duration": 1,
        "lyrics": "to",
        "track": "1"
      },
      {
        "note": "B3",
        "step": 7,
        "duration": 1,
        "lyrics": "die",
        "track": "1"
      },
      {
        "note": "G#3",
        "step": 9,
        "duration": 1,
        "lyrics": "darl",
        "track": "1"
      },
      {
        "note": "G#3",
        "step": 10,
        "duration": 1,
        "lyrics": "lin",
        "track": "1"
      },
      {
        "note": "B3",
        "step": 11,
        "duration": 1,
        "lyrics": "you’ll",
        "track": "1"
      },
      {
        "degree": "5",
        "step": 12,
        "duration": 2,
        "lyrics": "live",
        "track": "1"
      },
      {
        "note": "C#4",
        "step": 15,
        "duration": 1,
        "lyrics": "no",
        "track": "1"
      },
      {
        "note": "D#4",
        "step": 16,
        "duration": 2,
        "lyrics": "lon",
        "track": "1"
      },
      {
        "note": "C#4",
        "step": 18,
        "duration": 1,
        "lyrics": "ger",
        "track": "1"
      },
      {
        "note": "B3",
        "step": 19,
        "duration": 2,
        "lyrics": "than",
        "track": "1"
      },
      {
        "note": "C#4",
        "step": 21,
        "duration": 1,
        "lyrics": "your",
        "track": "1"
      },
      {
        "note": "C#4",
        "step": 23,
        "duration": 4,
        "lyrics": "years",
        "track": "1"
      },
      {
        "note": "C#4",
        "step": 27,
        "duration": 2,
        "lyrics": "if",
        "track": "1"
      },
      {
        "note": "F#4",
        "step": 29,
        "duration": 1,
        "lyrics": "heav-",
        "track": "1"
      },
      {
        "note": "G#4",
        "step": 30,
        "duration": 2,
        "lyrics": "en",
        "track": "1"
      },
      {
        "note": "G#4",
        "step": 32,
        "duration": 1,
        "lyrics": "and",
        "track": "1"
      },
      {
        "note": "F#4",
        "step": 33,
        "duration": 2,
        "lyrics": "earth",
        "track": "1"
      },
      {
        "note": "B3",
        "step": 36,
        "duration": 1,
        "lyrics": "are",
        "track": "1"
      },
      {
        "note": "C#4",
        "step": 37,
        "duration": 1,
        "lyrics": "both",
        "track": "1"
      },
      {
        "note": "C#4",
        "step": 38,
        "duration": 2,
        "lyrics": "on",
        "track": "1"
      },
      {
        "note": "B3",
        "step": 40,
        "duration": 1,
        "lyrics": "the",
        "track": "1"
      },
      {
        "note": "C#4",
        "step": 41,
        "duration": 1,
        "lyrics": "mar-",
        "track": "1"
      },
      {
        "note": "F#4",
        "step": 42,
        "duration": 4,
        "lyrics": "ket",
        "track": "1"
      },
      {
        "note": "G#4",
        "step": 48,
        "duration": 4,
        "lyrics": "hell",
        "track": "1"
      },
      {
        "note": "B3",
        "step": 52,
        "duration": 2,
        "lyrics": "has",
        "track": "1"
      },
      {
        "note": "D#4",
        "step": 54,
        "duration": 1,
        "lyrics": "noth-",
        "track": "1"
      },
      {
        "note": "D#4",
        "step": 55,
        "duration": 2,
        "lyrics": "ing",
        "track": "1"
      },
      {
        "note": "C#4",
        "step": 57,
        "duration": 2,
        "lyrics": "to",
        "track": "1"
      },
      {
        "note": "B3",
        "step": 59,
        "duration": 4,
        "lyrics": "fear",
        "track": "1"
      }
    ],
    "tempo": 120,
    "key": "B",
    "title": "Until the last light fades [Verse One]",
    "tracks": {
      "1": {
        "volume": 5
      },
      "2": {
        "volume": 2
      },
      "chords": {
        "volume": 5
      }
    }
  }

// Register this song with the main application
if (typeof registerSong === 'function') {
    registerSong(lastLightFadesV1);
  }