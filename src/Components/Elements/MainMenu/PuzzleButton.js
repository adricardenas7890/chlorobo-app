import React from 'react';
import buttonBlack from './button-black.png';
import caritasButton from './buttonIcon-caritas.png';
import castitasButton from './buttonIcon-castitas.png';
import humanitasButton from './buttonIcon-humanitas.png';
import temperantiaButton from './buttonIcon-temperantia.png';
import industriaButton from './buttonIcon-industria.png';
import patientiaButton from './buttonIcon-patientia.png';
import humilitasbutton from './buttonIcon-humilitas.png';

import './index.css'


const PuzzleButton = ({ puzzle }) => {
    const name = puzzle;
    const buttonID = "button-" + String(puzzle);
    const divID = "button-" + String(puzzle) + "-div"
    let icon;
    
    switch (puzzle) {
        case "castitas":
            icon = <img src={castitasButton} className="menu-button-icon" alt={name}/>;
            break;
        case "caritas":
            icon = <img src={caritasButton} className="menu-button-icon" alt={name}/>;
            break;
        case "humanitas":
            icon = <img src={humanitasButton} className="menu-button-icon" alt={name} />;
            break;
        case "temperantia":
            icon = <img src={temperantiaButton} className="menu-button-icon" alt={name}/>;
            break;
        case "industria":
            icon = <img src={industriaButton} className="menu-button-icon" alt={name}/>;
            break;
        case "patientia":
            icon = <img src={patientiaButton} className="menu-button-icon" alt={name}/>;
            break;
        case "humilitas":
            icon = <img src={humilitasbutton} className="menu-button-icon" alt={name} />;
            break;
        default:
            icon = <div></div>
    }
    return (
        <div className="main-button-div">
            <div id={divID} className="menu-button-div">
                <img src={buttonBlack} id={buttonID} className="menu-button" alt={name} />
                {icon}
            </div>
        </div>
    )
}

export default PuzzleButton