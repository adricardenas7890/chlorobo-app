import React from 'react';
import { Button } from 'react-bootstrap';
import {mainMenuPage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux'
import title from './title.png';

const Start = () => {
        const dispatch = useDispatch();
        if (isMobile) {
            return (
                <div>
                    <div>
                        <img src={splashImage} className="mobile-splash" alt="Chlorobo-title" />
                    </div>
                    <div>
                        <h1 className="mobile-text-1">This site is not accessible on mobile.</h1>
                        <h1 className="mobile-text-2">Please re-login from a desktop device.</h1>
                    </div>
                </div>
            )
        } else {
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
}

export default Start