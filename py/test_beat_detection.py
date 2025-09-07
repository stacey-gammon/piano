#!/usr/bin/env python3
"""
Test script for beat detection functionality
"""

import sys
import os
from pathlib import Path

# Add the current directory to Python path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Import the functions directly from the music script
exec(open('music').read())

def test_beat_detection(audio_file):
    """Test beat detection on a given audio file"""
    if not BEAT_DETECTION_AVAILABLE:
        print("Error: Beat detection libraries not available")
        print("Install with: pip install librosa soundfile")
        return False
    
    if not os.path.exists(audio_file):
        print(f"Error: File '{audio_file}' not found")
        return False
    
    print(f"Testing beat detection on: {audio_file}")
    print("This may take a moment...")
    
    # Detect beats
    beat_info = detect_beats_and_tempo(audio_file)
    
    if beat_info:
        print(f"\n=== RESULTS ===")
        print(f"Tempo: {beat_info['tempo']:.1f} BPM")
        print(f"Duration: {beat_info['duration']:.1f} seconds")
        print(f"Total beats: {len(beat_info['beats'])}")
        print(f"Downbeats: {len(beat_info['downbeats'])}")
        
        print(f"\nFirst 10 beats (in seconds):")
        for i, beat in enumerate(beat_info['beats'][:10]):
            print(f"  Beat {i+1}: {beat:.2f}s")
        
        print(f"\nDownbeats (in seconds):")
        for i, downbeat in enumerate(beat_info['downbeats'][:5]):
            print(f"  Downbeat {i+1}: {downbeat:.2f}s")
        
        return True
    else:
        print("Beat detection failed")
        return False

def main():
    if len(sys.argv) != 2:
        print("Usage: python test_beat_detection.py <audio_file>")
        print("Example: python test_beat_detection.py ../song.mp3")
        sys.exit(1)
    
    audio_file = sys.argv[1]
    success = test_beat_detection(audio_file)
    sys.exit(0 if success else 1)

if __name__ == '__main__':
    main()
