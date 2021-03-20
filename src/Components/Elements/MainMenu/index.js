import React from 'react';
import {useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { puzzleProgressPage, endSequencePage } from '../../Pages/Content/contentSlice';
import { Castitas, Temperantia, Industria, Patientia, Humilitas, Caritas, Humanitas} from '../Puzzles/puzzlePageSlice';


// function MenuButton(props) {
//     return (
//         <div>
//             {/* MENU BUTTON LOGIC */}
//         </div>
//     )
// }

const MainMenu = () => {
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

export default MainMenu