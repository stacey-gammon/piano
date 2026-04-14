const teachYourChildrenVerse = {
  "version": 2,
  "tempo": 80,
  "key": "D",
  "title": "Teach your Children Verse",
  "tracks": {
    "Faith": {
      "volume": 5,
      "default_octave": 3,
      "notes": [
        { "degree": "3", "duration": 2, "lyrics": "You", "start_of_line": true },
        { "degree": "3", "lyrics": "who"},
        { "degree": "3", "lyrics": "are"},
        { "degree": "3", "duration": 2, "lyrics": "on"},
        { "degree": "1", "lyrics": "the"},
        { "degree": "4", "lyrics": "road"},

        { "degree": "4", "lyrics": "Must", "start_of_line": true },
        { "degree": "4", "lyrics": "have"},
        { "degree": "6", "lyrics": "a"},
        { "degree": "5", "duration": 2, "lyrics": "code"},
        { "degree": "3", "lyrics": "that",  "start_of_line": true},
        { "degree": "3", "lyrics": "you"},
        { "degree": "3", "lyrics": "can"},
        { "degree": "6", "lyrics": "live"},
        { "degree": "5", "duration": 2, "lyrics": "by"},

      ]
    },
    "Kellie": {
      "volume": 5,
      "default_octave": 4,
      "notes": [
        { "degree": "5[-1]",  "duration": 2, "lyrics": "You", "start_of_line": true },
        { "degree": "5[-1]", "lyrics": "who"},
        { "degree": "5[-1]", "lyrics": "are"},
        { "degree": "5[-1]", "duration": 2, "lyrics": "on"},
        { "degree": "3[-1]", "lyrics": "the"},
        { "degree": "6[-1]", "lyrics": "road"},

        { "degree": "6[-1]", "lyrics": "Must", "start_of_line": true },
        { "degree": "6[-1]", "lyrics": "have"},
        { "degree": "1", "lyrics": "a"},
        { "degree": "1", "duration": 2, "lyrics": "code"},
        { "degree": "5[-1]", "lyrics": "that",  "start_of_line": true},
        { "degree": "5[-1]", "lyrics": "you"},
        { "degree": "5[-1]", "lyrics": "can"},
        { "degree": "1", "lyrics": "live"},
        { "degree": "7[-1]", "duration": 2, "lyrics": "by"},
      ]
    },
    "Stacey": {
      "volume": 5,
      "default_octave": 4,
      "notes": [
        { "degree": "1", "duration": 2, "lyrics": "You", "start_of_line": true },
        { "degree": "1", "lyrics": "who"},
        { "degree": "1", "lyrics": "are"},
        { "degree": "1", "duration": 2, "lyrics": "on"},
        { "degree": "5[-1]", "lyrics": "the"},
        { "degree": "1", "lyrics": "road"},

        { "degree": "1", "lyrics": "Must", "start_of_line": true },
        { "degree": "1", "lyrics": "have"},
        { "degree": "4", "lyrics": "a"},
        { "degree": "3", "duration": 2, "lyrics": "code"},
        { "degree": "1", "lyrics": "that",  "start_of_line": true},
        { "degree": "1", "lyrics": "you"},
        { "degree": "1", "lyrics": "can"},
        { "degree": "3", "lyrics": "live"},
        { "degree": "2", "duration": 2, "lyrics": "by"},
      ]
    },
    "Chords": {
      "volume": 5,
      "default_octave": 3,
      "notes": [
        { "chord": "1", "lyrics": "You", "duration": 7, "start_of_line": true },
        { "chord": "4", "lyrics": "Road", "duration": 1 },
        { "chord": "4", "lyrics": "Must", "duration": 3, "start_of_line": true },
        { "chord": "1", "lyrics": "Code", "duration": 2 },
        { "chord": "1", "lyrics": "That", "duration": 4, "start_of_line": true },
        { "chord": "5", "lyrics": "By", "duration": 2 },
      ]
    }
  }
}

// Register this song with the main application
if (typeof registerSong === 'function') {
registerSong(teachYourChildrenVerse);
}
