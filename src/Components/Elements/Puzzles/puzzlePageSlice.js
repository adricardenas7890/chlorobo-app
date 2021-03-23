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
        castitas: state => {
            state.puzzle = "castitas"
        },
        temperantia: state => {
            state.puzzle =  "temperantia"
        },
        industria: state => {
            state.puzzle =  "industria"
        },
        patientia: state => {
            state.puzzle =  "patientia"
        },
        humilitas: state => {
            state.puzzle =  "humilitas"
        },
        caritas: state => {
            state.puzzle =  "caritas"
        },
        humanitas: state => {
            state.puzzle = "humanitas"
        }
  }
})

export const { Castitas, Temperantia, Industria, Patientia, Humilitas, Caritas, Humanitas, endSequencePage} = puzzlePageSlice.actions

export default puzzlePageSlice.reducer