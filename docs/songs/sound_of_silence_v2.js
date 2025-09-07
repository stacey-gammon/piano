const soundOfSilenceV2 = {
    "version": 2,
    "tempo": 100,
    "key": "D#m",
    "title": "Sound of Silence (Version 2)",
    "tracks": {
      "1": {
        "volume": 5,
        "default_octave": 3,
        "notes": [
          {
            "degree": "1",
            "step": 2,
            "lyrics": "Hel-"
          },
          {
            "degree": "1",
            "lyrics": "lo"
          },
          {
            "degree": "3",
            "lyrics": "dark"
          },
          {
            "degree": "3",
            "lyrics": "ness"
          },
          {
            "degree": "5",
            "lyrics": "my"
          },
          {
            "degree": "5",
            "lyrics": "old"
          },
          {
            "degree": "4",
            "duration": 6,
            "lyrics": "friend"
          },
          {
            "degree": "7[-1]",
            "lyrics": "I've"
          },
          {
            "degree": "7[-1]",
            "lyrics": "come"
          },
          {
            "degree": "7[-1]",
            "lyrics": "to"
          },
          {
            "degree": "4",
            "lyrics": "talk"
          },
          {
            "degree": "4",
            "lyrics": "with"
          },
          {
            "degree": "4",
            "lyrics": "you"
          },
          {
            "degree": "4",
            "lyrics": "a-"
          },
          {
            "degree": "3",
            "duration": 2,
            "lyrics": "gain"
          }
        ]
      },
      "2": {
        "volume": 3,
        "default_octave": 3,
        "notes": [
          {
            "degree": "1",
            "step": 2,
            "lyrics": "Hel-"
          },
          {
            "degree": "1",
            "lyrics": "lo"
          },
          {
            "degree": "1",
            "step": 4,
            "lyrics": "dark"
          },
          {
            "degree": "1",
            "lyrics": "ness"
          },
          {
            "degree": "1",
            "lyrics": "my"
          },
          {
            "degree": "1",
            "lyrics": "old"
          },
          {
            "degree": "7[-1]",
            "duration": 6,
            "lyrics": "friend"
          },
          {
            "degree": "7[-1]",
            "lyrics": "I've"
          },
          {
            "degree": "7[-1]",
            "lyrics": "come"
          },
          {
            "degree": "7[-1]",
            "lyrics": "to"
          },
          {
            "degree": "2",
            "lyrics": "talk"
          },
          {
            "degree": "2",
            "lyrics": "with"
          },
          {
            "degree": "2",
            "lyrics": "you"
          },
          {
            "degree": "2",
            "lyrics": "a-"
          },
          {
            "degree": "1",
            "duration": 2,
            "lyrics": "gain"
          }
        ]
      },
      "chords": {
        "volume": 1,
        "notes": [
          {
            "chord": "1",
            "step": 1,
            "lyrics": "",
            "duration": 8
          },
          {
            "chord": "7",
            "step": 8,
            "lyrics": "",
            "duration": 8
          },
          {
            "chord": "1",
            "step": 21,
            "lyrics": "",
            "duration": 8
          }
        ]
      }
    }
  }

// Register this song with the main application
if (typeof registerSong === 'function') {
  registerSong(soundOfSilenceV2);
}
