import React from 'react';
import { Button } from 'react-bootstrap';
import {mainMenuPage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux'

const PuzzleComplete = () => {
    let dispatch = useDispatch();
    return (
        <div>
            You have completed the puzzle.
                <div>
                <Button variant="light" onClick={() => { dispatch(mainMenuPage()) }} >Press here to continue</Button>
                </div>
        </div>
    )
}


export default PuzzleComplete;

