const lastLightFadesChorus = {
    "notes": [
      {
        "chord": "B",
        "step": 1,
        "duration": 8,
        "track": "chords"
      },
      {
        "note": "B3",
        "step": 1,
        "duration": 2,
        "lyrics": "so",
        "track": "main"
      },
      {
        "note": "F#3",
        "step": 1,
        "duration": 2,
        "lyrics": "so",
        "track": "harmony"
      },
      {
        "note": "D#4",
        "duration": 4,
        "lyrics": "where",
        "track": "main"
      },
      {
        "note": "B3",
        "duration": 4,
        "lyrics": "where",
        "track": "harmony"
      },
      {
        "note": "F#4",
        "duration": 2,
        "lyrics": "oh",
        "track": "main"
      },
      {
        "note": "D#4",
        "duration": 2,
        "lyrics": "oh",
        "track": "harmony"
      },
      {
        "note": "F#4",
        "duration": 4,
        "lyrics": "where",
        "track": "main"
      },
      {
        "note": "B3",
        "duration": 4,
        "lyrics": "where",
        "track": "harmony"
      },
      {
        "note": "E4",
        "duration": 1,
        "lyrics": "have",
        "track": "main"
      },
      {
        "note": "B3",
        "duration": 1,
        "lyrics": "have",
        "track": "harmony"
      },
      {
        "note": "D#4",
        "duration": 2,
        "lyrics": "the",
        "track": "main"
      },
      {
        "note": "A#3",
        "duration": 2,
        "lyrics": "the",
        "track": "harmony"
      },
      {
        "note": "E4",
        "duration": 4,
        "lyrics": "lights",
        "track": "main"
      },
      {
        "note": "B3",
        "duration": 4,
        "track": "harmony"
      },
      {
        "note": "B3",
        "duration": 2,
        "lyrics": "gone",
        "track": "main"
      },
      {
        "note": "F#3",
        "duration": 2,
        "track": "harmony"
      },
      {
        "note": "B3",
        "duration": 2,
        "lyrics": "love",
        "track": "main"
      },
      {
        "note": "F#3",
        "duration": 2,
        "track": "harmony"
      },
    ],
    "tempo": 100,
    "title": "Until the last light fades [Chorus Only]",
    "tracks": {
      "1": {
        "volume": 3
      },
      "2": {
        "volume": 3
      },
      "chords": {
        "volume": 3
      }
    }
  }
  
// Register this song with the main application
if (typeof registerSong === 'function') {
  registerSong(lastLightFadesChorus);
}