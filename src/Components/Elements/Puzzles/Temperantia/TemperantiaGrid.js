import React from 'react';
import {   Row,  Container } from 'react-bootstrap';
import { WrongAnswer, RightAnswer, SolvedAll } from './temperantiaSlice';
import { useDispatch, connect } from 'react-redux';
import  solutionObject  from './solution';
import './index.css';

const WinPuzzle = () => { 
    let dispatch = useDispatch();
    dispatch(SolvedAll());
}

const TemperantiaGrid = ({ incorrect, gameFinished }) => { 
    let activeGrid = incorrect !== 0 ? true : false;

    //console.log(incorrect);
    if (!activeGrid && gameFinished === false) {
        alert('puzzle complete');
        WinPuzzle();

    }
    return (
        <TempGrid active={activeGrid} />
    )
}

const TempGrid = (props) => { 
    let allValues = solutionObject;
    let activeGrid = props.active;
    
    let generateAllRows = () => { 
        let rows = [];
        let x = 0;
        
        for (let i = 0; i < 14; i++) {
            let currentValues = {};
            for (let j = 1; j < 21; j++) {
                currentValues[x + j] = allValues[ x + j];
            }
            const row = <SquareRow key={x} squareValues={currentValues} active = {activeGrid} />;
            rows.push(row);
            x += 20;
        }
        return rows;

    }

    return (
        <Container className="complete-grid-div">
            {generateAllRows()}
        </Container>
    )
}

const SquareRow = (props) => { 
    let dispatch = useDispatch();
    let sendStatus = (status) => { 
        //debugger;
        if (status) {
            dispatch(RightAnswer());            
        }
        else {
            dispatch(WrongAnswer());
        }

    }

    let squareValues = props.squareValues;
    let generateRow = () => {
        let activeGrid = props.active;
        let row = [];
        for (let property in squareValues) {
            let number = squareValues[property];
            let color = number === 1 ? "black" : "white";   

            const item = <GridSquare key={property} place={property} handleChangedStatus={sendStatus} color={color} number={number} active={activeGrid} />;
            row.push(item);
        }
        return row;
    };

    
    return (
        <Row>
            {generateRow()}
        </Row>
    )
}

class GridSquare extends React.Component { 
    constructor(props) {
        super(props);

        this.state = { 
            currentColor: props.color,  // Doesn't change
            currentClass: props.color === "black" ? "temp-square black-square" : "temp-square white-square", // Doesn't change
            currentNumber: String(props.number),    //  Changes
            solvedStatus: ((props.color === "black" && props.number === "1") || (props.color === "white" && props.number === "0")) ? true: false  // Changes
        }
        if (this.props.active) {
            if (props.place === "34" || props.place === "13" || props.place === "18" || props.place === "158" || props.place === "279" || props.place === "135"
                || props.place === "193" || props.place === "280" || props.place === "260") {
                this.state.currentNumber = 1
            }
            if (props.place === "6" ||props.place === "7" || props.place === "23" || props.place === "30" || props.place === "41" || props.place === "143"
                || props.place === "167"|| props.place === "186" || props.place === "206" || props.place === "226" || props.place === "247" || props.place === "268") {
                this.state.currentNumber = 0
            }
        }

        this.handleClick = this.handleClick.bind(this);
        this.passSolvedStatus = this.passSolvedStatus.bind(this);

    }

    passSolvedStatus() {
        this.props.handleChangedStatus(this.state.solvedStatus);       
    }




    handleClick() {
        let copy = this.state;
        if (String(this.state["currentNumber"]) === "1") {
            copy["currentNumber"] = "0";
        }
        else {
            copy["currentNumber"] = "1";
        }
        copy["solvedStatus"] = !this.state.solvedStatus;
        this.setState({ copy });
        this.passSolvedStatus();
        
    }

    render(){
        if (this.props.active) {
            return (
                <div className={this.state.currentClass} onClick={this.handleClick} >
                    {this.state.currentNumber}
                </div>

            )
        }
        else {
            return (
                <div className={this.state.currentClass} >
                    {this.state.currentNumber}
                </div>

            )
        }

    }
}


// Connect to store and couple Layout component with currentViewPage store
const getPuzzleStatus = (appState) => {
    //console.log(appState.currentTempProgress.incorrect);
    return ({
        incorrect: appState.currentTempProgress.incorrect,
        gameFinished: appState.currentTempProgress.endGame
    })

}

export default connect(getPuzzleStatus)(TemperantiaGrid);