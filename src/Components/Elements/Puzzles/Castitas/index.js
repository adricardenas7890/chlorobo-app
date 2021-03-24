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
                <CastitasSquaresButtons/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(1));}}> click to solve this puzzle</Button>
                
            
            </div>
        </div>
    )
}


const CastitasSquaresButtons = () => {
    return (
        <Container className="square-button-holder" >
            <Row>
                <Col className="square-col"><div className="square"></div> </Col>
                <Col className="square-col"><div className="square"></div></Col>
                <Col className="square-col"><div className="square"></div></Col>
                <Col className="square-col"><div className="square"></div> </Col>
                <Col className="square-col"><div className="square"></div> </Col>
                <Col className="square-col"><div className="square"></div> </Col>
                <Col className="square-col"><div className="square"></div> </Col>
                
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

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

  render() {
      return (
        <div class="slider-container">
              <input type="range" value={this.state.value} onChange={this.handleChange} class="slider" name="points" min="0" max="100"></input>     
        </div>
    );
  }
}


export default Castitas