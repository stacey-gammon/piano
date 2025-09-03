const soundOfSilence = {
  "notes": [
    {
      "chord": "1",
      "step": 1,
      "lyrics": "",
      "track": "chords",
      "duration": 8
    },
    {
      "degree": "1",
      "step": 2,
      "lyrics": "Hel-",
      "track": "1",
    },
    {
      "degree": "1",
      "lyrics": "lo",
      "track": "1",
    },
    {
      "degree": "3",
      "lyrics": "dark",
      "track": "1",
    },
    {
      "degree": "3",
      "lyrics": "ness",
      "track": "1",
    },
    {
      "degree": "5",
      "lyrics": "my",
      "track": "1",
    },
    {
      "degree": "5",
      "lyrics": "old",
      "track": "1",
    },
    {
      "degree": "4",
      "lyrics": "friend",
      "track": "1",
    }
  ],
  "tempo": 100,
  "key": "D#m",
  "title": "Sound of Silence",
  "tracks": {
    "1": {
      "volume": 5,
      "default_octave": 3
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
  registerSong(soundOfSilence);
}
