import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// This will return navigation bar links
function NavLink(props) {
    return (
        <span>
        </span>
    )
}

// This class will create the navigation bar
class NavBar extends React.Component {
    constructor(props) {
    }
  
    renderNavLink() {
        return (
            <NavLink/>
        )
    }

    render() {
        return (
            <div className="navbar-container">
                <div>
                    {/* ADD NAVBAR LINK HERE */}
                </div>
            </div>
        )
    }
}

// Return fully created navigation bar
export default NavBar;

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
