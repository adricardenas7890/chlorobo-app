import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';



// This class will create the navigation bar 
const NavigationBar= () => 
    (

            <Navbar collapseOnSelect expand="lg" bg="light" >
            <Navbar.Brand href="#home">Chlorobo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link eventKey={2} href="#help">
                    Help
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>            

    )
    
    


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
