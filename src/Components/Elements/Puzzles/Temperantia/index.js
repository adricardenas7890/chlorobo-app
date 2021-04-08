import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { GoToCompletePage } from '../puzzlePageSlice';
import { useDispatch, connect, } from 'react-redux';
import  TemperantiaGrid  from './TemperantiaGrid';
import './index.css';
import img1 from './temperantia-img1.jpg'
import img2 from './temperantia-img2.jpg'
import Particles from 'react-particles-js';

const Temperantia = ({ puzzle, poemMode, puzzleProgress }) => {
    let dispatch = useDispatch();
    let contentClass = "main-content-holder fade";

    let SolvedFunction = () => { 
        contentClass = "main-content-holder fade";
        dispatch(SetSolved(2));
        setTimeout(() => { dispatch(GoToCompletePage()); }, 2000);
    }
    return (

        <div className={contentClass}>
            <div className="particles-puzzle"><Particles
                    params={{
                        "particles": {
                            "color": {
                                "value": "#000000"
                            },
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 1,
                                "random": true,
                                "anim": {
                                    "speed": .5,
                                    "size_min": 0.1
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": .5,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 1
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} /></div>
            {/* <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">&nbsp;</div></div> */}
            <div className="main-puzzle-holder">
                <TemperantiaGridMain handleSolved={SolvedFunction}/>
                {/* <Button variant="light" id="solvePuzzleButton" onClick={() => {SolvedFunction()}}> Debug: click to solve puzzle.</Button>        */}
            </div>
        </div>
    )
}

const TemperantiaGridMain = (props) => {
    return (
        <Container className ="temp-grid-div">
            <Row className="h-100">
                <Col id="temp-image-holder-1">
                    <img src={img1} alt=""/>
                </Col>
                <Col className="temp-grid-col">
                    <div className="temp-grid">
                        <TemperantiaGrid handleSolved={props.handleSolved}/>
                    </div>
                    <div className="gradient-div-holder">
                        <GradientDiv/>
                    </div>
                </Col>
                <Col id="temp-image-holder-2">
                    <img src={img2} alt=""/>
                </Col>
            </Row>
        </Container>
    )
}

const GradientDiv = () => {
    return (
        <div className="gradient-div">

        </div>
    )
}

// Connect to store and couple Puzzle component with currentPuzzle store
const getPuzzleProgress = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode,
        puzzleProgress: appState.currentPuzzleProgress[2]
    })

}

export default connect(getPuzzleProgress)(Temperantia)



