import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { puzzleCompletePage } from '../../Pages/Content/contentSlice';

// Three modes, available, solved, hidden
export const audioSettingSlice = createSlice({
    name: 'currentAudioSettings',
    initialState: {
        sounds: true,
        music: true,
        volume: 1,
    },
    reducers: {
        MuteAll: (state, action) => {           

        },
        MuteSongs: (state) => {
            state.music = false;
        }

  }
})

export const { MuteAll, MuteSongs } = audioSettingSlice.actions

export default audioSettingSlice.reducer