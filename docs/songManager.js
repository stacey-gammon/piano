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
            'sound_of_silence_v2.js',
            'country_roads_well_pennies_chorus.js',
            'country_roads_well_pennies_verse1.js',
            'calvary_chorus.js',
            'until_the_last_light_fades.js',
            'until_the_last_light_fades_chorus.js',
            'until_the_last_light_fades_verse2.js',
            'wayfaring_stranger.js',
            'mad_world_chorus.js',
            'country_roads_well_pennies_verse1.js',
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
    
    // Determine version (default to 1 if not specified)
    const version = processedSongData.version || 1;
    
    if (version === 2) {
        // Version 2: notes are stored within each track
        return processVersion2SongData(processedSongData);
    } else {
        // Version 1: notes are in a flat array (original format)
        return processVersion1SongData(processedSongData);
    }
}

function processVersion1SongData(songData) {
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
                const duration = previousEntry.duration || 1;
                const pause = previousEntry.pause || 0;
                songData.notes[i].step = previousEntry.step + duration + pause;
            } else {
                songData.notes[i].step = 1;
            }
        }
    }
    return songData;
}

function processVersion2SongData(songData) {
    // Version 2: Convert track-based notes to flat array format for compatibility
    const allNotes = [];
    
    // Process each track's notes independently
    Object.keys(songData.tracks).forEach(trackId => {
        const track = songData.tracks[trackId];
        if (track.notes && Array.isArray(track.notes)) {
            // Process step timing within this track first
            for (let i = 0; i < track.notes.length; i++) {
                if (!track.notes[i].step) {
                    // Find the previous entry in the same track
                    let previousEntry = null;
                    for (let j = i - 1; j >= 0; j--) {
                        if (track.notes[j].step) {
                            previousEntry = track.notes[j];
                            break;
                        }
                    }
                    if (previousEntry) {
                        const duration = previousEntry.duration || 1;
                        const pause = previousEntry.pause || 0;
                        track.notes[i].step = previousEntry.step + duration + pause;
                    } else {
                        track.notes[i].step = 1;
                    }
                }
            }
            
            // Add track ID to each note and add to allNotes
            track.notes.forEach(note => {
                const noteWithTrack = { ...note, track: trackId };
                allNotes.push(noteWithTrack);
            });
        }
    });
    
    // Sort notes by step to maintain chronological order across all tracks
    allNotes.sort((a, b) => (a.step || 0) - (b.step || 0));
    
    // Create a new song data object with the flat notes array
    const processedSongData = {
        ...songData,
        notes: allNotes
    };
    
    return processedSongData;
}

// Helper function to convert version 1 format to version 2 format
function convertToVersion2(songData) {
    if (songData.version === 2) {
        return songData; // Already version 2
    }
    
    const version2Data = {
        version: 2,
        tempo: songData.tempo,
        key: songData.key,
        title: songData.title,
        tracks: {}
    };
    
    // Initialize tracks with their properties
    Object.keys(songData.tracks || {}).forEach(trackId => {
        version2Data.tracks[trackId] = {
            volume: songData.tracks[trackId].volume,
            default_octave: songData.tracks[trackId].default_octave,
            notes: []
        };
    });
    
    // Group notes by track
    (songData.notes || []).forEach(note => {
        const trackId = note.track;
        if (version2Data.tracks[trackId]) {
            // Remove track field from note since it's now implicit
            const { track, ...noteWithoutTrack } = note;
            version2Data.tracks[trackId].notes.push(noteWithoutTrack);
        }
    });
    
    return version2Data;
}

// Helper function to convert version 2 format to version 1 format
function convertToVersion1(songData) {
    if (songData.version !== 2) {
        return songData; // Already version 1 or no version
    }
    
    const version1Data = {
        version: 1,
        tempo: songData.tempo,
        key: songData.key,
        title: songData.title,
        tracks: {},
        notes: []
    };
    
    // Copy track properties (without notes)
    Object.keys(songData.tracks || {}).forEach(trackId => {
        const { notes, ...trackProps } = songData.tracks[trackId];
        version1Data.tracks[trackId] = trackProps;
    });
    
    // Flatten notes from tracks
    Object.keys(songData.tracks || {}).forEach(trackId => {
        const track = songData.tracks[trackId];
        if (track.notes && Array.isArray(track.notes)) {
            track.notes.forEach(note => {
                version1Data.notes.push({
                    ...note,
                    track: trackId
                });
            });
        }
    });
    
    return version1Data;
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