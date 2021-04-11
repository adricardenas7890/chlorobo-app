import React from 'react';
import { Button } from 'react-bootstrap';
// import {mainMenuPage} from '../../Pages/Content/contentSlice';
import {introPage} from '../../Pages/Content/contentSlice';
import {helpPage} from '../../Pages/Content/contentSlice';
// import {endSequencePage} from '../../Pages/Content/contentSlice';
import { useDispatch } from 'react-redux'
import splashImage from './splash.png';
import { isMobile } from 'react-device-detect';
import LazyLoad from 'react-lazyload';
// import { isChrome } from 'react-device-detect';
import "./index.css"

const Start = () => {
        const dispatch = useDispatch();
        if (isMobile) {
            return (
                <LazyLoad>
                    <div className="mobile-splash-container"> 
                        
                        <img src={splashImage} className="mobile-splash" alt="Chlorobo-title" />
                    
                    <h1 className="mobile-text-1">The full site is not accessible on mobile.</h1>
                    <br/>
                    <h1 className="mobile-text-2"><Button id="acc-button-mobile-start" variant="light" onClick={() => dispatch(helpPage())} >SINGLE-PAGE VERSION</Button></h1>
                    </div>
                </LazyLoad>
            )
        } else {
            return (
                <div className="web-splash-container">
                    <div>
                        <LazyLoad>
                            <img src={splashImage} className="splash-logo" alt="Chlorobo-title" />
                        </LazyLoad>
                    </div>
                    <div className="enter-button-div">
                        <Button id="enter-button-start" variant="light" onClick={() => dispatch(introPage())} >ENTER</Button>
                    </div>
                    <div className="enter-button-div">
                        <Button id="acc-button-start" variant="light" onClick={() => dispatch(helpPage())} >SINGLE-PAGE VERSION</Button>
                    </div>
                </div>
            ) 
        }
}

export default Start