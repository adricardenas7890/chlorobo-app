import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import './index.css';
import caritasButton from '../MainMenu/buttonIcon-caritas.png';
import castitasButton from '../MainMenu/buttonIcon-castitas.png';
import humanitasButton from '../MainMenu/buttonIcon-humanitas.png';
import temperantiaButton from '../MainMenu/buttonIcon-temperantia.png';
import industriaButton from '../MainMenu/buttonIcon-industria.png';
import patientiaButton from '../MainMenu/buttonIcon-patientia.png';
import humilitasbutton from '../MainMenu/buttonIcon-humilitas.png';

const Help = () => {
    return (
        <HelpModal />
    )
}

function HelpModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
                <h4>Help</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="help-content">
            <div className="help-hover" id="Puzzle1">
                <img src={castitasButton} className="puzzle-icon" alt="Chapter 1"/>
            </div>
            <div className="help-hover" id="Puzzle2">
                <img src={temperantiaButton} className="puzzle-icon" alt="Chapter 2"/>
            </div>
            <div className="help-hover" id="Puzzle3">
                <img src={industriaButton} className="puzzle-icon" alt="Chapter 3"/>
            </div>
            <div className="help-hover" id="Puzzle4">
                <img src={patientiaButton} className="puzzle-icon" alt="Chapter 3"/>
            </div>
            <div className="help-hover" id="Puzzle5">
                <img src={humilitasbutton} className="puzzle-icon" alt="Chapter 3"/>
            </div>
            <div className="help-hover" id="Puzzle6">
                <img src={caritasButton} className="puzzle-icon" alt="Chapter 3"/>
            </div>
            <div className="help-hover" id="Puzzle7">
                <img src={humanitasButton} className="puzzle-icon" alt="Chapter 3"/>
            </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default Help;
