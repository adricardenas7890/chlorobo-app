import React from 'react';
import { Button } from 'react-bootstrap';
import {mainMenuPage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux';
import splashImage from './splash.png';

const Start = () => {
        const dispatch = useDispatch();
        return (
            <div>
                <div>
                    <img src={splashImage} className="App-logo" alt="Chlorobo-title" />
                </div>
                <br/>
                <div>
                	<Button variant="light" onClick={() => dispatch(mainMenuPage())} >ENTER</Button>
                </div>
            </div>
        ) 
}

export default Start