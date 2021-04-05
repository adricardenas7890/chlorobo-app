import React from 'react';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { GoToCompletePage } from '../puzzlePageSlice';
import { useDispatch, connect } from 'react-redux';
import '../index.css';

const Humilitas = ({puzzle, poemMode, puzzleProgress}) => {
    let title = "Humilitas";
    let dispatch = useDispatch();
    let contentClass = "main-content-holder";

    let SolvedFunction = () => { 
        contentClass = "main-content-holder fade";
        dispatch(SetSolved(5));
        setTimeout(() => { dispatch(GoToCompletePage()); }, 2000);
    }
    return (
        <div className={contentClass}>
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <Button variant="light" id="solvePuzzleButton" onClick={() => {SolvedFunction()}}> Debug: click to solve puzzle.</Button>              
            </div>
        </div>
    )
}

// Connect to store and couple Puzzle component with currentPuzzle store
const getPuzzleProgress = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode,
        puzzleProgress: appState.currentPuzzleProgress[5]
    })

}

export default connect(getPuzzleProgress)(Humilitas)
