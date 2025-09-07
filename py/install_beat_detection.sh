#!/bin/bash
# Installation script for beat detection dependencies

echo "Installing beat detection dependencies for music tool..."

# Check if we're in a virtual environment
if [[ "$VIRTUAL_ENV" != "" ]]; then
    echo "Using virtual environment: $VIRTUAL_ENV"
    pip install -r requirements.txt
else
    echo "No virtual environment detected. Creating one..."
    python3 -m venv music_env
    source music_env/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
    echo "Virtual environment created and activated. To use it in the future, run:"
    echo "source music_env/bin/activate"
fi

echo "Installation complete!"
echo ""
echo "Usage examples:"
echo "  python music loop song.mp3 --beats"
echo "  python music loop song.mp3 --start :10 --end :30 --beats"
echo "  python music loop song1.mp3,song2.mp3 --beats"
