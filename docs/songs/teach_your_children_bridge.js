const teachYourChildrenBridge = {
  "version": 2,
  "tempo": 80,
  "key": "D",
  "title": "Teach your Children Bridge",
  "tracks": {
    "Faith": {
      "volume": 5,
      "default_octave": 3,
      "notes": [
        // "Don't you ever ask them why" (D)
        { "degree": "5", "lyrics": "Dont", "start_of_line": true },
        { "degree": "5", "lyrics": "you" },
        { "degree": "5", "lyrics": "ev"},
        { "degree": "5", "lyrics": "ver" },
        { "degree": "6", "lyrics": "ask" },
        { "degree": "1[+1]", "lyrics": "them" },
        { "degree": "2[+1]", "lyrics": "why", "duration": 2 },

        // "If they told you, you would cry" (G -> D)
        { "degree": "2[+1]", "lyrics": "If", "start_of_line": true },
        { "degree": "2[+1]", "lyrics": "they" },
        { "degree": "2[+1]", "lyrics": "told" },
        { "degree": "2[+1]", "lyrics": "you," },
        { "degree": "2[+1]", "lyrics": "you" },
        { "degree": "2[+1]", "lyrics": "would" },
        { "degree": "1[+1]", "duration": 2, "lyrics": "cry" },

        // "So just look at them and sigh" (Bm G G A)
        { "degree": "6", "lyrics": "So", "start_of_line": true },
        { "degree": "5", "lyrics": "just" },
        { "degree": "5", "lyrics": "look" },
        { "degree": "6", "lyrics": "at" },
        { "degree": "1[+1]", "lyrics": "them" },
        { "degree": "5", "lyrics": "and" },
        { "degree": "1[+]", "duration": 4, "lyrics": "siii" },
        { "degree": "3[+1]", "duration": 2, "lyrics": "iii" },
        { "degree": "1[+1]", "duration": 2, "lyrics": "iigh" },
        {"pause": 2 },

        // "And know they love you" (D)
        { "degree": "5", "lyrics": "And", "start_of_line": true },
        { "degree": "5", "lyrics": "know" },
        { "degree": "7", "lyrics": "they" },
        { "degree": "7", "duration": 2, "lyrics": "love" },
        { "degree": "3", "duration": 2, "lyrics": "you." },
      ]
    },
    "Kellie": {
      "volume": 5,
      "default_octave": 4,
      "notes": [
        // "Don't you ever ask them why" — diatonic 3rd above track 1 (3→5, 1→3, 3→5, 3→5, 3→5, 2→4)
        { "degree": "1", "lyrics": "Dont", "start_of_line": true },
        { "degree": "1", "lyrics": "you" },
        { "degree": "1", "lyrics": "ev" },
        { "degree": "1", "lyrics": "ver" },
        { "degree": "2", "lyrics": "ask" },
        { "degree": "3", "lyrics": "them" },
        { "degree": "4", "lyrics": "why", "duration": 2  },

        // "If they told you, you would cry" (4→6, 4→6, 5→7, 5→7, 4→6, 3→5, 2→4)
        { "degree": "4", "lyrics": "If", "start_of_line": true },
        { "degree": "4", "lyrics": "they" },
        { "degree": "4", "lyrics": "told" },
        { "degree": "4", "lyrics": "you," },
        { "degree": "4", "lyrics": "you" },
        { "degree": "4", "lyrics": "would" },
        { "degree": "3", "duration": 2, "lyrics": "cry" },

        // "So just look at them and sigh" (6→1[+1], 5→7, 5→7, 4→6, 4→6, 5→7, 3→5)
        { "degree": "1", "lyrics": "So", "start_of_line": true },
        { "degree": "1", "lyrics": "just"},
        { "degree": "1", "lyrics": "look" },
        { "degree": "2", "lyrics": "at" },
        { "degree": "3", "lyrics": "them" },
        { "degree": "1", "lyrics": "and" },
        { "degree": "3", "duration": 4, "lyrics": "siii" },
        { "degree": "5", "duration": 2, "lyrics": "iii" },
        { "degree": "4", "duration": 2, "lyrics": "iigh" },
        {"pause": 2 },

        // "And know they love you" (2→4, 1→3, 2→4, 3→5, 1→3)
        { "degree": "7[-1]", "lyrics": "And", "start_of_line": true },
        { "degree": "7[-1]", "lyrics": "know" },
        { "degree": "3", "lyrics": "they" },
        { "degree": "3", "duration": 2, "lyrics": "love" },
        { "degree": "5[-1]", "duration": 2, "lyrics": "you." },
      ]
    },
    "Stacey": {
      "volume": 5,
      "default_octave": 4,
      "notes": [
        // "Don't you ever ask them why" — diatonic 3rd below track 1 (3→1, 1→6[-1], 3→1, 3→1, 3→1, 2→7[-1])
        { "degree": "3", "lyrics": "Dont", "start_of_line": true },
        { "degree": "3", "lyrics": "you" },
        { "degree": "3", "lyrics": "ev" },
        { "degree": "3", "lyrics": "ver" },
        { "degree": "4", "lyrics": "ask" },
        { "degree": "5", "lyrics": "them" },
        { "degree": "6", "lyrics": "why", "duration": 2  },

        // "If they told you, you would cry" (4→2, 4→2, 5→3, 5→3, 4→2, 3→1, 2→7[-1])
        { "degree": "6", "lyrics": "If", "start_of_line": true },
        { "degree": "6", "lyrics": "they" },
        { "degree": "6", "lyrics": "told" },
        { "degree": "6", "lyrics": "you," },
        { "degree": "6", "lyrics": "you" },
        { "degree": "6", "lyrics": "would" },
        { "degree": "5", "duration": 2, "lyrics": "cry," },

        // "So just look at them and sigh" (6→4, 5→3, 5→3, 4→2, 4→2, 5→3, 3→1)
        { "degree": "3", "lyrics": "So", "start_of_line": true },
        { "degree": "3", "lyrics": "just" },
        { "degree": "3", "lyrics": "look" },
        { "degree": "4", "lyrics": "at" },
        { "degree": "5", "lyrics": "them" },
        { "degree": "3", "lyrics": "and" },
        { "degree": "5", "duration": 4, "lyrics": "siii" },
        { "degree": "1[+1]", "duration": 2, "lyrics": "iii" },
        { "degree": "6", "duration": 2, "lyrics": "iigh" },
        {"pause": 2 },

        // "And know they love you" (2→7[-1], 1→6[-1], 2→7[-1], 3→1, 1→6[-1])
        { "degree": "3", "lyrics": "And", "start_of_line": true },
        { "degree": "3", "lyrics": "know" },
        { "degree": "5", "lyrics": "they" },
        { "degree": "5", "duration": 2, "lyrics": "love" },
        { "degree": "1", "duration": 2, "lyrics": "you." },
      ]
    },
    "Chords": {
      "volume": 5,
      "default_octave": 3,
      "notes": [
        // "Don't you ever ask them why" — diatonic 3rd below track 1 (3→1, 1→6[-1], 3→1, 3→1, 3→1, 2→7[-1])
        { "degree": "1", "lyrics": "Dont", "duration": 8, "start_of_line": true },
        { "degree": "4", "lyrics": "If", "duration": 6, "start_of_line": true },
        { "degree": "1", "lyrics": "Cry", "duration": 1 },
        { "degree": "1", "duration": 7, "lyrics": "So", "start_of_line": true },
        { "degree": "6", "duration": 4, "lyrics": "siiiiii"},
        { "degree": "4", "duration": 4, "lyrics": "iiigh" },
        { "pause": 2},
        { "degree": "5", "duration": 5, "lyrics": "And", "start_of_line": true  },
        { "degree": "1", "duration": 2, "lyrics": "Love" },
      ]
    }
  }
}

// Register this song with the main application
if (typeof registerSong === 'function') {
registerSong(teachYourChildrenBridge);
}
