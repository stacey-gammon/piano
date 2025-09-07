const countryRoadsWellPenniesChorusV2 = {
    "version": 2,
    "tempo": 80,
    "key": "C",
    "title": "Country Roads, Well Pennies, Chorus (Version 2)",
    "tracks": {
      "1": {
        "volume": 3,
        "default_octave": 4,
        "notes": [
          {
            "degree": "1",
            "duration": 2,
            "step": 2,
            "lyrics": "Coun"
          },
          {
            "degree": "2",
            "lyrics": "try"
          },
          {
            "degree": "3",
            "duration": 6,
            "lyrics": "roads"
          },
          {
            "degree": "3",
            "step": 13,
            "lyrics": "take"
          },
          {
            "degree": "1",
            "lyrics": "me"
          },
          {
            "degree": "2",
            "duration": 6,
            "lyrics": "home"
          },
          {
            "degree": "3",
            "lyrics": "to"
          },
          {
            "degree": "1",
            "lyrics": "the"
          },
          {
            "degree": "1",
            "duration": 6,
            "lyrics": "place"
          }
        ]
      },
      "2": {
        "volume": 3,
        "default_octave": 3,
        "notes": [
          {
            "degree": "5",
            "duration": 2,
            "step": 2,
            "lyrics": "Coun"
          },
          {
            "degree": "7",
            "lyrics": "try"
          },
          {
            "degree": "1[+1]",
            "duration": 6,
            "lyrics": "roads"
          },
          {
            "degree": "1[+1]",
            "step": 13,
            "lyrics": "take"
          },
          {
            "degree": "6",
            "lyrics": "me"
          },
          {
            "degree": "7",
            "duration": 6,
            "lyrics": "home"
          },
          {
            "degree": "1",
            "lyrics": "to"
          },
          {
            "degree": "6",
            "lyrics": "the"
          },
          {
            "degree": "6",
            "duration": 6,
            "lyrics": "place"
          }
        ]
      },
      "chords": {
        "volume": 2,
        "notes": [
          {
            "chord": "1",
            "duration": 8,
            "step": 5,
            "lyrics": ""
          },
          {
            "degree": "1",
            "duration": 4,
            "step": 13,
            "track": "chords"
          },
          {
            "chord": "5",
            "duration": 3,
            "step": 17,
            "lyrics": ""
          },
          {
            "chord": "6",
            "lyrics": "to"
          }
        ]
      }
    }
  }

// Register this song with the main application
if (typeof registerSong === 'function') {
  registerSong(countryRoadsWellPenniesChorusV2);
}
