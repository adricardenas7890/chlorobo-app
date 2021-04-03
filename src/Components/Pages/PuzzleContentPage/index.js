import React from 'react';
import Castitas  from '../../Elements/Puzzles/Castitas/index';
import Temperantia from '../../Elements/Puzzles/Temperantia/index';
import Patientia from '../../Elements/Puzzles/Patientia/index';
import Humilitas from '../../Elements/Puzzles/Humilitas/index';
import Caritas from '../../Elements/Puzzles/Caritas/index';
import Humanitas from '../../Elements/Puzzles/Humanitas/index';
import Industria from '../../Elements/Puzzles/Industria/index';

import PuzzleSong from '../PuzzleSong/index';

const PuzzleContent = (props) => {
    let puzzleSong = <PuzzleSong puzzle={props.puzzle}/>;
    let puzzleContent;
    if (props.puzzle === "castitas") {
        puzzleContent = <Castitas />
    }
    else if (props.puzzle === "temperantia") {
        puzzleContent = <Temperantia />
    }
    else if (props.puzzle === "industria") {
        puzzleContent = <Industria />
    }
    else if (props.puzzle === "patientia") {
        puzzleContent = <Patientia />
    }
    else if (props.puzzle === "humilitas") {
        puzzleContent = <Humilitas />
    }
    else if (props.puzzle === "caritas") {
        puzzleContent = <Caritas />
    }
    else if (props.puzzle === "humanitas") {
        puzzleContent = <Humanitas />
    }
    else {
        puzzleContent = <div>We didn't find a match!</div>
    }
    return (
        <div>
            <div>
            {puzzleSong}
            </div>
            {puzzleContent}
        </div>
    )
    
}

export default PuzzleContent;