import React from 'react';
import { useSelector } from 'react-redux';
//import { Button, } from 'react-bootstrap';
// import { Row, Column, Container } from 'react-bootstrap';
//import { puzzleProgressPage, endSequencePage } from '../../Pages/Content/contentSlice';
//import { castitas, temperantia, industria, patientia, humilitas, caritas, humanitas} from '../Puzzles/puzzlePageSlice';
import flower1 from './flower1.png';
import './index.css'
import PuzzleButton from './PuzzleButton';

const CreateMenuButton = ( props ) => { 
    const order = props.order + 1;   
    const puzzleState = useSelector(state => state.currentPuzzleProgress[order]);
    //const puzzleState = "available";
    return (
            <PuzzleButton puzzle={props.puzzle} state={puzzleState} />
    )
}

const MainMenu = () => {
    const puzzles = [
        "castitas",
        "temperantia",
        "industria",
        "patientia",
        "humilitas",
        "caritas",
        "humanitas",
    ];

    return (
        <div className="main-content-holder">
            <div className="puzzle-name-div"> <div className="puzzle-name">Name of Puzzle</div></div>
            <div className="main-menu-holder">
                
                <div>
                    <img src={flower1} className="App-logo" alt="flower1" />
                </div>

                {puzzles.map((value, index) => {   
                                
                    return (<CreateMenuButton key={index} puzzle={value} order={index}/>)
                })}
            
            </div>
        </div>
    )
    
}

export default MainMenu