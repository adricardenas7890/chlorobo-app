import React from 'react';
import { Button } from 'react-bootstrap';
import {mainMenuPage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux'

const Start = () => {
        const dispatch = useDispatch();
        return (
            <div>
                <div>
                    <Button variant="light" onClick={() => dispatch(mainMenuPage())} >Enter</Button>
                </div>
            </div>
        ) 
}

export default Start