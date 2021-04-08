import React from 'react';
import PuzzleComplete from '../../Elements/PuzzleComplete/index';

// This will contain the main component for the puzzle complete page
const PuzzleCompletePage = (props) => {
    return (
        <PuzzleComplete end={props.end}/>
    )
}

export default PuzzleCompletePage;

