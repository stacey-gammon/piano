// Song Management Functions
// This file contains functions for loading, managing, and saving songs

// Function to load songs from the songs directory
function loadSongs() {
    try {
        // Define the songs we want to load
        // This approach works both locally and on GitHub Pages
        const songFiles = [
            'until_the_last_light_fades.js',
            'template.js'
            // Add new song files here as you create them
        ];
        
        // Load each song file
        songFiles.forEach(songFile => {
            loadSongFile(songFile);
        });
        
        // Update the song selector
        updateSongSelector();
        
    } catch (error) {
        console.error('Failed to load songs:', error);
    }
}

// Helper function to load a single song file
function loadSongFile(songFile) {
    // Create a script tag to load the song file
    // This approach works without fetch() and CORS issues
    const script = document.createElement('script');
    script.src = `songs/${songFile}`;
    script.onload = function() {
        console.log(`Loaded song file: ${songFile}`);
    };
    script.onerror = function() {
        console.warn(`Failed to load song file: ${songFile}`);
    };
    document.head.appendChild(script);
}

// Function that song files will call to register themselves
function registerSong(songData) {
    songBank.push(songData);
    console.log(`Registered song: ${songData.title}`);
    updateSongSelector();
}

// Function to update the song selector dropdown
function updateSongSelector() {
    const songSelect = document.getElementById('songSelect');
    if (songSelect) {
        songSelect.innerHTML = '<option value="">Select a song...</option>';
        songBank.forEach((song, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = song.title;
            songSelect.appendChild(option);
        });
    }
}

// Function to manually refresh songs (useful for development)
function refreshSongs() {
    songBank = []; // Clear existing songs
    loadSongs();
    updateStatus(`✅ Refreshed songs. Loaded ${songBank.length} songs.`);
}

// Song management functions
function loadSong() {
    const selectedIndex = document.getElementById('songSelect').value;
    if (selectedIndex === '') {
        updateStatus('Please select a song first.');
        return;
    }
    
    const songData = songBank[selectedIndex];
    if (!songData) {
        updateStatus('Song not found.');
        return;
    }
    
    // Load song data
    recordedNotes = songData.notes || [];
    tempo = songData.tempo || 120;
    eighthNoteLength = (60 / tempo / 2) * 1000;
    singers = songData.singers || { "1": { volume: 5 } };
    
    updateSingerControls();
    updateStatus(`✅ Loaded: ${songData.title}`);
}

function saveSong() {
    if (recordedNotes.length === 0) {
        updateStatus('No notes to save.');
        return;
    }
    
    const songData = {
        notes: recordedNotes,
        tempo: tempo,
        title: `Song ${Date.now()}`,
        singers: singers
    };
    
    // Create download link
    const dataStr = JSON.stringify(songData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'song.json';
    link.click();
    URL.revokeObjectURL(url);
    
    updateStatus('✅ Song downloaded as JSON');
}

// Load from song bank
function loadFromBank() {
    const select = document.getElementById('songSelect');
    const selectedIndex = parseInt(select.value);
    
    if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= songBank.length) {
        return;
    }
    
    const songData = songBank[selectedIndex];
    document.getElementById('songData').value = JSON.stringify(songData, null, 2);
    loadSong();
}
