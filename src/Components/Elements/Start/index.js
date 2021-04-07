import React from 'react';
import { Button } from 'react-bootstrap';
// import {mainMenuPage} from '../../Pages/Content/contentSlice';
import {introPage} from '../../Pages/Content/contentSlice';
// import {creditsPage} from '../../Pages/Content/contentSlice';
// import {endSequencePage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux'
import splashImage from './splash.png';
import { isMobile } from 'react-device-detect';
// import { isChrome } from 'react-device-detect';
import "./index.css"

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
                        <br/>
                        <h1 className="mobile-text-2">Please re-login from a desktop device.</h1>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <img src={splashImage} className="splash-logo" alt="Chlorobo-title" />
                    </div>
                    <br/>
                    <div>
                        <Button variant="light" onClick={() => dispatch(introPage())} >ENTER</Button>
                        {/* <Button variant="light" onClick={() => dispatch(creditsPage())} >CREDITS</Button> */}
                    </div>
                </div>
            ) 
        }
}

export default Start