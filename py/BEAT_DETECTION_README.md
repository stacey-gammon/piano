# Beat Detection and Metronome Overlay

This feature adds automatic beat detection and metronome overlay to your music looping tool, making it much easier to learn chord changes and stay in time with songs.

## Features

- **Automatic Beat Detection**: Uses librosa to detect tempo (BPM) and beat positions
- **Downbeat Detection**: Identifies the "1" beat in each measure (assuming 4/4 time)
- **Metronome Overlay**: Adds click sounds at detected beat positions
- **BPM Display**: Shows detected tempo and beat information
- **Seamless Integration**: Works with existing loop, extract, and time range features

## Installation

1. Run the installation script:
```bash
cd py
./install_beat_detection.sh
```

2. Or install manually:
```bash
pip install librosa soundfile numpy scipy
```

## Usage

### Basic Beat Detection
```bash
python music loop song.mp3 --beats
```

### With Time Range
```bash
python music loop song.mp3 --start :10 --end :30 --beats
```

### Multiple Files
```bash
python music loop song1.mp3,song2.mp3 --beats
```

## How It Works

1. **Beat Detection**: The tool analyzes the audio file to detect:
   - Overall tempo (BPM)
   - Individual beat positions
   - Downbeat positions (every 4th beat)

2. **Metronome Creation**: Creates click sounds:
   - Regular beats: Soft clicks
   - Downbeats: Stronger clicks (louder and slightly longer)

3. **Audio Mixing**: Overlays the metronome clicks onto the original audio

4. **Looping**: Plays the enhanced audio with metronome in a seamless loop

## Output Information

When using `--beats`, you'll see:
```
=== BEAT DETECTION ===
Analyzing audio for beats and tempo...
Detected tempo: 120.5 BPM
Found 45 beats
Found 12 downbeats
Duration: 15.2 seconds
Adding metronome clicks...
Metronome overlay saved to: tmp/metronome_12345.wav
```

## Tips for Learning Chords

1. **Start with the metronome**: Use `--beats` to get familiar with the song's timing
2. **Focus on downbeats**: The stronger clicks mark the beginning of each measure
3. **Practice chord changes**: Change chords on the downbeats first, then add fills
4. **Use time ranges**: Loop specific sections with `--start` and `--end`
5. **Combine with vocal separation**: Use the `split` command first, then loop with beats

## Technical Details

- **Beat Detection**: Uses librosa's `beat_track()` function
- **Downbeat Detection**: Simple approach assuming 4/4 time (every 4th beat)
- **Click Generation**: Sine wave with exponential decay envelope
- **Audio Format**: Works with MP3, WAV, and other formats supported by librosa

## Troubleshooting

**"Beat detection libraries not available"**
- Run the installation script or install manually with pip

**"Beat detection failed"**
- Try a different audio file or time range
- Some songs may have complex rhythms that are harder to detect

**Metronome too loud/quiet**
- The click volume is set to 30% for regular beats, 50% for downbeats
- This can be adjusted in the code if needed

## Future Enhancements

- More sophisticated downbeat detection using madmom
- Adjustable click volume and sound
- Different time signatures (3/4, 6/8, etc.)
- Visual beat display
- Chord change suggestions based on detected key
