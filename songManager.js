// Song Management Functions
// This file contains functions for loading, managing, and saving songs

// Global song bank - accessible to all functions
let songBank = [];

// Function to load songs from the songs directory
async function loadSongs() {
    try {
        console.log('Starting to load songs...');
        
        // Load the song files via script tags
        const songFiles = [
            'until_the_last_light_fades.js',
            'until_the_last_light_fades_chorus.js',
            'until_the_last_light_fades_verse2.js',
            'wayfaring_stranger.js',
            'mad_world_chorus.js'
        ];
        
        console.log('Song files to load:', songFiles);
        
        // Load each song file
        for (const songFile of songFiles) {
            console.log(`Loading song file: ${songFile}`);
            await loadSongFile(songFile);
        }
        
        // Update the song selector
        console.log('Updating song selector...');
        updateSongSelector();
        
        console.log('Current songBank:', songBank);
        
    } catch (error) {
        console.error('Failed to load songs:', error);
    }
}

// Helper function to load a single song file
function loadSongFile(songFile) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `songs/${songFile}`;
        script.onload = () => {
            console.log(`Successfully loaded: ${songFile}`);
            resolve();
        };
        script.onerror = () => {
            console.error(`Failed to load: ${songFile}`);
            reject(new Error(`Failed to load ${songFile}`));
        };
        document.head.appendChild(script);
    });
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
            option.textContent = "[" + song.key + "] " + song.title;
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
    loadSongFromBankAtIndex(selectedIndex);
}


function loadSongFromBankAtIndex(songIndex) {
    const songData = songBank[songIndex];
    if (!songData) {
        updateStatus('Song not found.');
        return;
    }

    // Process song data - loop through each entry, and if there is no step field, set it
    // to the previous step + the duration
    // of the previous entry with the same track.
    for (let i = 0; i < songData.notes.length; i++) {
        if (!songData.notes[i].step) {
            // Find the previous entry with the same track
            let previousEntry = null;
            for (let j = i - 1; j >= 0; j--) {
                if (songData.notes[j].track === songData.notes[i].track) {
                    previousEntry = songData.notes[j];
                    break;
                }
            }
            if (previousEntry) {
                duration = previousEntry.duration || 1;
                pause = previousEntry.pause || 0;
                songData.notes[i].step = previousEntry.step + duration + pause;
            } else {
                songData.notes[i].step = 1;
            }
        }
    }
    
    // Load song data directly into the textarea for editing
    const songDataTextarea = document.getElementById('songData');
    if (songDataTextarea) {
        songDataTextarea.value = JSON.stringify(songData, null, 2);
    }
    
    // Also load into the playback system
    recordedNotes = songData.notes || [];
    tempo = songData.tempo || 120;
    songKey = songData.key || "Unknown";
    eighthNoteLength = (60 / tempo / 2) * 1000;
    tracks = songData.tracks || { "1": { volume: 5 } };
    
    updatetrackControls();
    updateStatus(`✅ Loaded: ${songData.title}`);
    
    // Highlight keys in the current song's key
    if (typeof highlightKeysInKey === 'function') {
        highlightKeysInKey();
    }
}