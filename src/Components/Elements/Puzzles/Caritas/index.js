import React from 'react';
import { render } from 'react-dom'
import CaritasContent from './CaritasContent'
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch, connect } from 'react-redux';
import '../index.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const Caritas = () => {
    let title = "Caritas";
    let dispatch = useDispatch();
    return (
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <DndProvider backend={HTML5Backend}>
                    <CaritasContent/>
                </DndProvider>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(6));}}> click to solve this puzzle</Button>
                
            
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



export default connect(getPuzzleProgress)(Caritas)