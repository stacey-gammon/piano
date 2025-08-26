// Audio Player Functions
// This file contains consolidated audio playback functions

// Consolidated playNote function that handles both regular notes and volume-based playback
function playNote(note, singerVolume = null) {
    const freq = noteFreqs[note];
    if (!freq) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
    oscillator.type = 'triangle';
    
    // Handle volume - if singerVolume is provided, use it; otherwise use default
    let volume = 0.3; // Default volume
    if (singerVolume !== null) {
        if (singerVolume === 0) return; // Don't play if volume is 0
        volume = (singerVolume / 5) * 0.3; // Scale volume based on singer volume (1-5 scale)
    }
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);

    // Visual feedback
    const keyElement = document.querySelector(`[data-note="${note}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 100);
    }

    // Record if recording
    if (isRecording) {
        const currentTime = Date.now();
        const relativeTime = currentTime - recordingStartTime;
        const step = Math.round(relativeTime / eighthNoteLength);
        const duration = parseInt(document.getElementById('stretch')?.value) || 1;
        const currentSinger = document.getElementById('currentSinger')?.value || "1";
        recordedNotes.push({ 
            note, 
            step, 
            duration, 
            lyrics: '', 
            singer: currentSinger 
        });
    }
}

// Legacy function for backward compatibility
function playNoteWithVolume(note, singerVolume = 5) {
    playNote(note, singerVolume);
}

function stopNote() {
    // Visual feedback handled in playNote
}
