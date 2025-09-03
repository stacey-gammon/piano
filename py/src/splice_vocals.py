# Install Demucs (one-time):
# pip install demucs

import subprocess
import sys
import os

# Input file (replace with your own MP3/WAV file)
input_file = 'Simon & Garfunkel - The Sounds of Silence (Audio) [4fWyzwo1xg0].mp3'

# Output directory (Demucs will create a folder here)
output_dir = 'outputs'

# Use demucs command line (more reliable than Python API)
cmd = [
    sys.executable, "-m", "demucs",
    "--two-stems", "vocals",  # Separate vocals and accompaniment
    "--out", output_dir,
    input_file
]

# Run the command
result = subprocess.run(cmd, capture_output=True, text=True)

if result.returncode == 0:
    print("Done! Check the 'outputs' folder for results.")
    print(result.stdout)
else:
    print("Error occurred:")
    print(result.stderr)
