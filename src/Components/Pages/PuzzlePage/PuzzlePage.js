import React from 'react';
import { connect } from 'react-redux';
import PuzzleContent from '../PuzzleContentPage/index';
import PuzzlePoemContent from '../PuzzlePoemPage/index'

// Redirects to each main puzzle component
// Connected to puzzleSlice reducer, will update when state.puzzle updates

const PuzzlePage = ({ puzzle, poemMode }) => {
    let puzzleComponent;
    if (poemMode === true) {
        puzzleComponent = <PuzzlePoemContent puzzle={puzzle} />
    }
    else if (poemMode === false) {
        puzzleComponent = <PuzzleContent puzzle={puzzle}/>
    }
    return (
        <div>
            {puzzleComponent}
        </div>
    )   
}

// Connect to store and couple Puzzle component with currentPuzzle store
const getCurrentViewPage = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode
    })

}

export default connect(getCurrentViewPage)(PuzzlePage)