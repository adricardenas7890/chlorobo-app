import React from 'react';
import { Button } from 'react-bootstrap';
import {mainMenuPage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux'
import title from './title.png';

const Start = () => {
        const dispatch = useDispatch();
        return (
            <div>
                <div>
                    <img src={title} className="App-logo" alt="title" />
                </div>
                <div>
                	<Button variant="light" onClick={() => dispatch(mainMenuPage())} >Enter</Button>
                </div>
            </div>
        ) 
}

export default Start