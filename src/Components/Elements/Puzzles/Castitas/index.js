import React from 'react';
import { Button, } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { puzzleCompletePage } from '../../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux';
import './index.css';
import  CastitasSquareButtons  from './CastitasSquareButtons';
import CastitasSunSlider from './CastitasSunSlider';

const Castitas = () => {
    let title = "Castitas"
    let dispatch = useDispatch();
    return (
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">&nbsp;</div></div>
            <div className="main-puzzle-holder">
                <CastitasSunSlider/>
                <CastitasSquareButtons/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(1));}}> click to solve this puzzle</Button>
                <Button variant="light" id="completePuzzlePageButton" onClick={() => { dispatch(puzzleCompletePage());}}> go to complete page</Button>
       
            
            </div>
        </div>
    )
}



export default Castitas