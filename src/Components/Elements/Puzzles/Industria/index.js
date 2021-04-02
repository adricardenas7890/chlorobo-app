import React from 'react';
import { Container, Button, Row, Col  } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';
import  IndustriaCounters  from './IndustriaCounters';
import IndustriaVideo from './IndustriaVideo';
import IndustriaInputFields from './IndustriaInputFields';
// import FadeIn from 'react-fade-in';
import './index.css';
import '../index.css';


const Industria = () => {
    let solved = false;

    let onSolved = () => {
        alert("solved");
        solved = true;       
    }
    let dispatch = useDispatch();
    return (
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">&nbsp;</div></div>
            <div className="main-puzzle-holder">
                <Container className="industria-container">
                    <Row className="industria-row h-100" >
                        <Col className="industria-video-col">
                            <IndustriaVideo />
                        </Col>
                        <Col className="industria-counters-col">
                            <Row className="counter-icons-row">
                                <Col>
                                    <IndustriaCounters counterName="or"></IndustriaCounters>
                                </Col>
                                <Col>
                                    <IndustriaCounters counterName="and"></IndustriaCounters>
                                </Col>
                                <Col>
                                    <IndustriaCounters counterName="not"></IndustriaCounters>
                                </Col>
                                    
                            </Row>
                            <IndustriaInputFields onSolved={onSolved} disabled={solved}/>
                            
                            <Row className="h-75 industria-image-div">
                                div for images
                            </Row>
                        </Col>
                    </Row>
                </Container>
                
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(3));}}> click to solve this puzzle</Button>
                
            
            </div>
        </div>
    )
}


export default Industria