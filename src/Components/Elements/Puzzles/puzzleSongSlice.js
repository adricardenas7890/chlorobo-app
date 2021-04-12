import { createSlice } from '@reduxjs/toolkit'

// Three modes, available, solved, hidden
export const audioSettingSlice = createSlice({
    name: 'currentAudioSettings',
    initialState: {
        sounds: true,
        music: true,
        volume: 1,
        currentView: "intro",
    },
    reducers: {
        MuteAll: (state, action) => {           

        },
        MuteSongs: (state) => {
            state.music = false;
            state.sounds = false;
        },
        UnMuteSongs: (state) => {
            state.music = true;
            state.sounds = true;
        },
        MuteSounds: (state) => {
            state.sounds = false;
        },
        UnMuteSounds: (state) => {
            state.sounds = true;
        }
  }
})

export const { MuteAll, MuteSongs, UnMuteSongs } = audioSettingSlice.actions

export default audioSettingSlice.reducer