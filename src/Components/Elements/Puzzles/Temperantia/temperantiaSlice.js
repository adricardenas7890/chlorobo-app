import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { SetSolved } from '../puzzleProgressSlice';

// Three modes, available, solved, hidden
export const temperantiaSlice = createSlice({
    name: 'currentTempProgress',
    initialState: {
        correct: 273,
        incorrect: 7,
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