import { createSlice } from '@reduxjs/toolkit'

export const contentSlice = createSlice({
    name: 'currentViewPage',
    initialState: {
        viewPage: 0
    },
    reducers: {
        startPage: state => {
            state.viewPage =  0
        },
        storySequencePage: state => {
            state.viewPage =  1
        },
        mainMenuPage: state => {
            state.viewPage =  2 
        },
        helpPage: state => {
            state.viewPage =  3
        },
        puzzleProgressPage: state => {
            state.viewPage =  4
        },
        puzzleCompletePage: state => {
            state.viewPage =  5
        },
        endSequencePage: state => {
            state.viewPage =  6
        },
        introPage: state => {
            state.viewPage =  7
        },
        creditsPage: state => {
            state.viewPage =  8
        },
        lastPuzzleCompletePage: state => {
            state.viewPage =  9
        },
    }
})

export const { mainMenuPage, storySequencePage, helpPage, puzzleProgressPage, puzzleCompletePage, endSequencePage, introPage, creditsPage, lastPuzzleCompletePage} = contentSlice.actions

export default contentSlice.reducer