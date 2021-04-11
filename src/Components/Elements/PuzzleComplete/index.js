import React from 'react';
import { Button } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import {mainMenuPage, endSequencePage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux'
import completeImage from './Complete.png';
import completeSound from '../../Elements/Sounds/chapterComplete.mp3';
import './index.css'

const PuzzleComplete = (props) => {
    // let puzzle = props.puzzle;
    let dispatch = useDispatch();
    let continueButton = () => {
        dispatch(mainMenuPage());
        // Put logic in here for little items that appear in main menu
    }
    let endButton = () => { 
        dispatch(endSequencePage());
    }
    let continueBtn;
    if (props.end === false) {
        continueBtn = <Button variant="light" onClick={continueButton} >Press here to continue</Button>
    }
    else {
        continueBtn = <Button variant="light" onClick={endButton} >Press here to continue</Button>

    }
    return (
        <div className="complete-page complete-fade">
            <ReactAudioPlayer src={completeSound} autoPlay />
            <div className="complete-page-inner">
                <img src={completeImage} id="CompleteImage" alt="Complete" />
                <p>You have completed this chapter.</p>
                {continueBtn}
            </div>
        </div>
    )
}


export default PuzzleComplete;

