const calvaryChorus = {
    "notes": [
      {
        "degree": "3",
        "step": 1,
        "lyrics": "Now",
        "track": "main"
      },
      {
        "degree": "6",
        "step": 1,
        "lyrics": "Now",
        "track": "H1"
      },
      {
        "degree": "2",
        "lyrics": "I'm",
        "track": "main"
      },
      {
        "degree": "5",
        "lyrics": "I'm",
        "track": "H1"
      },
      {
        "degree": "1",
        "duration": 3,
        "lyrics": "sa-",
        "track": "main"
      },
      {
        "degree": "5",
        "duration": 3,
        "lyrics": "sa-",
        "track": "H1"
      },
      {
        "degree": "1",
        "lyrics": "-vin",
        "track": "main"
      },
      {
        "degree": "5",
        "lyrics": "-vin",
        "track": "H1"
      },
      {
        "degree": "1",
        "duration": 2,
        "lyrics": "my",
        "track": "main"
      },
      {
        "degree": "5",
        "duration": 2,
        "lyrics": "my",
        "track": "H1"
      },
      {
        "degree": "3",
        "duration": 1,
        "pause": 3,
        "lyrics": "strength",
        "track": "main"
      },
      {
        "degree": "3[+1]",
        "duration": 1,
        "pause": 3,
        "lyrics": "strength",
        "track": "H1"
      },
      {
        "degree": "3",
        "lyrics": "for",
        "track": "main"
      },
      {
        "degree": "5",
        "lyrics": "for",
        "track": "H1"
      },
      {
        "degree": "4",
        "lyrics": "run-",
        "track": "main"
      },
      {
        "degree": "6",
        "lyrics": "run-",
        "track": "H1"
      },
      {
        "degree": "4",
        "duration": 2,
        "pause": 2,
        "lyrics": "-in",
        "track": "main"
      },
      {
        "degree": "6",
        "duration": 2,
        "pause": 2,
        "lyrics": "-in",
        "track": "H1"
      },
      {
        "degree": "5",
        "duration": 1,
        "lyrics": "These",
        "track": "main"
      },
      {
        "degree": "3[+1]",
        "duration": 1,
        "lyrics": "These",
        "track": "H1"
      },
      {
        "degree": "5",
        "duration": 2,
        "lyrics": "days",
        "track": "main"
      },
      
      {
        "degree": "3[+1]",
        "duration": 2,
        "lyrics": "days",
        "track": "H1"
      },
      {
        "degree": "3",
        "duration": 1,
        "lyrics": "I'm",
        "track": "main"
      },
      
      {
        "degree": "1[+1]",
        "duration": 1,
        "lyrics": "I'm",
        "track": "H1"
        },
        {
          "degree": "3",
          "duration": 2,
          "lyrics": "sav-",
          "track": "main"
        },
        
        {
          "degree": "1[+1]",
          "duration": 2,
          "lyrics": "sav-",
          "track": "H1"
        },
        {
          "degree": "3",
          "lyrics": "-in",
          "track": "main"
        },
        
        {
          "degree": "5",
          "lyrics": "-in",
          "track": "H1"
        },
        {
          "degree": "3",
          "duration": 2,
          "lyrics": "my",
          "track": "main"
        },
        {
          "degree": "5",
          "duration": 2,
          "lyrics": "my",
          "track": "H1"
        },
        {
          "degree": "4",
          "duration": 2,
          "pause": 2,
          "lyrics": "strength",
          "track": "main"
        },
        
        {
          "degree": "6",
          "duration": 2,
          "pause": 2,
          "lyrics": "strength",
          "track": "H1"
        },
        {
          "degree": "1",
          "lyrics": "for",
          "track": "main"
        },
        
        {
          "degree": "5",
          "lyrics": "for",
          "track": "H1"
        },
        {
          "degree": "4",
          "lyrics": "run-",
          "track": "main"
        },
        
        {
          "degree": "6",
          "lyrics": "run-",
          "track": "H1"
        },
        {
          "degree": "4",
          "duration": 2,
          "pause": 2,
          "lyrics": "-in",
          "track": "main"
        },
        
        {
          "degree": "6",
          "duration": 2,
          "pause": 2,
          "lyrics": "-in",
          "track": "H1"
        },
    ],
    "tempo": 100,
    "key": "D",
    "title": "Calvary Chorus",
    "tracks": {
      "main": {
        "volume": 3,
        "default_octave": 3
      },
      "H1": {
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
  registerSong(calvaryChorus);
}
