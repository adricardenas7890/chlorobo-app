import React from 'react';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch, connect } from 'react-redux';
import '../index.css';

const Humilitas = ({puzzle, poemMode}) => {
    let title = "Humilitas";
    let dispatch = useDispatch();
    return (
        // <div className="castitas-container">
        //     This is the container for Humilitas.
        // </div>
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(5));}}> click to solve this puzzle</Button>
                
            
            </div>
        </div>
    )
}

// Connect to store and couple Puzzle component with currentPuzzle store
const getPuzzleProgress = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode
    })

}

export default connect(getPuzzleProgress)(Humilitas)
