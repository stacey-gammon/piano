const americanFlowers = {
  "version": 2,
  "tempo": 100,
  "key": "E",
  "title": "American Flowers",
  "tracks": {
    "1": {
      "volume": 5,
      "default_octave": 3,
      "notes": [
        {
          "degree": "1",
          "lyrics": "I"
        },
        {
          "degree": "1",
          "lyrics": "have"
        },
        {
          "degree": "3",
          "lyrics": "seen"
        },
        {
          "degree": "3",
          "lyrics": "A"
        },
        {
          "degree": "3",
          "duration": 2,
          "lyrics": "me"
        },
        {
          "degree": "2",
          "lyrics": "ri"
        },
        {
          "degree": "1",
          "lyrics": "can"
        },
        {
          "degree": "1",
          "lyrics": "Flow"
        },
        {
          "degree": "1",
          "duration": 2,
          "lyrics": "ers"
        }
      ]
    }
  }
}

// Register this song with the main application
if (typeof registerSong === 'function') {
registerSong(americanFlowers);
}
