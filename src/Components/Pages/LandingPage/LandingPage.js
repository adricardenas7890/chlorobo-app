import React from 'react';
import { Button } from 'react-bootstrap';
import {mainMenuPage} from '../Content/contentSlice';
import { useDispatch } from 'react-redux'

// This will contain the welcome page and possibly the introduction sequence, if it looks drastically different than menu page. 
// We can merge this with Layout eventually if we want.
function LandingPage() {
        const dispatch = useDispatch();
        return (
            <div>
                <div>
                    <Button variant="light" onClick={() => dispatch(mainMenuPage())} >Enter</Button>
                </div>
            </div>
        ) 
}


export default LandingPage