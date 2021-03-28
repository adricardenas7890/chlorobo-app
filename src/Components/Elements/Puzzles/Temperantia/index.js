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
            currentClass: props.color === "black" ? "temp-square black-square" : "temp-square white-square", // Doesn't change
            currentNumber: String(props.number),    //  Changes
            solvedStatus: ((props.color === "black" && props.number === "1") || (props.color === "white" && props.number === "0")) ? true: false  // Changes
        }
        if (props.place === "34" || props.place === "158" || props.place === "13" || props.place === "18") {
               this.state.currentNumber = 1 
        }
        if (props.place === "6" || props.place === "23" || props.place === "30" ) {
               this.state.currentNumber = 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.passSolvedStatus = this.passSolvedStatus.bind(this);

    }

    passSolvedStatus() {
        this.props.handleCorrectSquare(true);
    }



    handleClick() {
        let copy = this.state;
        this.state.currentNumber === "1" ? copy.currentNumber =  "0" : copy.currentNumber = "1";
        copy.solvedStatus = !this.state.solvedStatus;

        this.setState({ copy });

        if (copy.SolvedStatus === true) {
            this.passSolvedStatus();
        }
        
    }

    render(){
        
        return (
            <div className={this.state.currentClass} onClick={this.handleClick} >   
                {this.state.currentNumber}
                </div>

            )

    }
}

const SquareRow = (props) => { 
    let checkRow = (flag) => { 
        if (flag) {
            props.handleCorrectRow(true);
        }
    }

    let squareValues = props.squareValues;
    let generateRow = () => {
        let row = [];
        for (let property in squareValues) {
            let number = squareValues[property];
            let color = number === 1 ? "black" : "white";   

            const item = <GridSquare key={property} place={property} handleCorrectSquare={checkRow()} color={color} number={number}  />;
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

const TempGrid = () => { 
    let allValues = solutionObject;
    
    // let handleCorrectRow = (flag) => { 
    //     if (flag) {

    //     }
    // }
    
    let generateAllRows = () => { 
        let rows = [];
        let x = 0;
        
        for (let i = 0; i < 14; i++) {
            let currentValues = {};
            for (let j = 1; j < 21; j++) {
                currentValues[x + j] = allValues[ x + j];
            }
            const row = <SquareRow key={x} squareValues={currentValues} />;
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
        <TempGrid/>
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

