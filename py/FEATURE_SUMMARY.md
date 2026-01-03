## Running the Piano App Locally

The piano practice app is a web-based tool for learning songs and practicing piano. To run it locally:

### Quick Start

From the repo root:

```bash
cd docs
python3 -m http.server 8000
```

Then open your browser to: **http://localhost:8000**

### What You Can Do

- **Select songs** from the dropdown to load them
- **Edit notes and lyrics** directly in the textarea
- **Play/pause** playback to hear your song
- **Loop specific sections** using loop start/end controls
- **Adjust track volumes and octaves** independently
- **Use "Play & Hold"** to continuously play the current step
- **Navigate** with arrow keys (left/right) or step controls
- **Change keys** to see scale degree indicators on piano keys

### Stopping the Server

Press `Ctrl+C` in the terminal where the server is running.

---

## Beat Detection Feature - Implementation Summary

### What Was Added

I've integrated beat detection and metronome overlay functionality into your music looping tool. Here's what you now have:

- **`--beats` flag** for the `loop` command  
- **Automatic beat detection** using librosa  
- **Metronome click overlay** at detected beat positions  
- **BPM and timing information** display  
- **Downbeat detection** (every 4th beat for 4/4 time)

### Files Created/Modified

- `music` – Main script with beat detection integration  
- `requirements.txt` – Dependencies for beat detection  
- `install_beat_detection.sh` – Installation script  
- `test_beat_detection.py` – Test script for beat detection  
- `BEAT_DETECTION_README.md` – Comprehensive documentation  
- `FEATURE_SUMMARY.md` – This summary

### How to Use Beat Detection

- **Install dependencies**

```bash
cd py
./install_beat_detection.sh
```

- **Basic usage**

```bash
# Loop with metronome clicks
python music loop song.mp3 --beats

# Loop specific section with beats
python music loop song.mp3 --start :10 --end :30 --beats

# Multiple files with beats
python music loop song1.mp3,song2.mp3 --beats
```

- **Test beat detection**

```bash
python test_beat_detection.py ../song.mp3
```

### What Happens When You Use --beats

1. The tool analyzes the audio to detect tempo and beat positions.  
2. It shows detected BPM, number of beats, and duration.  
3. It generates click sounds at beat positions.  
4. It overlays metronome clicks onto the original audio.  
5. It plays the enhanced audio in a seamless loop.

### Example Output

```text
=== BEAT DETECTION ===
Analyzing audio for beats and tempo...
Detected tempo: 120.5 BPM
Found 45 beats
Found 12 downbeats
Duration: 15.2 seconds
Adding metronome clicks...
Metronome overlay saved to: tmp/metronome_12345.wav

Press Ctrl+C to stop...
```

### Benefits for Learning Chords

- Timing reference: clear beat markers help you stay in time.  
- Downbeat emphasis: stronger clicks mark the beginning of each measure.  
- No manual sync: no need to manually start metronome and song together.  
- Seamless looping: perfect for practicing specific sections.  
- Works with vocal separation: combine with your existing split / stem features.

### Technical Notes

- Graceful degradation if beat-detection libraries are missing.  
- Uses temporary files for metronome overlay.  
- Works with MP3, WAV, and other common audio formats.  
- Includes basic error handling for common edge cases.

---

## YouTube Download + Stem Split Features

These features let you:  
- **Download audio from YouTube** (e.g. Crossing Muddy Waters – I'm With Her)  
- **Split vocals and accompaniment** so you can loop the backing track while practicing.

### 1. Install Tools (one-time)

From the repo root:

```bash
cd py
python3 -m pip install yt-dlp demucs
```

### 2. Download Audio from YouTube

Example (Crossing Muddy Waters – I'm With Her):

```bash
cd py
python3 -m yt_dlp \
  --no-check-certificate \
  --extract-audio \
  --audio-format mp3 \
  --audio-quality 192K \
  -o "crossing_muddy_waters.%(ext)s" \
  "https://www.youtube.com/watch?v=BTDUDRIEifQ"
```

This creates `crossing_muddy_waters.mp3` in `py/`.

### 3. Split Vocals vs Background (Stems)

Use **Demucs** to get separate vocal and accompaniment tracks:

```bash
cd py
python3 -m demucs --two-stems vocals --out outputs crossing_muddy_waters.mp3
```

Demucs will write something like:

- `py/outputs/<model-name>/crossing_muddy_waters/vocals.wav`  
- `py/outputs/<model-name>/crossing_muddy_waters/no_vocals.wav`

You can then rename/move these into `py/songs` (or elsewhere) and use your existing looping tools (`music loop ...`) to practice over the **no-vocals** track while still having access to the isolated vocals for reference.

---

## Extract Audio Segment Feature

Extract a specific time segment from any audio file to create a snippet you can loop or work with separately.

### Basic Usage

From the repo root:

```bash
# Extract a segment (e.g., from 10 seconds to 30 seconds)
python3 py/music extract song.mp3 --start :10 --end :30

# Extract with specific output filename
python3 py/music extract song.mp3 --start 1:30 --end 2:15 --output chorus_snippet.mp3

# Time formats supported:
# --start :10        (10 seconds)
# --start 1:30       (1 minute 30 seconds)
# --start 2:45       (2 minutes 45 seconds)
```

### Examples

```bash
# Extract chorus from 1:20 to 1:50
python3 py/music extract crossing_muddy_waters.mp3 --start 1:20 --end 1:50

# Extract a specific verse
python3 py/music extract song.mp3 --start :45 --end 1:15 --output verse1.mp3
```

### Output

The extracted segment will be saved as:
- `{original_filename}_extract_{start}s-{end}s.{extension}` (if no `--output` specified)
- Or your custom filename if you use `--output`

### Common Workflow

1. **Download** from YouTube: `python3 py/music download <url>`
2. **Split** vocals: `python3 py/music split song.mp3`
3. **Extract** the section you want: `python3 py/music extract song_no_vocals.mp3 --start :30 --end 1:00`
4. **Loop** it: `python3 py/music loop song_no_vocals_extract_30s-60s.mp3`

This is perfect for isolating a specific chorus, verse, or tricky section to practice!
