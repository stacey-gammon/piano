const crossMuddyWatersChorus = {
  "version": 2,
  "tempo": 80,
  "key": "D",
  "title": "Crossing Muddy Waters (Chorus)",
  "tracks": {
    "1": {
      "volume": 5,
      "default_octave": 4,
      "notes": [
        { "degree": "1", "lyrics": "Left" },
        { "degree": "1", "lyrics": "me" },
        { "degree": "3", "lyrics": "in" },
        { "degree": "5", "lyrics": "my" },
        { "degree": "6", "lyrics": "tears", "duration": 4 },
        { "degree": "3", "lyrics": "to" },
        { "degree": "3", "lyrics": "drow", "duration": 2},
        { "degree": "2", "lyrics": "ow" },
        { "degree": "1", "lyrics": "own", "duration": 3},
        { "duration": 2 },
        { "degree": "6", "lyrics": "She" },
        { "degree": "6", "lyrics": "left" },
        { "degree": "3", "lyrics": "her" },
        { "degree": "2", "lyrics": "ba" },
        { "degree": "1", "lyrics": "by" },
        { "degree": "3", "lyrics": "daugh", "duration": 2},
        { "degree": "2", "lyrics": "ter" },
        { "degree": "1", "lyrics": "rr" },
        { "degree": "6[-1]", "lyrics": "r" },
        { "duration": 2 },
        { "degree": "1", "lyrics": "Now" },
        { "degree": "1", "lyrics": "the" },
        { "degree": "1", "lyrics": "river's" },
        { "degree": "1", "lyrics": "wide" },
        { "degree": "1", "lyrics": "and" },
        { "degree": "1", "lyrics": "deep" },
        { "degree": "1", "lyrics": "and" },
        { "degree": "1", "lyrics": "brown" },
        { "degree": "1", "lyrics": "She's" },
        { "degree": "1", "lyrics": "crossin'" },
        { "degree": "1", "lyrics": "muddy" },
        { "degree": "1", "lyrics": "waters" }
      ]
    },
    "2": {
      "volume": 5,
      "default_octave": 4,
      "notes": [
        { "duration": 4 },
        { "degree": "1", "lyrics": "tears", "duration": 4 },
        { "degree": "1", "lyrics": "to" },
        { "degree": "1", "lyrics": "drow", duration: 2},
        { "degree": "6[-1]", "lyrics": "ow" },
        { "degree": "5[-1]", "lyrics": "own", duration: 3},
        { "duration": 15 },
        { "degree": "1", "lyrics": "Now" },
        { "degree": "1", "lyrics": "the" },
        { "degree": "1", "lyrics": "river's" },
        { "degree": "1", "lyrics": "wide" },
        { "degree": "1", "lyrics": "and" },
        { "degree": "1", "lyrics": "deep" },
        { "degree": "1", "lyrics": "and" },
        { "degree": "1", "lyrics": "brown" },
        { "degree": "1", "lyrics": "She's" },
        { "degree": "1", "lyrics": "crossin'" },
        { "degree": "1", "lyrics": "muddy" },
        { "degree": "1", "lyrics": "waters" }
      ]
    },
    "3": {
      "volume": 5,
      "default_octave": 4,
      "notes": [
        { "duration": 4 },
        { "degree": "4", "lyrics": "tears", "duration": 4 },
        { "degree": "1", "lyrics": "to" },
        { "degree": "3", "lyrics": "drow", duration: 2},
        { "degree": "3", "lyrics": "ow" },
        { "degree": "3", "lyrics": "own", duration: 3},
        { "duration": 15 },
        { "degree": "1", "lyrics": "Now" },
        { "degree": "1", "lyrics": "the" },
        { "degree": "1", "lyrics": "river's" },
        { "degree": "1", "lyrics": "wide" },
        { "degree": "1", "lyrics": "and" },
        { "degree": "1", "lyrics": "deep" },
        { "degree": "1", "lyrics": "and" },
        { "degree": "1", "lyrics": "brown" },
        { "degree": "1", "lyrics": "She's" },
        { "degree": "1", "lyrics": "crossin'" },
        { "degree": "1", "lyrics": "muddy" },
        { "degree": "1", "lyrics": "waters" }
      ]
    },
    "chords": {
      "volume": 3,
      "notes": [
        {
          "degree": "1",
          "duration": 4
        },
        {
          "degree": "4",
          "duration": 10
        },
        { "duration": 2 },
        {
          "degree": "2",
          "duration": 3
        }
      ]
    }
  }
}

// Register this song with the main application
if (typeof registerSong === 'function') {
  registerSong(crossMuddyWatersChorus);
}

