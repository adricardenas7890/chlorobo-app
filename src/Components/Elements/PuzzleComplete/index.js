import React from 'react';
import { Button } from 'react-bootstrap';
import {mainMenuPage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux'
import completeImage from './Complete.png';

const PuzzleComplete = () => {
    let dispatch = useDispatch();
    return (
        <div>
        	<img src={completeImage} id="CompleteImage" alt="Complete" />
        	<div>
            	<p>You have completed this chapter.</p>
            </div>
            <div>
                <Button variant="light" onClick={() => { dispatch(mainMenuPage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}


export default PuzzleComplete;

