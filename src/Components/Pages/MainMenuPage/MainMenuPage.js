import React from 'react';
import { Button } from 'react-bootstrap';
import { puzzleProgressPage, endSequencePage } from '../Content/contentSlice';
import { Castitas, Temperantia, Industria, Patientia, Humilitas, Caritas, Humanitas} from '../PuzzlePage/puzzlePageSlice';


import { useDispatch } from 'react-redux'

// This will contain the welcome page and possibly the introduction sequence, if it looks drastically different than menu page. 
// We can merge this with Layout eventually if we want.
function MainMenuPage() {
        const dispatch = useDispatch();
    return (
            <div>
                <div>
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Castitas());} } >Castitas</Button>
                </div>
                <div>
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Temperantia()); }}>Temperantia</Button>
                </div>
                <div>
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Industria()); }} >Industria</Button>
                </div>
                <div>
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Patientia()); }} >Patentia</Button>
                </div>
                <div>
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Humilitas()); } } >Humilitas</Button>
                </div>
                <div>
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Caritas()); }}>Caritas</Button>
                </div>
                <div>
                <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Humanitas()); }}>Humanitas</Button>
                </div>
                <div>
                <Button variant="dark" onClick={() => dispatch(endSequencePage())} >End The Game</Button>
                </div>
            </div>
        ) 
}




export default MainMenuPage