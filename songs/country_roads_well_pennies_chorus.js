const countryRoadsWellPenniesChorus = {
  "notes": [
    {
      "chord": "1",
      "duration": 4,
      "lyrics": "",
      "track": "chords"
    },
    {
      "degree": "1",
      "duration": 2,
      "step": 3,
      "lyrics": "Coun",
      "track": "1"
    },
    {
      "degree": "5",
      "duration": 2,
      "step": 3,
      "lyrics": "Coun",
      "track": "2"
    },
    {
      "degree": "2",
      "lyrics": "try",
      "track": "1"
    },
    {
      "degree": "7",
      "lyrics": "try",
      "track": "2"
    },
    {
      "degree": "3",
      "duration": 3,
      "lyrics": "roads",
      "track": "1"
    },
    {
      "degree": "1[+1]",
      "duration": 3,
      "lyrics": "roads",
      "track": "2"
    },
    {
      "degree": "1",
      "duration": 4,
      "step": 13,
      "track": "chords"
    },
    {
      "degree": "3",
      "duration": 1,
      "step": 13,
      "lyrics": "ta",
      "track": "1"
    },
    {
      "degree": "1[+1]",
      "duration": 4,
      "step": 13,
      "lyrics": "ta",
      "track": "2"
    },
    {
      "degree": "2",
      "duration": 3,
      "lyrics": "ake",
      "track": "1"
    },
    {
      "degree": "1",
      "duration": 1,
      "step": 16,
      "lyrics": "me",
      "track": "1"
    },
    {
      "degree": "1[+1]",
      "duration": 1,
      "lyrics": "me",
      "step": 16,
      "track": "2"
    },
    {
      "chord": "5",
      "duration": 3,
      "step": 17,
      "lyrics": "home",
      "track": "chords"
    },
    {
      "degree": "2",
      "duration": 3,
      "lyrics": "home",
      "track": "1"
    },
    {
      "degree": "7",
      "duration": 3,
      "lyrics": "home",
      "track": "2"
    }
  ],
  "tempo": 80,
  "key": "C",
  "title": "Country Roads, Well Pennies, Chorus",
  "tracks": {
    "1": {
      "volume": 3,
      "default_octave": 4
    },
    "2": {
      "volume": 3,
      "default_octave": 3
    },
    "chords": {
      "volume": 2
    }
  }
}

// Register this song with the main application
if (typeof registerSong === 'function') {
  registerSong(countryRoadsWellPenniesChorus);
}
