import React from 'react';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { GoToCompletePage } from '../puzzlePageSlice';
import { useDispatch, connect } from 'react-redux';
import './index.css';

const Humanitas = ({puzzle, poemMode, puzzleProgress}) => {
    let dispatch = useDispatch();
    let contentClass = "main-content-holder";
    let SolvedFunction = (e) => { 
        contentClass = "main-content-holder fade";
        dispatch(SetSolved(7));
        setTimeout(() => { dispatch(GoToCompletePage()); }, 2000);
    }
    return (
        <div className={contentClass}>
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">&nbsp;</div></div>
            <div className="main-puzzle-holder">
                <div className="humanitas-prompt-div">
                    <p> Here is the prompt</p>
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
                        <input className="humanitas-input" value={this.state.inputContent} onChange={this.onHandleChange} type="text"/>
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
