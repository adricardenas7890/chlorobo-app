import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { puzzleCompletePage } from '../../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux';
//import sunSlider from './img/sun1-transparentYellow.png';
// import prism from './img/prism.png';
// import beams from './img/BeamsFull6-correctSpacing.png'
import './index.css';
import  CastitasSquareButtons  from './CastitasSquareButtons';
import CastitasSunSlider from './CastitasSunSlider';

const Castitas = () => {
    let title = "Castitas"
    let dispatch = useDispatch();
    return (
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <CastitasSunSlider/>
                {/* <div className="image-holders">
                    <div className="prism-holder">
                        <img src={prism} className="prism-image" alt="prism"></img>
                    </div>
                    <div className="beams-holder">
                        <img src={beams} className="beams-image" alt="beams"></img>
                    </div>
                </div> */}
                <CastitasSquareButtons/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(1));}}> click to solve this puzzle</Button>
                <Button variant="light" id="completePuzzlePageButton" onClick={() => { dispatch(puzzleCompletePage());}}> go to complete page</Button>
       
            
            </div>
        </div>
    )
}



export default Castitas