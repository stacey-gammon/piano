const songData ={
    "notes": [
      {
        "chord": "B",
        "step": 1,
        "duration": 8,
        "lyrics": "born",
        "singer": "chords"
      },
      {
        "note": "D#4",
        "step": 1,
        "duration": 1,
        "lyrics": "born",
        "singer": "1"
      },
      {
        "note": "B3",
        "step": 1,
        "duration": 1,
        "lyrics": "born",
        "singer": "2"
      },
      {
        "note": "C#4",
        "step": 2,
        "duration": 1,
        "lyrics": "to",
        "singer": "1"
      },
      {
        "note": "D#4",
        "step": 3,
        "duration": 2,
        "lyrics": "die",
        "singer": "1"
      },
      {
        "note": "D#4",
        "step": 5,
        "duration": 1,
        "lyrics": "born",
        "singer": "1"
      },
      {
        "note": "C#4",
        "step": 6,
        "duration": 1,
        "lyrics": "to",
        "singer": "1"
      },
      {
        "note": "B3",
        "step": 7,
        "duration": 1,
        "lyrics": "die",
        "singer": "1"
      },
      {
        "note": "G#3",
        "step": 9,
        "duration": 1,
        "lyrics": "darl",
        "singer": "1"
      },
      {
        "note": "G#3",
        "step": 10,
        "duration": 1,
        "lyrics": "lin",
        "singer": "1"
      },
      {
        "note": "B3",
        "step": 11,
        "duration": 1,
        "lyrics": "you’ll",
        "singer": "1"
      },
      {
        "note": "F#3",
        "step": 12,
        "duration": 2,
        "lyrics": "live",
        "singer": "1"
      },
      {
        "note": "C#4",
        "step": 15,
        "duration": 1,
        "lyrics": "no",
        "singer": "1"
      },
      {
        "note": "D#4",
        "step": 16,
        "duration": 2,
        "lyrics": "lon",
        "singer": "1"
      },
      {
        "note": "C#4",
        "step": 18,
        "duration": 1,
        "lyrics": "ger",
        "singer": "1"
      },
      {
        "note": "B3",
        "step": 19,
        "duration": 2,
        "lyrics": "than",
        "singer": "1"
      },
      {
        "note": "C#4",
        "step": 21,
        "duration": 1,
        "lyrics": "your",
        "singer": "1"
      },
      {
        "note": "C#4",
        "step": 23,
        "duration": 2,
        "lyrics": "years",
        "singer": "1"
      }
    ],
    "tempo": 120,
    "title": "Until the last light fades",
    "singers": {
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
    registerSong(songData);
}