import { createSlice } from '@reduxjs/toolkit'

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
            state[puzzleNo] = "solved";

            if (puzzleNo < 8) {
                // Set next puzzle as available
                this.SetAvailable(puzzleNo + 1);
            }
            else {
                this.SetAllComplete();
            }
        },
        SetAvailable: (state, action) => {
            let puzzleNo = action.payload;
            state[puzzleNo] = "available";
        },
        SetAllComplete: (state) => {
            state["endGame"] = true;
        }
  }
})

export const { SetSolved } = puzzleProgressSlice.actions

export default puzzleProgressSlice.reducer