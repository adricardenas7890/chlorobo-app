import React from 'react';
import {useDispatch } from 'react-redux';
import { Button, } from 'react-bootstrap';
// import { Row, Column, Container } from 'react-bootstrap';
import { puzzleProgressPage, endSequencePage } from '../../Pages/Content/contentSlice';
import { Castitas, Temperantia, Industria, Patientia, Humilitas, Caritas, Humanitas} from '../Puzzles/puzzlePageSlice';
// import flower1 from './flower1.png';
import './index.css'
import PuzzleButton from './PuzzleButton';


const MainMenu = () => {
    const dispatch = useDispatch();

    return (
        <div>
            {/* <div>
                <img src={flower1} className="App-logo" alt="flower1" />
            </div> */}
            <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Castitas()); }} >
                <PuzzleButton puzzle="castitas" />
            </Button>       
            <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Temperantia()); }}>
                <PuzzleButton puzzle="temperantia" />
            </Button>
            <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Industria()); }} >
                <PuzzleButton puzzle="industria" />
            </Button>
            <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Patientia()); }} >
                <PuzzleButton puzzle="patientia" />
            </Button>
            <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Humilitas()); }} >
                <PuzzleButton puzzle="humilitas" />
            </Button>
            <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Caritas()); }}>
                <PuzzleButton puzzle="caritas" />
            </Button>
            <Button variant="light" onClick={() => { dispatch(puzzleProgressPage()); dispatch(Humanitas()); }}>
                <PuzzleButton puzzle="humanitas" />
            </Button>
            <div>
            <Button variant="dark" onClick={() => dispatch(endSequencePage())} >End The Game</Button>
            </div>
        </div>
    )
    
}

export default MainMenu