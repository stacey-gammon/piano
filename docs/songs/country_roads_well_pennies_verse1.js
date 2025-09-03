const countryRoadsWellPenniesV1 = {
  "notes": [
    {
      "chord": "1",
      "duration": 4,
      "lyrics": "",
      "track": "chords"
    },
    {
      "degree": "5[-1]",
      "step": 3,
      "duration": 1,
      "lyrics": "al-",
      "track": "1"
    },
    {
      "degree": "5[-1]",
      "duration": 1,
      "lyrics": "most",
      "track": "1"
    },
    {
      "chord": "1",
      "duration": 4,
      "lyrics": "heav-",
      "track": "chords"
    },
    {
      "degree": "6[-1]",
      "lyrics": "heav-",
      "track": "1"
    },
    {
      "degree": "5[-1]",
      "duration": 3,
      "lyrics": "en",
      "track": "1"
    },
    {
      "chord": "6",
      "duration": 4,
      "lyrics": "",
      "step": 9,
      "track": "chords"
    },
    {
      "degree": "6[-1]",
      "step": 11,
      "lyrics": "west",
      "track": "1"
    },
    {
      "degree": "5[-1]",
      "lyrics": "vir",
      "track": "1"
    },
    {
      "degree": "6[-1]",
      "duration": 2,
      "lyrics": "gin",
      "track": "1"
    },
    {
      "degree": "1",
      "duration": 2,
      "lyrics": "a",
      "track": "1"
    },
    {
      "chord": "5",
      "step": 17,
      "duration": 4,
      "lyrics": "",
      "track": "chords"
    },
    {
      "degree": "2",
      "step": 19,
      "lyrics": "blue",
      "track": "1"
    },
    {
      "degree": "2",
      "lyrics": "ridge",
      "track": "1"
    },
    {
      "degree": "3",
      "duration": 2,
      "lyrics": "moun-",
      "track": "1"
    },
    {
      "degree": "2",
      "lyrics": "tains",
      "track": "1"
    },
    {
      "chord": "4",
      "lyrics": "shen",
      "step": 25,
      "duration": 3,
      "track": "chord"
    },
    {
      "degree": "6[-1]",
      "lyrics": "shen",
      "step": 25,
      "track": "1"
    },
    {
      "degree": "6[-1]",
      "lyrics": "en",
      "track": "1"
    },
    {
      "degree": "6[-1]",
      "lyrics": "doh",
      "track": "1"
    },
    {
      "degree": "5[-1]",
      "lyrics": "a",
      "track": "1"
    },
    {
      "chord": "1",
      "lyrics": "ri",
      "step": 29,
      "duration": 3,
      "track": "chord"
    },
    {
      "degree": "6[-1]",
      "lyrics": "ri",
      "track": "1"
    },
    {
      "degree": "1",
      "lyrics": "i",
      "track": "1"
    },
    {
      "degree": "1",
      "lyrics": "ver",
      "track": "1",
      "duration": 3
    }
  ],
  "tempo": 80,
  "key": "C",
  "title": "Country Roads, Well Pennies, Verse 1",
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
  registerSong(countryRoadsWellPenniesV1);
}
