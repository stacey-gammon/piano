// Song Management Functions
// This file contains functions for loading, managing, and saving songs

// Global song bank - accessible to all functions
let songBank = [];

// Function to load songs from the songs directory
async function loadSongs() {
    try {
        // Auto-discover song files in the songs directory
        // This will work both locally and on GitHub Pages
        const songFiles = await discoverSongFiles();
        
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

// Function to discover song files automatically
async function discoverSongFiles() {
    const discoveredSongs = [];
    
    // Use the actual files that exist in the songs directory
    const actualSongFiles = [
        'until_the_last_light_fades.js'
        // Add new song files here as you create them
    ];
    
    // Filter out template.js and only include actual song files
    const filteredSongs = actualSongFiles.filter(songFile => songFile !== 'template.js');
    
    // Check which files actually exist by trying to load them
    for (const songFile of filteredSongs) {
        try {
            const response = await fetch(`songs/${songFile}`);
            if (response.ok) {
                discoveredSongs.push(songFile);
                console.log(`Found song file: ${songFile}`);
            }
        } catch (error) {
            // File doesn't exist, skip it
        }
    }
    
    // If no songs were discovered, fall back to the known existing song
    if (discoveredSongs.length === 0) {
        discoveredSongs.push('until_the_last_light_fades.js');
        console.log('No songs discovered, using fallback song');
    }
    
    console.log(`Discovered ${discoveredSongs.length} song files:`, discoveredSongs);
    return discoveredSongs;
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
async function refreshSongs() {
    songBank = []; // Clear existing songs
    await loadSongs();
    updateStatus(`✅ Refreshed songs. Loaded ${songBank.length} songs.`);
}

// Song management functions - simplified for direct editing
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
    
    // Load song data directly into the textarea for editing
    const songDataTextarea = document.getElementById('songData');
    if (songDataTextarea) {
        songDataTextarea.value = JSON.stringify(songData, null, 2);
    }
    
    // Also load into the playback system
    recordedNotes = songData.notes || [];
    tempo = songData.tempo || 120;
    eighthNoteLength = (60 / tempo / 2) * 1000;
    singers = songData.singers || { "1": { volume: 5 } };
    
    updateSingerControls();
    updateStatus(`✅ Loaded: ${songData.title} - Edit in textarea and changes will apply on next play`);
}


