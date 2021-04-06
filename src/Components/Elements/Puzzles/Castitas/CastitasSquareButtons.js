import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

//const store = configureStore({ reducer: viewPageReducer });

class CastitasSquareButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            solved : {
                squareOne: false,
                squareTwo: false,
                squareThree: false,
                squareFour: false,
                squareFive: false,
                squareSix: false,
                squareSeven: false
            },
            answer: { 
                squareOne: "square colorRed",
                squareTwo: "square colorOrange",
                squareThree: "square colorYellow",
                squareFour: "square colorGreen",
                squareFive: "square colorCyan",
                squareSix: "square colorBlue",
                squareSeven: "square colorPurple"
            },
            allSolved: false
        }
        this.handleColorChange = this.handleColorChange.bind(this);
        this.checkSolvedStatus = this.checkSolvedStatus.bind(this);
        this.puzzleSolved = this.puzzleSolved.bind(this);
    }

    handleColorChange(idName, currentClass) {
        if (idName !== undefined && this.state.answer[idName] === currentClass) {
            let copy = this.state;
            copy.solved[idName] = true;
            this.setState(copy);
            this.checkSolvedStatus()
        }       
    }
    checkSolvedStatus() {       
        let countCorrect = 0;
        for (const square in this.state.solved) {
            if (this.state.solved[square] === true) {
                countCorrect++;
            }
        }
        if (countCorrect === 7) {
            this.puzzleSolved();
        }
    }

    // Here is the event when puzzle is solved
    puzzleSolved() {
        const copy = this.state;
        copy.allSolved = true;
        this.setState(copy);
        alert("all solved, buttons are now disabled");
        this.props.handleSolved();
        

    }

    render() {
        return (
            <Container className="square-button-holder" >
                <Row>
                    <SquareButton onColorChange={this.handleColorChange} idName="squareOne" status={this.state.allSolved}/>
                    <SquareButton onColorChange={this.handleColorChange} idName="squareTwo" status={this.state.allSolved}/>
                    <SquareButton onColorChange={this.handleColorChange} idName="squareThree" status={this.state.allSolved} />
                    <SquareButton onColorChange={this.handleColorChange} idName="squareFour" status={this.state.allSolved} />
                    <SquareButton onColorChange={this.handleColorChange} idName="squareFive" status={this.state.allSolved} />
                    <SquareButton onColorChange={this.handleColorChange} idName="squareSix" status={this.state.allSolved} />
                    <SquareButton onColorChange={this.handleColorChange} idName="squareSeven"  status={this.state.allSolved} />
                </Row>
            </Container>
        )
    }
}


class SquareButton extends React.Component {
    constructor(props) {
        super(props);
        this.idName = props.idName
        this.state = {
            className: "square noColor",
            currentColor: 1
        }
        // YOU HAVE TO MIX THESE AROUND
        this.colorClasses = {
            1: 'square noColor',
            2: 'square colorGreen',
            3: 'square colorRed',
            4: 'square colorYellow',
            5: 'square colorOrange',
            6: 'square colorCyan',
            8: 'square colorPurple',
            7: 'square colorBlue',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleColorChange(className) {      
        this.props.onColorChange(this.idName, className);
    }

    handleClick() {
        let currentColor = this.state.currentColor;
        let newColor = currentColor === 8 ? 1 : currentColor + 1;
        let newClassNameColor = this.colorClasses[newColor];
        
        this.setState({
            className: newClassNameColor,
            currentColor: newColor
        })        
        this.handleColorChange(newClassNameColor);
    }

    render() {
        if (this.props.status === false) {
            return (
                <Col className="square-col">
                    <div  onClick={() => { this.handleClick(); }} id={this.idName} className={this.state.className}>
                    </div>
                </Col>
            )
        }
        else {
            return (
                <Col className="square-col">
                    <div id={this.idName} className={this.state.className}>
                    </div>
                </Col>
            )
        }
    }
}

export default CastitasSquareButtons