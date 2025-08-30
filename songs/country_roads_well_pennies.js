const countryRoadsWellPennies = {
    "notes": [
      {
        "degree": "1",
        "lyrics": "al-",
        "track": "chords",
      },
      {
        "degree": "1",
        "duration": 2,
        "lyrics": "most",
        "track": "1"
      },
      {
        "degree": "2",
        "lyrics": "heav-",
        "track": "1"
      },
      {
        "degree": "1",
        "duration": 3,
        "lyrics": "en",
        "track": "1"
      },
      {
        "degree": "2",
        "lyrics": "west",
        "track": "1"
      },
      {
        "degree": "1",
        "lyrics": "vir",
        "track": "1"
      },
      {
        "degree": "2",
        "duration": 2,
        "lyrics": "gin",
        "track": "1"
      },
      {
        "degree": "4",
        "duration": 2,
        "lyrics": "a",
        "track": "1"
      },
      {
        "degree": "5",
        "lyrics": "blue",
        "track": "1"
      },
      {
        "degree": "5",
        "lyrics": "ridge",
        "track": "1"
      },
      {
        "degree": "6",
        "lyrics": "moun-",
        "track": "1"
      },
      {
        "degree": "5",
        "lyrics": "tains",
        "track": "1"
      },
      
    ],
    "tempo": 100,
    "key": "G",
    "title": "Country Roads, Well Pennies",
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
  registerSong(countryRoadsWellPennies);
}
