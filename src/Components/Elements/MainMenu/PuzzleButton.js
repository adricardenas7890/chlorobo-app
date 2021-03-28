import React from 'react';
import { Button } from 'react-bootstrap';
import {useDispatch } from 'react-redux';
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

// This returns the final button ready for MainMenuPage
const PuzzleButton = (props) => { 
        return (
            <WrapPuzzleDesignInButton puzzle={props.puzzle} state={props.state}/>
        )
}

// Button with configured onClick events by puzzle name wrapped around <PuzzleDesign>
const WrapPuzzleDesignInButton = (props) => {
    let puzzleDesign = <PuzzleDesign puzzle={props.puzzle} state={props.state} />;
    let puzzleButtonID = "button-" + String(props.puzzle);
    let dispatch = useDispatch();
    if (props.state !== "hidden") {
        switch (props.puzzle) {
            case "castitas":
                return (
                    <Button id={puzzleButtonID} variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Castitas()); }}>
                        {puzzleDesign}
                    </Button>);
            case "temperantia":
                return (
                    <Button id={puzzleButtonID} variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Temperantia()); }}>
                        {puzzleDesign}
                    </Button>
                )
            case "industria":
                return (
                    <Button id={puzzleButtonID} variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Industria()); }}>
                        {puzzleDesign}
                    </Button>
                );
            case "patientia":
                return (
                    <Button id={puzzleButtonID} variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Patientia()); }}>
                        {puzzleDesign}
                    </Button>
                );
            case "humilitas":
                return (
                    <Button id={puzzleButtonID} variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Humilitas()); }}>
                        {puzzleDesign}
                    </Button>
                );
            case "caritas":
                return (
                    <Button id={puzzleButtonID} variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Caritas()); }}>
                        {puzzleDesign}
                    </Button>
                );
            case "humanitas":
                return (
                    <Button id={puzzleButtonID} variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Humanitas()); }}>
                        {puzzleDesign}
                    </Button>
                );
            default:
                return (
                    <Button id={puzzleButtonID} variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Castitas()); }}>
                        {puzzleDesign}
                    </Button>
                );
        }
    }
    else {
        return (
            <Button id={puzzleButtonID} variant="light" disabled>
                <PuzzleDesign puzzle={props.puzzle} state={props.state} />
            </Button>
        )
    }
}

// Create CSS for button specific to puzzle type AND puzzle solved state
const PuzzleDesign = ( props ) => {
    const name = String(props.puzzle);
    const buttonID = "button-" +  name ;
    const divID = "button-" + name + "-div";
    const mainButtonDivClass = "main-button-div main-" + name;
    let menuButtonDivClassName = props.state === "solved" ? "menu-button-div" : "menu-button-div unsolved";
    let iconClass = props.state === "hidden" ? "menu-button-icon hidden" : "menu-button-icon";
    let icon;
    switch (name) {
        case "castitas":
            icon = <img src={castitasButton} className={iconClass} alt={name} />;
            break;
        case "caritas":
            icon = <img src={caritasButton} className={iconClass} alt={name} />;
            break;
        case "humanitas":
            icon = <img src={humanitasButton} className={iconClass} alt={name} />;
            break;
        case "temperantia":
            icon = <img src={temperantiaButton} className={iconClass} alt={name} />;
            break;
        case "industria":
            icon = <img src={industriaButton} className={iconClass} alt={name} />;
            break;
        case "patientia":
            icon = <img src={patientiaButton} className={iconClass} alt={name} />;
            break;
        case "humilitas":
            icon = <img src={humilitasbutton} className={iconClass} alt={name} />;
            break;
        default:
            icon = <div></div>
    }
    return (
        <div className={mainButtonDivClass}>
            <div id={divID} className={menuButtonDivClassName}>
                <img src={buttonBlack} id={buttonID} className="menu-button" alt={name} />
                {icon}
            </div>
        </div>
    )
    
}


export default PuzzleButton;