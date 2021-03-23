import React from 'react';
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux';
import buttonBlack from './button-black.png';
import caritasButton from './buttonIcon-caritas.png';
import castitasButton from './buttonIcon-castitas.png';
import humanitasButton from './buttonIcon-humanitas.png';
import temperantiaButton from './buttonIcon-temperantia.png';
import industriaButton from './buttonIcon-industria.png';
import patientiaButton from './buttonIcon-patientia.png';
import humilitasbutton from './buttonIcon-humilitas.png';
import { puzzleProgressPage } from '../../Pages/Content/contentSlice';
import { Castitas, Temperantia, Industria, Patientia, Humilitas, Caritas, Humanitas } from '../Puzzles/puzzlePageSlice';
import './index.css'


const PuzzleButtonFinal = (props) => { 
    if (props.state === "available") {
        return (
            <AvailableButton puzzle={props.puzzle}/>
        )
    }
    else if (props.state === "solved") {
        return (
            <SolvedButton puzzle={props.puzzle} />
        )
    }
    else if (props.state === "hidden") {
        return (
            <HiddenButton/>
        )
    }
}
const AvailableButton = (props) => {
    return (
        <WrapPuzzleDesignInButton puzzle={props.puzzle} solved={false}/>
    )
    
}

const SolvedButton = (props) => {
    return (
        <WrapPuzzleDesignInButton puzzle={props.puzzle} solved={true}/>
    )
}

const HiddenButton = () => {
    return (
        <div style={{ display: 'none' }}>
        </div>
    )  
}
// Button with configured onClick events by puzzle name wrapped around <PuzzleDesign>
const WrapPuzzleDesignInButton = (props) => {
    let puzzleDesign = <PuzzleDesign puzzle={props.puzzle} solved={props.solved} />;
    let dispatch = useDispatch();
    
    switch (props.puzzle) {
        case "castitas":
            return (
                <Button variant="light" onClick={() => {
                    dispatch(puzzleProgressPage());
                    dispatch(Castitas());
                }}>
                    {puzzleDesign}
                </Button>);
        case "temperantia":
            return (
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Temperantia()); }}>
                    {puzzleDesign}
                </Button>
            )
        case "industria":
            return (
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Industria()); }}>
                    {puzzleDesign}
                </Button>
            );
        case "patientia":
            return (
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Patientia()); }}>
                    {puzzleDesign}
                </Button>
            );
        case "humilitas":
            return (
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Humilitas()); }}>
                    {puzzleDesign}
                </Button>                
            );
        case "caritas":
            return (
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Caritas()); }}>
                    {puzzleDesign}
                </Button>                
            );
        case "humanitas":
            return (
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Humanitas()); }}>
                    {puzzleDesign}
                </Button>
            );
        default:
            return (
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Castitas()); }}>
                    {puzzleDesign}
                </Button>
            );
    }
}

// Create CSS for button specific to puzzle type
const PuzzleDesign = ( props ) => {
    const name = String(props.puzzle);
    const buttonID = "button-" +  name ;
    const divID = "button-" +  name  + "-div"
    let mainClassName = props.solved? "main-button-div" : "main-button-div available"
    //let mainClassName = "main-button-div";
    let icon;
    switch (name) {
        case "castitas":
            icon = <img src={castitasButton} className="menu-button-icon" alt={name} />;
            break;
        case "caritas":
            icon = <img src={caritasButton} className="menu-button-icon" alt={name} />;
            break;
        case "humanitas":
            icon = <img src={humanitasButton} className="menu-button-icon" alt={name} />;
            break;
        case "temperantia":
            icon = <img src={temperantiaButton} className="menu-button-icon" alt={name} />;
            break;
        case "industria":
            icon = <img src={industriaButton} className="menu-button-icon" alt={name} />;
            break;
        case "patientia":
            icon = <img src={patientiaButton} className="menu-button-icon" alt={name} />;
            break;
        case "humilitas":
            icon = <img src={humilitasbutton} className="menu-button-icon" alt={name} />;
            break;
        default:
            icon = <div></div>
    }
    return (
        <div className={mainClassName}>
            <div id={divID} className="menu-button-div">
                <img src={buttonBlack} id={buttonID} className="menu-button" alt={name} />
                {icon}
            </div>
        </div>
    )
    
}
const PuzzleButton = ({ puzzle }) => {
    const name = puzzle;
    const buttonID = "button-" + String(puzzle);
    const divID = "button-" + String(puzzle) + "-div"
    let icon;
    
    switch (puzzle) {
        case "castitas":
            icon = <img src={castitasButton} className="menu-button-icon" alt={name} />;
            break;
        case "caritas":
            icon = <img src={caritasButton} className="menu-button-icon" alt={name} />;
            break;
        case "humanitas":
            icon = <img src={humanitasButton} className="menu-button-icon" alt={name} />;
            break;
        case "temperantia":
            icon = <img src={temperantiaButton} className="menu-button-icon" alt={name} />;
            break;
        case "industria":
            icon = <img src={industriaButton} className="menu-button-icon" alt={name} />;
            break;
        case "patientia":
            icon = <img src={patientiaButton} className="menu-button-icon" alt={name} />;
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

export default PuzzleButtonFinal;