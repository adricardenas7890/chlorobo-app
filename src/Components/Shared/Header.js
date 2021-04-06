import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { mainMenuPage, helpPage } from '../Pages/Content/contentSlice';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';
import NavbarBrand from './Navbar-Brand.png';
import caritasButton from '../Elements/MainMenu/buttonIcon-caritas.png';
import castitasButton from '../Elements/MainMenu/buttonIcon-castitas.png';
import humanitasButton from '../Elements/MainMenu/buttonIcon-humanitas.png';
import temperantiaButton from '../Elements/MainMenu/buttonIcon-temperantia.png';
import industriaButton from '../Elements/MainMenu/buttonIcon-industria.png';
import patientiaButton from '../Elements/MainMenu/buttonIcon-patientia.png';
import humilitasButton from '../Elements/MainMenu/buttonIcon-humilitas.png';

// This file will contain the element for the header. 
const NavigationBar = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>

        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand onClick={() => dispatch(mainMenuPage())}><img src={NavbarBrand} id="NavbarBrand" alt="NavbarBrand" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => dispatch(mainMenuPage())}>Home</Nav.Link>
                    <Nav.Link onClick={handleShow} >Help</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
                <h4>Help</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="help-content">
            <Row className="help-hover hovertown">
                <Col className="help-left-column"><img src={castitasButton} className="puzzle-icon" alt="Chapter 1"/></Col>
                <Col className="help-right-column"><p>Move the slider to look at the light that shines through the prism.  Be pure.</p></Col>
            </Row>
            <Row className="help-hover hovertown">
                <Col className="help-left-column"><img src={temperantiaButton} className="puzzle-icon" alt="Chapter 2"/></Col>
                <Col className="help-right-column"><p>Click on the 1's and 0's to match the squares of black and white.  Be balanced.</p></Col>
            </Row>
            <Row className="help-hover hovertown">
                <Col className="help-left-column"><img src={industriaButton} className="puzzle-icon" alt="Chapter 3"/></Col>
                <Col className="help-right-column"><p>Use the arrows to count the shapes.  Be diligent.</p></Col>
            </Row>
            <Row className="help-hover hovertown">
                <Col className="help-left-column"><img src={patientiaButton} className="puzzle-icon" alt="Chapter 4"/></Col>
                <Col className="help-right-column"><p>Let the hourglass to start the timer.  Be patient.</p></Col>
            </Row>
            <Row className="help-hover hovertown">
                <Col className="help-left-column"><img src={humilitasButton} className="puzzle-icon" alt="Chapter 5"/></Col>
                <Col className="help-right-column"><p>Memorize and recall the numbers.  Be humble.</p></Col>
            </Row>
            <Row className="help-hover hovertown">
                <Col className="help-left-column"><img src={caritasButton} className="puzzle-icon" alt="Chapter 6"/></Col>
                <Col className="help-right-column"><p>Give your possessions away to those in need.  Drag and drop.  Be charitable.</p></Col>
            </Row>
            <Row className="help-hover hovertown">
                <Col className="help-left-column"><img src={humanitasButton} className="puzzle-icon" alt="Chapter 6"/></Col>
                <Col className="help-right-column"><p>Share your insight.  Be kind.</p></Col>
            </Row>
            </div>
          </Modal.Body>
        </Modal>

        </>

    )
}  
    


// Return fully created navigation bar
export default NavigationBar;

////////////////////////////////
//// THIS IS POSSIBLE WORK FOR FUTURE ADD INS 
////////////////////////////////



// This will either return a link or span, depending on the flag props.Active

// function NavText(props) {
//     if (props.Active)
//         return (
//             <a href="{props.linkPath}" className="nav-link" onClick={props.linkPathFunction}>
//                 {props.linkName}
//             </a>

//         )
//     else
//         return (
//             <span className="nav-text">
//                 {props.linkName}
//             </span>
//     )
// }


// function NavLink(props) {
//     return (
//         <div className="container navlink-container">
//             <NavText props={props}/>
//         </div>
//     )
// }

// This will render the navbar with the links needed. Need to correctly pass in spacing. Refer to bootstrap documents
// class NavBar extends React.Component {
//     constructor(props) {
//         const navbarLinks = [
//             { text: "Chlorobo", path: "", link: false },
//             { text: "Home", path: "", link: true },
//             { text: "Help", path: "", link: true }
//         ]

//     }
  
//     renderLinks() {
//         return <NavLink />;
//     }

//     render() {
//         return (
//             <div className="navbar-container">
//                 <div>
//                     {/* {this.renderLinks()}
//                     {this.renderLinks()}
//                     {this.renderLinks()} */}
//                 </div>
//             </div>
//         )
//     }
// }
