import React from 'react';
import  Castitas  from '../../Elements/Puzzles/Castitas/index';
import Temperantia from '../../Elements/Puzzles/Temperantia/index';
import Patientia from '../../Elements/Puzzles/Patientia/index';
import Humilitas from '../../Elements/Puzzles/Humilitas/index';
import Caritas from '../../Elements/Puzzles/Caritas/index';
import Humanitas from '../../Elements/Puzzles/Humanitas/index';
import Industria from '../../Elements/Puzzles/Industria/index';

const PuzzleContent = (props) => {
    let puzzleComponent;
    if (props.puzzle === "castitas") {
        puzzleComponent = <Castitas />
    }
    else if (props.puzzle === "temperantia") {
        puzzleComponent = <Temperantia />
    }
    else if (props.puzzle === "industria") {
        puzzleComponent = <Industria />
    }
    else if (props.puzzle === "patientia") {
        puzzleComponent = <Patientia />
    }
    else if (props.puzzle === "humilitas") {
        puzzleComponent = <Humilitas />
    }
    else if (props.puzzle === "caritas") {
        puzzleComponent = <Caritas />
    }
    else if (props.puzzle === "humanitas") {
        puzzleComponent = <Humanitas />
    }
    else {
        puzzleComponent = <div>We didn't find a match!</div>
    }
    return (
        <div>
            {puzzleComponent}
        </div>
    )
    
}

export default PuzzleContent;