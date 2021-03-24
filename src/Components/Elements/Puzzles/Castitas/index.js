import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';
import sunSlider from './img/sun1-transparentYellow.png';
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
                {/* <div className="slider-holder">
                    <img src={sunSlider} className="sun-slider-image" alt="sun"></img>
                </div> */}
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
            1: 'noColor',
            2: 'colorOne',
            3: 'colorTwo',
            4: 'colorThree',
            5: 'colorFour',
            6: 'colorFive',
            7: 'colorSix',
            8: 'colorSeven',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let currentColor = this.state.currentColor;
        let newColor = currentColor == 8 ? 1 : currentColor + 1;
        let newClassNameColor = "square " +  String(this.colorClasses[newColor]);
        
        this.setState({
            className: newClassNameColor,
            currentColor: newColor
        })
    }

    render() {
        return (
                <Col className="square-col">
                <div onClick={() => { this.handleClick(); }} id={this.idName} className={this.state.className}>
                    </div>
                </Col>
        )
    }
}

const CastitasSquareButtons = () => {

    return (
        <Container className="square-button-holder" >
            <Row>
                <SquareButton idName="squareOne" />
                <SquareButton idName="squareTwo" />
                <SquareButton idName="squareThree" />
                <SquareButton idName="squareFour" />
                <SquareButton idName="squareFive" />
                <SquareButton idName="squareSix" />
                <SquareButton idName="squareSeven" />               
            </Row>
        </Container>
 )
}

class CastitasSunSlider extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {value: 50};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
      this.setState({ value: event.target.value });
      //console.log("this value is now:" + String(event.target.value));
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