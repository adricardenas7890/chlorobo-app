import React from 'react';
import { connect } from 'react-redux';
import  Castitas  from '../../Elements/Puzzles/Castitas/index';
import Temperantia from '../../Elements/Puzzles/Temperantia/index';
import Patientia from '../../Elements/Puzzles/Patientia/index';
import Humilitas from '../../Elements/Puzzles/Humilitas/index';
import Caritas from '../../Elements/Puzzles/Caritas/index';
import Humanitas from '../../Elements/Puzzles/Humanitas/index';
import Industria from '../../Elements/Puzzles/Industria/index';
import CastitasPoemContent  from '../../Elements/Puzzles/Castitas/CastitasPoemContent';
import TemperantiaPoemContent from '../../Elements/Puzzles/Temperantia/TemperantiaPoemContent';
import PatientiaPoemContent from '../../Elements/Puzzles/Patientia/PatientiaPoemContent';
import HumilitasPoemContent from '../../Elements/Puzzles/Humilitas/HumilitasPoemContent';
import CaritasPoemContent from '../../Elements/Puzzles/Caritas/CaritasPoemContent';
import HumanitasPoemContent from '../../Elements/Puzzles/Humanitas/HumanitasPoemContent';
import IndustriaPoemContent from '../../Elements/Puzzles/Industria/IndustriaPoemContent';

import PuzzleContent from '../PuzzleContentPage/index';
import PuzzlePoemContent from '../PuzzlePoemPage/index'

// Redirects to each main puzzle component
// Connected to puzzleSlice reducer, will update when state.puzzle updates

const PuzzlePage = ({ puzzle, poemMode }) => {
    let puzzleComponent;
    if (poemMode === true) {
        console.log("here it is");
        //<PuzzlePoemContent puzzle={puzzle} />
        // if (puzzle === "castitas") {
        // puzzleComponent = <CastitasPoemContent/>
        // }
        // else if (puzzle === "temperantia") {
        //     puzzleComponent = <TemperantiaPoemContent/>
        // }
        // else if (puzzle === "industria") {
        //     puzzleComponent = <IndustriaPoemContent/>
        // }
        // else if (puzzle === "patientia") {
        //     puzzleComponent = <PatientiaPoemContent/>
        // }
        // else if (puzzle === "humilitas") {
        //     puzzleComponent = <HumilitasPoemContent/>
        // }
        // else if (puzzle === "caritas") {
        //     puzzleComponent = <CaritasPoemContent/>
        // }
        // else if (puzzle === "humanitas") {
        //     puzzleComponent = <HumanitasPoemContent/>
        // }
        // else {
        //     puzzleComponent = <div>We didn't find a match!</div>
        // }
    }
    else if (poemMode === false) {
        <PuzzleContent puzzle={puzzle}/>
        // if (puzzle === "castitas") {
        //     puzzleComponent = <Castitas />
        // }
        // else if (puzzle === "temperantia") {
        //     puzzleComponent = <Temperantia />
        // }
        // else if (puzzle === "industria") {
        //     puzzleComponent = <Industria />
        // }
        // else if (puzzle === "patientia") {
        //     puzzleComponent = <Patientia />
        // }
        // else if (puzzle === "humilitas") {
        //     puzzleComponent = <Humilitas />
        // }
        // else if (puzzle === "caritas") {
        //     puzzleComponent = <Caritas />
        // }
        // else if (puzzle === "humanitas") {
        //     puzzleComponent = <Humanitas />
        // }
        // else {
        //     puzzleComponent = <div>We didn't find a match!</div>
        // }
    }
    return (
        <div>
            {puzzleComponent}
        </div>
    )   
}

// Connect to store and couple Puzzle component with currentPuzzle store
const getCurrentViewPage = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode
    })

}

export default connect(getCurrentViewPage)(PuzzlePage)