import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch, connect } from 'react-redux';
import { GoToCompletePage } from '../puzzlePageSlice';
import './index.css';
import PatientiaSong from '../../../Elements/Sounds/Patientia-video.mp3'

const Patientia = ({puzzle, poemMode}) => {
    let dispatch = useDispatch();
    let contentClass = "main-content-holder";

    let SolvedFunction = () => { 
        contentClass = "main-content-holder fade";
        dispatch(SetSolved(4));
        setTimeout(() => { dispatch(GoToCompletePage()); }, 2000);
    }
    return (
        <div className={contentClass}>
            <div className="main-puzzle-holder">          
                <PatientiaVideo handleSolved={SolvedFunction}/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => {SolvedFunction()}}> Debug: click to solve puzzle.</Button>       
            </div>
        </div>
    )
}

const PatientiaVideo = (props) => {
    //let dispatch = useDispatch();
    let onPlayFunction = () => { 
        var audio = new Audio(PatientiaSong);
        audio.play();
    }
    let onEndedFunction = () => { 
        props.handleSolved();
    }
    return (
        <div className="patientia-player-div">
            <ReactPlayer className="patientia-player" url="https://player.vimeo.com/video/529079042?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100%" width="100%" onPlay={onPlayFunction} onEnded={onEndedFunction} controls={false} muted={true} playing={true} loop={false}/>      
        </div>
    )
}


// Connect to store and couple Puzzle component with currentPuzzle store
const getPuzzleProgress = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode,
        puzzleProgress: appState.currentPuzzleProgress[4]

    })

}

export default connect(getPuzzleProgress)(Patientia)


