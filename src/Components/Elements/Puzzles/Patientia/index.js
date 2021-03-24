import React from 'react';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';
import '../index.css';

const Patientia = () => {
    let title = "Patientia";
    let dispatch = useDispatch();
    return (
        // <div className="castitas-container">
        //     This is the container for Patientia.
        // </div>
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(4));}}> click to solve this puzzle</Button>
                
            
            </div>
        </div>
    )
}

export default Patientia