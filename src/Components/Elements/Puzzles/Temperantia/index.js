import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { puzzleCompletePage } from '../../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux';
import  solutionObject  from './solution';
import './index.css';

const Temperantia = () => {
    let title = "Temperantia";
    let dispatch = useDispatch();
    return (
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <TemperantiaGridMain/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(2));}}> click to solve this puzzle</Button>
                <Button variant="light" id="completePuzzlePageButton" onClick={() => { dispatch(puzzleCompletePage());}}> go to complete page</Button>
        
                
            
            </div>
        </div>
    )
}

class GridSquare extends React.Component { 
    constructor(props) {
        super(props);

        this.state = { 
            currentColor: props.color,  // Doesn't change
            currentClass: props.color == "black" ? "temp-square black-square" : "temp-square white-square", // Doesn't change
            currentNumber: String(props.number),    //  Changes
            solvedStatus: null  // Changes
        }

        if ((props.color === "black" && props.number === "1") || (props.color === "white" && props.number === "0")) {
            this.state.solvedStatus = true
        }

        this.handleClick = this.handleClick.bind(this);
        this.passSolvedStatus = this.passSolvedStatus.bind(this);

    }

    passSolvedStatus() {
        this.props.handleSolvedStatus(true);
    }

    handleClick() {
        let copy = this.state;


        this.state.currentNumber === "1" ? copy.currentNumber =  "0" : copy.currentNumber = "1";
        copy.solvedStatus = !this.state.solvedStatus;
        //copy.currentNumber = "0";

        this.setState({ copy });

        if (copy.SolvedStatus === true) {
            this.passSolvedStatus();
        }
        
    }

    render(){
        
        return (
            <div  className={this.state.currentClass} onClick={this.handleClick} >   
                {this.state.currentNumber}
                </div>

            )

    }
}

const SquareRow = (props) => { 
    let squareValues = props.squareValues;
    let generateRow = () => {
        let row = [];
        for (let property in squareValues) {
            let color = squareValues[property] === 1 ? "black" : "white";
            const item = <GridSquare color={color} number={squareValues[property]}  />;
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

const SquareRows = () => { 
    let allValues = solutionObject;
    
    
    let generateAllRows = () => { 
        let rows = [];
        let x = 0;
        
        for (let i = 0; i < 14; i++) {
            let currentValues = {};
            for (let j = 1; j < 21; j++) {
                currentValues[x + j] = allValues[ x + j];
            }
            const row = <SquareRow squareValues={currentValues} />;
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

const TemperantiaGrid = () => { 
    return (
        <SquareRows/>
    )
}

const TemperantiaGridMain = () => {
    return (
        <Container className ="temp-grid-div">
            <Row className="h-100">
                <Col id="temp-image-holder-1">
                </Col>
                <Col className="temp-grid-col">
                    
                    <div className="temp-grid">
                        <TemperantiaGrid />
                    </div>
                    <div className="gradient-div-holder">
                        <GradientDiv/>
                    </div>
                </Col>
                <Col id="temp-image-holder-2">
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


export default Temperantia

