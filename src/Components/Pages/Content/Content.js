import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container'
import Title from '../../Elements/Title/Title';
import LandingPage from '../LandingPage/LandingPage';
import HelpPage from '../HelpPage/HelpPage';
import PuzzlePage from '../PuzzlePage/PuzzlePage';
import MainMenuPage from '../MainMenuPage/MainMenuPage';

// Use this file to redirect to different main views

var Content = (props) => {
    let pageView = props.page;
    let content;
    if (pageView == "landingPage") {
        content = <LandingPage />
    }
    else if (pageView == "helpPage") {
        content = <HelpPage/>
    }
    else if (pageView == "puzzleProgressPage") {
        content = <PuzzlePage/>
    }
    else if (pageView == "mainMenuPage") {
        content = <MainMenuPage/>
    }
    else {
        content = (
                <div>
                <Title title={props.title} />
                <div> You have not figured this route out yet.</div>
                <div> This div contains the content.</div>
                The page passed in is {props.page}
                </div>
            )        
    }

    return (
        <header className="App-header">
            {content}
        </header>      
    )
}

export default Content;