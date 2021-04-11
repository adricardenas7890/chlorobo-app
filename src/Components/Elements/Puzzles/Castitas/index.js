import React from 'react';
// import { Button, } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { GoToCompletePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import './index.css';
import CastitasSquareButtons  from './CastitasSquareButtons';
import CastitasSunSlider from './CastitasSunSlider';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import LazyLoad from 'react-lazyload';

    
const Castitas = ({puzzle, poemMode, puzzleProgress}) => {
    let dispatch = useDispatch();
    let contentClass = "main-content-holder";

    let SolvedFunction = () => { 
        contentClass = "main-content-holder fade";
        dispatch(SetSolved(1));
        setTimeout(() => { dispatch(GoToCompletePage()); }, 2000);
    }
    return (
        <div className={contentClass}>           
            <div id="castitas-holder" className="main-puzzle-holder">
                <LazyLoad>
                <CastitasSunSlider/>
                <CastitasSquareButtons handleSolved={SolvedFunction} />
                </LazyLoad>
                {/* <Button variant="light" id="solvePuzzleButton" onClick={() => {SolvedFunction()}}> Debug: click to solve puzzle.</Button>        */}          
            </div>
        </div>
    )
}

// Connect to store and couple Puzzle component with currentPuzzle store
const getPuzzleProgress = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode,
        puzzleProgress: appState.currentPuzzleProgress[1]
    })

}

export default connect(getPuzzleProgress)(Castitas)