import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import './index.css';
import correctSound from '../Sounds/correctSound.mp3';
import confetti from 'canvas-confetti';

const Credits = () => {
    const playFunfetti = () => {
        var audioCorrect = new Audio(correctSound);
        audioCorrect.play();
        confetti(); 
    }
    const restartGame = () => {
        localStorage.clear();
    }
    return (
        <div id="main-credits-container cursor-fun">
            <Container className="credits-text-temp">
                <p class="credits-title font-heritage">Chlorobo</p>
                <p>Thank you for playing Chlorobo.</p>
                <Button variant="light" id="resetCookies" onClick={restartGame, playFunfetti}>Click here to clear this website's cookies.</Button>
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
            <p>✿</p>
        </div>
    )
}

export default Credits;