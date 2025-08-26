# Songs Directory

This directory contains JavaScript files for each song in the piano application.

## Song Structure

Each song JSON file should follow this structure:

```json
{
    "notes": [
        {
            "note": "C4",
            "step": 1,
            "lyrics": "Example",
            "track": "1",
            "duration": 1
        }
    ],
    "tempo": 120,
    "title": "Song Title",
    "tracks": {
        "1": { "volume": 5 }
    }
}
```

## Fields Explained

- **notes**: Array of note objects
  - **note**: The musical note (e.g., "C4", "D#3", "F#5")
  - **step**: The timing step when the note should play
  - **lyrics**: Optional lyrics for the note
  - **track**: Which track should sing this note (references tracks object)
  - **duration**: Optional duration in steps (defaults to 1)
- **tempo**: Beats per minute for the song
- **title**: Display name for the song
- **tracks**: Object defining available tracks and their volume levels

## Adding New Songs

1. Create a new JavaScript file in this directory (copy `template.js`)
2. Modify the `songData` object with your song information
3. Add the filename to the `songs` array in `index.html` (in the `loadSongs()` function)
4. The song will automatically appear in the dropdown when you refresh the page

## Available Notes

The piano supports these notes:
- White keys: E3, F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4, C5, D5, E5
- Black keys: F#3, G#3, A#3, C#4, D#4, F#4, G#4, A#4, C#5, D#5

## Example Songs

- `until_the_last_light_fades.js` - A complete song with lyrics and multiple tracks
- `template.js` - Template for creating new songs
