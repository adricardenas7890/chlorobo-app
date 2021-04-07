import React from 'react';
import Title from '../../Elements/Title/Title';
import StartPage from '../StartPage/StartPage';
import HelpPage from '../HelpPage/HelpPage';
import PuzzlePage from '../PuzzlePage/PuzzlePage';
import MainMenuPage from '../MainMenuPage/MainMenuPage';
import EndGamePage from '../EndGamePage/EndGamePage';
import PuzzleCompletePage from '../PuzzleCompletePage/PuzzleCompletePage';
import IntroPage from '../IntroPage/IntroPage';
// This Component will redirect to the main component for each view.
// Connected to contentSlice, will update when state.currentViewPage.viewPage updates

var Content = (props) => {
    let pageView = props.page;
    let content;
    if (pageView === "startPage") {
        content = <StartPage />
    }
    else if (pageView === "helpPage") {
        content = <HelpPage/>
    }
    else if (pageView === "puzzleProgressPage") {
        content = <PuzzlePage/>
    }
    else if (pageView === "mainMenuPage") {
        content = <MainMenuPage/>
    }
    else if (pageView === "endSequencePage") {
        content = <EndGamePage/>
    }
    else if (pageView === "puzzleCompletePage") {
        content = <PuzzleCompletePage/>
    }
    else if (pageView === "introPage") {
        content = <IntroPage/>
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
        <div className="App-content">
            {content}
        </div>      
    )
}

export default Content;