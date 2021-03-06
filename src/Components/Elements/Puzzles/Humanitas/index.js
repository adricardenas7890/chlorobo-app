import React from 'react';
import Particles from 'react-particles-js';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { GoToCompletePage, GoToFinalCompletePage} from '../puzzlePageSlice';
import { useDispatch, connect } from 'react-redux';
import './index.css';

const Humanitas = ({puzzle, poemMode, puzzleProgress}) => {
    let dispatch = useDispatch();
    let contentClass = "main-content-holder";
    let SolvedFunction = (e) => { 
        contentClass = "main-content-holder fade";
        dispatch(SetSolved(7));
        setTimeout(() => { dispatch(GoToFinalCompletePage()); }, 2000);
    }
    return (

        <div className={contentClass}>
            <div className="particles">
            <Particles
                params={{
                    "particles": {
                        "color": {
                            "value": "#ad99ff"
                        },
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 2,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
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
                }} />
            </div>
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">&nbsp;</div></div>
            <div className="main-puzzle-holder">
                <div className="humanitas-prompt-div">
                    <p>What does it mean to be human?</p>
                </div>
                <HumanitasInputForm sendResponse={SolvedFunction}/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => {SolvedFunction()}}> Debug: click to solve puzzle.</Button>                                 
            </div>
        </div>
    )
}

class HumanitasInputForm extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            inputContent: "",
        };
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const response = this.state.inputContent;
        this.props.sendResponse(response);
        this.setState({
            inputContent: ""
        });
    }

    onHandleChange(e) {
        this.setState({
        inputContent: e.target.value
        });
    }


    render() {
        return ( 
            <div className="humanitas-input-container">
                <form onSubmit={this.onHandleSubmit}>
                    <input type="submit" style={{ display: "none" }} />
                    <div className="humanitas-input-div">
                        <textarea className="humanitas-input" value={this.state.inputContent} onChange={this.onHandleChange} type="text"/>
                    </div>
                    <div className="enter-button-div">
                        <Button type="submit" variant="light" id="submitPrompt" onClick={this.onHandleSubmit} >Submit</Button>
                        
                    </div>
                </form>
            </div>
        )
    }

}

// Connect to store and couple Puzzle component with currentPuzzle store
const getPuzzleProgress = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode,
        puzzleProgress: appState.currentPuzzleProgress[1]
    })

}

export default connect(getPuzzleProgress)(Humanitas)
