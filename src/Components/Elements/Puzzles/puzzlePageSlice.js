import { createSlice } from '@reduxjs/toolkit'

export const puzzlePageSlice = createSlice({
    name: 'currentPuzzle',
    initialState: {
        puzzle: "castitas",
        poemMode: 1
    },
    reducers: {
        GoToPuzzlePage: state => {
            state.poemMode = 2;
        },
        GoToFinalCompletePage: state => {
            state.poemMode = 4;
        },
        GoToCompletePage: state => {
            state.poemMode = 3;
        },
        Castitas: state => {
            state.puzzle = "castitas";
            state.poemMode = 1;
        },
        Temperantia: state => {
            state.puzzle = "temperantia";
            state.poemMode = 1;
        },
        Industria: state => {
            state.puzzle = "industria";
            state.poemMode = 1;
        },
        Patientia: state => {
            state.puzzle = "patientia";
            state.poemMode = 1;
        },
        Humilitas: state => {
            state.puzzle = "humilitas";
            state.poemMode = 1;
        },
        Caritas: state => {
            state.puzzle = "caritas";
            state.poemMode = 1;
        },
        Humanitas: state => {
            state.puzzle = "humanitas";
            state.poemMode = 1;
        }
  }
})

export const { Castitas, Temperantia, Industria, Patientia, Humilitas, Caritas, Humanitas, GoToPuzzlePage, GoToCompletePage, GoToFinalCompletePage} = puzzlePageSlice.actions

export default puzzlePageSlice.reducer