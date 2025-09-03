# pip install yt-dlp

import subprocess
import sys

# Replace with your YouTube URL
url = "https://www.youtube.com/watch?v=4fWyzwo1xg0"

# Use yt-dlp command line (more reliable than Python API)
cmd = [
    sys.executable, "-m", "yt_dlp",
    "--no-check-certificate",
    "--extract-audio", 
    "--audio-format", "mp3",
    "--audio-quality", "192K",
    url
]

# Run the command
result = subprocess.run(cmd, capture_output=True, text=True)

if result.returncode == 0:
    print("Downloaded and converted to MP3!")
    print(result.stdout)
else:
    print("Error occurred:")
    print(result.stderr)