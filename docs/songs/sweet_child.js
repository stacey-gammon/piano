const sweetChildOMineOos = {
    "version": 2,
    "tempo": 100,
    "key": "D",
    "title": "Sweet Child O' Mine (Oos)",
    "tracks": {
      "1": {
        "volume": 3,
        "default_octave": 4,
        "notes": [
          {
            "degree": "1[+1]",
            "duration": 3,
            "lyrics": "ooo"
          },
          {
            "degree": "6",
            "lyrics": "oh"
          },
          {
            "degree": "5",
            "lyrics": "oh"
          },
          {
            "degree": "6",
            "lyrics": "oh"
          },
          {
            "degree": "1[+1]",
            "duration": 2,
            "lyrics": "oh"
          },
          {
            "degree": "6",
            "duration": 3,
            "lyrics": "oh"
          },
          {
            "degree": "4",
            "duration": 2,
            "lyrics": "Sweet"
          },
          {
            "degree": "4",
            "duration": 2,
            "lyrics": "love"
          },
          {
            "degree": "3",
            "duration": 2,
            "lyrics": "of"
          },
          {
            "degree": "3",
            "duration": 2,
            "lyrics": "Mi"
          },
          {
            "degree": "2",
            "lyrics": "ii"
          },
          {
            "degree": "1",
            "duration": 3,
            "lyrics": "ne"
          },
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
  registerSong(sweetChildOMineOos);
}
