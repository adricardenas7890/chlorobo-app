import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';
//import sunSlider from './img/sun1-transparentYellow.png';
import prism from './img/prism.png';
import beams from './img/BeamsFull6-correctSpacing.png'
import './index.css';

const Castitas = () => {
    let title = "Castitas"
    let dispatch = useDispatch();
    return (
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <CastitasSunSlider/>
                <div className="image-holders">
                    <div className="prism-holder">
                        <img src={prism} className="prism-image" alt="prism"></img>
                    </div>
                    <div className="beams-holder">
                        <img src={beams} className="beams-image" alt="beams"></img>
                    </div>
                </div>
                <CastitasSquareButtons/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(1));}}> click to solve this puzzle</Button>
                
            
            </div>
        </div>
    )
}

class SquareButton extends React.Component {
    constructor(props) {
        super(props);
        this.idName = props.idName
        this.state = {
            className: "square noColor",
            currentColor: 1
        }
        this.colorClasses = {
            1: 'square noColor',
            2: 'square colorOne',
            3: 'square colorTwo',
            4: 'square colorThree',
            5: 'square colorFour',
            6: 'square colorFive',
            7: 'square colorSix',
            8: 'square colorSeven',
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
                squareOne: "square colorOne",
                squareTwo: "square colorTwo",
                squareThree: "square colorThree",
                squareFour: "square colorFour",
                squareFive: "square colorFive",
                squareSix: "square colorSix",
                squareSeven: "square colorSeven"
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

    puzzleSolved() {
        const copy = this.state;
        copy.allSolved = true;
        this.setState(copy);
        alert("all solved, buttons are now disabled");
    }

    render() {
        let status = this.state.allSolved;
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

class CastitasSunSlider extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {value: 50};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
      this.setState({ value: event.target.value });
  }

  render() {
      return (
        <div className="slider-container">
              <input type="range" value={this.state.value} onChange={this.handleChange} className="slider" name="points" min="0" max="100"></input>     
        </div>
    );
  }
}


export default Castitas