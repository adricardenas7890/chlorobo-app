import React from 'react';
import { connect } from 'react-redux';
import  Castitas  from '../../Elements/Puzzles/Castitas/index';
import Temperantia from '../../Elements/Puzzles/Temperantia/index';
import Patientia from '../../Elements/Puzzles/Patientia/index';
import Humilitas from '../../Elements/Puzzles/Humilitas/index';
import Caritas from '../../Elements/Puzzles/Caritas/index';
import Humanitas from '../../Elements/Puzzles/Humanitas/index';
import Industria from '../../Elements/Puzzles/Industria/index';

// Redirects to each main puzzle component
// Connected to puzzleSlice reducer, will update when state.puzzle updates

const PuzzlePage = ({ puzzle }) => {
    let puzzleComponent;
    if (puzzle === "castitas") {
        puzzleComponent = <Castitas/>
    }
    else if (puzzle === "temperantia") {
        puzzleComponent = <Temperantia/>
    }
    else if (puzzle === "industria") {
        puzzleComponent = <Industria/>
    }
    else if (puzzle === "patientia") {
        puzzleComponent = <Patientia/>
    }
    else if (puzzle === "humilitas") {
        puzzleComponent = <Humilitas/>
    }
    else if (puzzle === "caritas") {
        puzzleComponent = <Caritas/>
    }
    else if (puzzle === "humanitas") {
        puzzleComponent = <Humanitas/>
    }
    else {
        puzzleComponent = <div>We didn't find a match!</div>
    }
    return (
        <div>
            You've reached the puzzle for: {puzzle}
            {puzzleComponent}
        </div>
    )
}

// Connect to store and couple Puzzle component with currentPuzzle store
const getCurrentViewPage = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle
    })

}

export default connect(getCurrentViewPage)(PuzzlePage)