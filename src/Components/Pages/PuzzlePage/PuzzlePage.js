import React from 'react';
import { connect } from 'react-redux';
import  Castitas  from './Puzzles/Castitas';
import Temperantia from './Puzzles/Temperantia';
import Industria from './Puzzles/Industria';
import Patientia from './Puzzles/Patientia';
import Humilitas from './Puzzles/Humilitas';
import Caritas from './Puzzles/Caritas';
import Humanitas from './Puzzles/Humanitas';

const PuzzlePage = ({ puzzle }) => {
    let puzzleComponent;
    if (puzzle == "castitas") {
        puzzleComponent = <Castitas/>
    }
    else if (puzzle == "temperantia") {
        puzzleComponent = <Temperantia/>
    }
    else if (puzzle == "industria") {
        puzzleComponent = <Industria/>
    }
    else if (puzzle == "patientia") {
        puzzleComponent = <Patientia/>
    }
    else if (puzzle == "humilitas") {
        puzzleComponent = <Humilitas/>
    }
    else if (puzzle == "caritas") {
        puzzleComponent = <Caritas/>
    }
    else if (puzzle == "humanitas") {
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

// Connect to store and couple Layout component with currentViewPage store
const getCurrentViewPage = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle
    })

}

export default connect(getCurrentViewPage)(PuzzlePage)