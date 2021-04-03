import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { puzzleCompletePage } from '../../../Pages/Content/contentSlice';
import { useDispatch, } from 'react-redux';
import  TemperantiaGrid  from './TemperantiaGrid';
import './index.css';
import img1 from './temperantia-img1.jpg'
import img2 from './temperantia-img2.jpg'

const Temperantia = () => {
    let dispatch = useDispatch();
    return (
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">&nbsp;</div></div>
            <div className="main-puzzle-holder">
                <TemperantiaGridMain/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(2));}}> click to solve this puzzle</Button>
                <Button variant="light" id="completePuzzlePageButton" onClick={() => { dispatch(puzzleCompletePage());}}> go to complete page</Button>
            </div>
        </div>
    )
}

const TemperantiaGridMain = () => {
    return (
        <Container className ="temp-grid-div">
            <Row className="h-100">
                <Col id="temp-image-holder-1">
                    <img src={img1}/>
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
                    <img src={img2}/>
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



