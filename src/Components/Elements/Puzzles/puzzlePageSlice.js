import { createSlice } from '@reduxjs/toolkit'

export const puzzlePageSlice = createSlice({
    name: 'currentPuzzle',
    initialState: {
        puzzle: "castitas",
        poemMode: true
    },
    reducers: {
        endSequencePage: state => {
            state.puzzle =  0
        },
        GoToPuzzlePage: state => {
            state.poemMode = false;
        },
        Castitas: state => {
            state.puzzle = "castitas";
            state.poemMode = true;
        },
        Temperantia: state => {
            state.puzzle = "temperantia";
            state.poemMode = true;
        },
        Industria: state => {
            state.puzzle = "industria";
            state.poemMode = true;
        },
        Patientia: state => {
            state.puzzle = "patientia";
            state.poemMode = true;
        },
        Humilitas: state => {
            state.puzzle = "humilitas";
            state.poemMode = true;
        },
        Caritas: state => {
            state.puzzle = "caritas";
            state.poemMode = true;
        },
        Humanitas: state => {
            state.puzzle = "humanitas";
            state.poemMode = true;
        }
  }
})

export const { Castitas, Temperantia, Industria, Patientia, Humilitas, Caritas, Humanitas, endSequencePage, GoToPuzzlePage} = puzzlePageSlice.actions

export default puzzlePageSlice.reducer