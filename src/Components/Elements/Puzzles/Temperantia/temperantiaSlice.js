import { createSlice } from '@reduxjs/toolkit'

// Three modes, available, solved, hidden
export const temperantiaSlice = createSlice({
    name: 'currentTempProgress',
    initialState: {
        correct: 259,
        incorrect: 21,
        endGame: false
    },
    reducers: {
        WrongAnswer: (state, action) => {
            state["incorrect"] += 1
            state["correct"] -= 1
        },
        RightAnswer: (state, action) => {
            state["correct"] += 1
            state["incorrect"] -= 1
        },
        SolvedAll: (state) => {
            state["endGame"] = true;
        }
  }
})

export const { WrongAnswer, RightAnswer, SolvedAll } = temperantiaSlice.actions

export default temperantiaSlice.reducer