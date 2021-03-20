import { createSlice } from '@reduxjs/toolkit'

export const puzzlePageSlice = createSlice({
    name: 'currentPuzzle',
    initialState: {
        puzzle: "castitas"
    },
    reducers: {
        endSequencePage: state => {
            state.puzzle =  0
        },
        Castitas: state => {
            state.puzzle = "castitas"
        },
        Temperantia: state => {
            state.puzzle =  "temperantia"
        },
        Industria: state => {
            state.puzzle =  "industria"
        },
        Patientia: state => {
            state.puzzle =  "patientia"
        },
        Humilitas: state => {
            state.puzzle =  "humilitas"
        },
        Caritas: state => {
            state.puzzle =  "caritas"
        },
        Humanitas: state => {
            state.puzzle = "humanitas"
        }
  }
})

export const { Castitas, Temperantia, Industria, Patientia, Humilitas, Caritas, Humanitas, endSequencePage} = puzzlePageSlice.actions

export default puzzlePageSlice.reducer