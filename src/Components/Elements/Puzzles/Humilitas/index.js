import React from 'react';
import { Button } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { GoToCompletePage } from '../puzzlePageSlice';
import { useDispatch, connect } from 'react-redux';
import './index.css';

const Humilitas = ({puzzle, poemMode, puzzleProgress}) => {
    let title = "Humilitas";
    let dispatch = useDispatch();
    let contentClass = "main-content-holder";

    let SolvedFunction = () => { 
        contentClass = "main-content-holder fade";
        dispatch(SetSolved(5));
        setTimeout(() => { dispatch(GoToCompletePage()); }, 2000);
    }
    return (
        <div className={contentClass}>
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <div className="humanitas-prompt-div">
                </div>
                <NumInputComponent solvePuzzle={SolvedFunction} />
                <Button variant="light" id="solvePuzzleButton" onClick={() => {SolvedFunction()}}> Debug: click to solve puzzle.</Button>            
            </div>
        </div>
    )
}

const numberArray = [
    34,
    59,
    302,
    98976,
    555555555,
    87546354357,
    8888888,
    898065463526,
    23456789876545678,
    3456789999999999,
    986433333457,
    798798798743333333
]

const HumilitasFlashingNumber = (props) => {
    return (
        <div className={props.classType} key={props.index}>
            {numberArray[props.index]}
        </div>
    )
            
}
class HumilitasInputForm extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            inputContent: "",
        };
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }


    onHandleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.inputContent);
        this.setState({ inputContent: "" });
    }

    onHandleChange(e) {
        this.updateInput(e.target.value);
    }

    updateInput(input) {
        let copy = this.state;
        copy.inputContent = input;
        this.setState(copy);
    }

    handleEnter(event) {
        if (event.keyCode === 13) {
            this.onHandleSubmit(event);
        }
    }


    render() {
        return ( 
            <div className="humanitas-input-container">
                <form onSubmit={this.onHandleSubmit}>
                    <input type="submit" style={{ display: "none" }} />

                    <div className="humanitas-input-div">
                        <textarea className="humilitas-input" onKeyDown={this.handleEnter} value={this.state.inputContent} onChange={this.onHandleChange} type="text"/>
                    </div>
                    <div className="enter-button-div">
                        <Button type="submit" variant="light" id="submitPrompt">Submit</Button>                       
                    </div>
                </form>
            </div>
        )
    }

}

class NumInputComponent extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { 
            index: 0,
            incorrect: 0,
            classType : "flashing-number"
        }
        this.advanceNumber = this.advanceNumber.bind(this);
        this.sendResponseToParents = this.sendResponseToParents.bind(this);
    }


    sendResponseToParents() {
        this.props.solvePuzzle();
    }

    advanceNumber(response) {
        let copy = this.state;
        let nextIndex = this.state.index + 1
        copy.index = nextIndex;
        copy.classType = this.state.classType === "flashing-number" ? "flashing-number-2" : "flashing-number";
        if (Number(response) !== numberArray[this.state.index - 1]) {
            copy.incorrect = this.state.incorrect + 1
        }
        if (copy.incorrect === 3) {
            this.sendResponseToParents();
        }
        else {
            this.setState(copy);
        }
        console.log(copy.incorrect);
    }

    render() {
        return (
            <>
                <HumilitasFlashingNumber index={this.state.index} classType={this.state.classType}/>
                <HumilitasInputForm handleSubmit={this.advanceNumber} />
                <NumberWrong incorrect={this.state.incorrect}/>
            </>
        )
    }
}

const NumberWrong = (props) => { 
    let stringsX = ""
    if (props.incorrect == 1) {
        stringsX = "X"
    }
    else if (props.incorrect == 2) {
        stringsX = "XX"
    }
    else if (props.incorrect == 3) {
        stringsX = "XXX"
    }
    return (
        <div className="numberWrong">
            {stringsX}
        </div>
    )
}

// Connect to store and couple Puzzle component with currentPuzzle store
const getPuzzleProgress = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode,
        puzzleProgress: appState.currentPuzzleProgress[5]
    })

}

export default connect(getPuzzleProgress)(Humilitas)
