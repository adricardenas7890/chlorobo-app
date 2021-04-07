import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import './index.css';

const Credits = () => {
    return (
        <div id="main-credits-container cursor-fun">
            <Container className="credits-text-temp">
                <p class="credits-title font-heritage">Chlorobo</p>
                <p>Thank you for playing Chlorobo.</p>
                <p>If you are beta testing this game, please remember to send your feedback!</p>
            </Container>
            <Container className="credits-text-rows">
                <Row className="credits-row-justify">
                    <p>Creative Director</p>
                    <p className="credits-name">Benjamin Randall</p>
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
                    <p>Software Developer</p>
                    <p className="credits-name">Adriana Cardenas</p>
                </Row>
            </Container>
        </div>
    )
}

export default Credits;