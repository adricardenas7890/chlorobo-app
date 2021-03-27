import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { puzzleCompletePage } from '../../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux';
import './index.css';

const Temperantia = () => {
    let title = "Temperantia";
    let dispatch = useDispatch();
    return (
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">{title}</div></div>
            <div className="main-puzzle-holder">
                <TemperantiaGrid/>
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(2));}}> click to solve this puzzle</Button>
                <Button variant="light" id="completePuzzlePageButton" onClick={() => { dispatch(puzzleCompletePage());}}> go to complete page</Button>
       
            
            </div>
        </div>
    )
}

const TemperantiaGrid = () => {
    return (
        <Container className ="temp-grid-div">
            <Row className="h-100">
                <Col >
                    one
                </Col>
                <Col className="temp-grid-col">
                    <div className="temp-grid">
                        something
                    </div>
                </Col>
                <Col >
                    three
                </Col>
            </Row>
        </Container>
    )
}

export default Temperantia