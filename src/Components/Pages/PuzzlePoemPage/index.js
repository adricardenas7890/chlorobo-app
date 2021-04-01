import React from 'react';
import {  useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { GoToPuzzlePage } from '../../Elements/Puzzles/puzzlePageSlice';
// import  CastitasPoemContent  from '../../Elements/Puzzles/Castitas/index';
// import TemperantiaPoemContent from '../../Elements/Puzzles/Temperantia/index';
// import PatientiaPoemContent from '../../Elements/Puzzles/Patientia/index';
// import HumilitasPoemContent from '../../Elements/Puzzles/Humilitas/index';
// import CaritasPoemContent from '../../Elements/Puzzles/Caritas/index';
// import HumanitasPoemContent from '../../Elements/Puzzles/Humanitas/index';
// import IndustriaPoemContent from '../../Elements/Puzzles/Industria/index';

// Redirects to each main puzzle component
// Connected to puzzleSlice reducer, will update when state.puzzle updates

const PuzzlePoemContent = (props) => {
    let dispatch = useDispatch();
    //let puzzleComponent;
    // if (props.puzzle === "castitas") {
    //     puzzleComponent = <CastitasPoemContent/>
    // }
    // else if (props.puzzle === "temperantia") {
    //     puzzleComponent = <TemperantiaPoemContent/>
    // }
    // else if (props.puzzle === "industria") {
    //     puzzleComponent = <IndustriaPoemContent/>
    // }
    // else if (props.puzzle === "patientia") {
    //     puzzleComponent = <PatientiaPoemContent/>
    // }
    // else if (props.puzzle === "humilitas") {
    //     puzzleComponent = <HumilitasPoemContent/>
    // }
    // else if (props.puzzle === "caritas") {
    //     puzzleComponent = <CaritasPoemContent/>
    // }
    // else if (props.puzzle === "humanitas") {
    //     puzzleComponent = <HumanitasPoemContent/>
    // }
    // else {
    //     puzzleComponent = <div>We didn't find a match!</div>
    // }
    // return (
    //     <div>
    //         {/* You've reached the puzzle for: {puzzle} */}
    //         {puzzleComponent}
    //     </div>
    // )
    return (
        <div>
            <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>

        </div>
    )
}


export default PuzzlePoemContent