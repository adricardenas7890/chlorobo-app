import React from 'react';
// import { render } from 'react-dom'
import CaritasContent from './CaritasContent'
// import { Button } from 'react-bootstrap';
import { GoToCompletePage } from '../puzzlePageSlice';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch, connect } from 'react-redux';
import './index.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const Caritas = ({puzzle, poemMode, puzzleProgress}) => {
    // let title = "Caritas";
    let dispatch = useDispatch();
    let contentClass = "main-content-holder";
    // let count = 0;
    let items = [];
    let addAnotherToCount = (item) => {
        if (!items.includes(item)) {
            items.push(item);
        }
        if (items.length === 5) {
            SolvedFunction();
        }
    }

    let SolvedFunction = () => { 
        contentClass = "main-content-holder fade";
        dispatch(SetSolved(6));
        setTimeout(() => { dispatch(GoToCompletePage()); }, 2000);
    }
    return (
        <div className={contentClass}>
            <div className="polka-bg"></div>
            {/* <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div> */}
            <div className="main-puzzle-holder">
                <DndProvider backend={HTML5Backend}>
                    <CaritasContent handleDropInBox={addAnotherToCount}/>
                </DndProvider>
                {/* <Button variant="light" id="solvePuzzleButton" onClick={() => {SolvedFunction()}}> Debug: click to solve puzzle.</Button> */}
            </div>
        </div>
    )
}

// Connect to store and couple Puzzle component with currentPuzzle store
const getPuzzleProgress = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode,
        puzzleProgress: appState.currentPuzzleProgress[6]
    })

}



export default connect(getPuzzleProgress)(Caritas)