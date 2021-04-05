import React from 'react';
import { connect } from 'react-redux';
import PuzzleContent from '../PuzzleContentPage/index';
import PuzzlePoemContent from '../PuzzlePoemPage/index';
import PuzzleCompletePage from '../PuzzleCompletePage/PuzzleCompletePage';

// Redirects to each main puzzle component
// Connected to puzzleSlice reducer, will update when state.puzzle updates

const PuzzlePage = ({ puzzle, poemMode }) => {
    let puzzleComponent;
    if (poemMode === 1) {
        puzzleComponent = <PuzzlePoemContent puzzle={puzzle} />
    }
    else if (poemMode === 2) {
        puzzleComponent = <PuzzleContent puzzle={puzzle}/>
    }
    else if (poemMode === 3) {
        puzzleComponent = <PuzzleCompletePage puzzle={puzzle}/>
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