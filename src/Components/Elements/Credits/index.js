import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import './index.css';
import correctSound from '../Sounds/correctSound.mp3';
import confetti from 'canvas-confetti';
import {helpPage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux';

const Credits = () => {
    const dispatch = useDispatch();
    const playFunfetti = () => {
        var audioCorrect = new Audio(correctSound);
        audioCorrect.play();
        confetti(); 
    }
    const restartGame = () => {
        playFunfetti();
        localStorage.clear();
        // setTimeout(window.location.reload(), 2000);
    }
    return (
        <div id="main-credits-container cursor-fun">
            <Container className="credits-text-temp">
                <p className="credits-title font-heritage">Chlorobo</p>
                <p>Thank you for playing Chlorobo.</p>
                <Button variant="light"  id="linearLink" onClick={() => dispatch(helpPage())} >Click here to view the single-page version.</Button>
                <br/>
                <Button variant="light" id="resetCookies" onClick={restartGame} >Click here to clear this website's cookies.</Button>
            </Container>
            <Container className="credits-text-rows">
                <Row className="credits-row-justify">
                    <p>Creative Director</p>
                    <p className="credits-name">Benjamin Randall</p>
                </Row>
                <Row className="credits-row-justify">
                    <p>Software Developer</p>
                    <p className="credits-name">Adriana Cardenas</p>
                </Row>
                <Row className="credits-row-justify">
                    <p>Writer</p>
                    <p className="credits-name">Celine M. Ndibwami</p>
                </Row>
                <Row className="credits-row-justify">
                    <p>Composer</p>
                    <p className="credits-name">Jonathan Randall</p>
                </Row>
                <Row className="credits-row-justify">
                    <p>QA</p>
                    <p className="credits-name">Xinran Liu</p>
                </Row>
            </Container>
            <p id="mailLink">Send your thoughts to chlorobo.nwf@gmail.com</p>
            <p>✿</p>
        </div>
    )
}

export default Credits;