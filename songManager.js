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
            'calvary_chorus.js',
            'until_the_last_light_fades.js',
            'until_the_last_light_fades_chorus.js',
            'until_the_last_light_fades_verse2.js',
            'wayfaring_stranger.js',
            'mad_world_chorus.js',
            'country_roads_well_pennies.js'
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
            option.textContent = song.title;
            songSelect.appendChild(option);
        });
    }
}

// Function to manually refresh songs (useful for development)
async function refreshSongs() {
    songBank = []; // Clear existing songs
    await loadSongs();
}

// Song management functions - simplified for direct editing
function loadSong() {
    const selectedIndex = document.getElementById('songSelect').value;
    if (selectedIndex === '') {
        updateStatus('Please select a song first.');
        return;
    }
    loadSongFromBankAtIndex(selectedIndex);

    // Initialize key selector
    initializeKeySelector();
    highlightKeysInKey();
    updateDisplayAtCurrentStep();
    updatetrackControls();
}

function getProcessedSongData(songData) {
    // Make a copy of the song data
    const processedSongData = JSON.parse(JSON.stringify(songData));

    // Process song data - loop through each entry, and if there is no step field, set it
    // to the previous step + the duration
    // of the previous entry with the same track.
    for (let i = 0; i < processedSongData.notes.length; i++) {
        if (!processedSongData.notes[i].step) {
            // Find the previous entry with the same track
            let previousEntry = null;
            for (let j = i - 1; j >= 0; j--) {
                if (processedSongData.notes[j].track === processedSongData.notes[i].track) {
                    previousEntry = processedSongData.notes[j];
                    break;
                }
            }
            if (previousEntry) {
                duration = previousEntry.duration || 1;
                pause = previousEntry.pause || 0;
                processedSongData.notes[i].step = previousEntry.step + duration + pause;
            } else {
                processedSongData.notes[i].step = 1;
            }
        }
    }
    return processedSongData;
}


function loadSongFromBankAtIndex(songIndex) {
    let songData = songBank[songIndex];
    if (!songData) {
        updateStatus('Song not found.');
        return;
    }
    
    // Load song data directly into the textarea for editing
    const songDataTextarea = document.getElementById('songData');
    if (songDataTextarea) {
        songDataTextarea.value = JSON.stringify(songData, null, 2);
    }
    
    songData = getProcessedSongData(songData);
    // Also load into the playback system
    currentNotes = songData.notes || [];
    tempo = songData.tempo || 120;
    songKey = songData.key || "Unknown";
    eighthNoteLength = (60 / tempo / 2) * 1000;
    tracks = songData.tracks || { "1": { volume: 5 } };
    defaultOctave = songData.default_octave || 4;
    
    // Reset playback state when loading a new song
    if (typeof wasPlaying !== 'undefined') {
        wasPlaying = false;
    }
    
    // Ensure each track has a default_octave property
    Object.keys(tracks).forEach(trackId => {
        if (tracks[trackId].default_octave === undefined) {
            tracks[trackId].default_octave = defaultOctave;
        }
    });
    
    updatetrackControls();
    
    // Update the key selector to show the current song's key
    // Use a small delay to ensure the key selector is initialized
    setTimeout(() => {
        updateKeySelector(songData.key);
    }, 100);
}

// Function to update the key selector to show the current song's key
function updateKeySelector(currentKey) {
    const keySelect = document.getElementById('keySelect');
    if (keySelect && currentKey && currentKey !== "Unknown") {
        // Find and select the current key
        for (let i = 0; i < keySelect.options.length; i++) {
            if (keySelect.options[i].value === currentKey) {
                keySelect.selectedIndex = i;
                console.log(`Set key selector to: ${currentKey}`);
                break;
            }
        }
    } else {
        console.log(`Could not set key selector. currentKey: ${currentKey}, keySelect: ${!!keySelect}`);
    }
}