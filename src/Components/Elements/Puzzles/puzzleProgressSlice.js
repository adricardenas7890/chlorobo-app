import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { puzzleCompletePage } from '../../Pages/Content/contentSlice';

// Three modes, available, solved, hidden
export const puzzleProgressSlice = createSlice({
    name: 'currentPuzzleProgress',
    initialState: {
        1: "available",
        2: "hidden",
        3: "hidden",
        4: "hidden",
        5: "hidden",
        6: "hidden",
        7: "hidden",
        "endGame": false
    },
    reducers: {
        SetSolved: (state, action) => {
            let puzzleNo = action.payload;
            let nextPuzzleNo = action.payload + 1;
            state[puzzleNo] = "solved";
            if (puzzleNo < 7) {
                state[nextPuzzleNo] = "available";
            }
            if (puzzleNo === 7) {
                state["endGame"] = true;
            }

        },
        SetAvailable: (state, action) => {
            let puzzleNo = action.payload;
            state[puzzleNo] = "available";
        },
        SetAllComplete: (state) => {
            let dispatch = useDispatch();
            dispatch(puzzleCompletePage);
            state["endGame"] = true;
        }
  }
})

export const { SetSolved } = puzzleProgressSlice.actions

export default puzzleProgressSlice.reducer