import React from 'react';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';
import '../index.css';

const Caritas = () => {
    let title = "Caritas";
    let dispatch = useDispatch();
    return (
        // <div className="caritas-container">
        //     This is the container for Caritas.
        // </div>
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(6));}}> click to solve this puzzle</Button>
                
            
            </div>
        </div>
    )
}

export default Caritas