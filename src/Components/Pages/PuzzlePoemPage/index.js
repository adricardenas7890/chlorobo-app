import React from 'react';
import  CastitasPoemContent  from '../../Elements/Puzzles/Castitas/CastitasPoemContent';
import TemperantiaPoemContent from '../../Elements/Puzzles/Temperantia/TemperantiaPoemContent';
import PatientiaPoemContent from '../../Elements/Puzzles/Patientia/PatientiaPoemContent';
import HumilitasPoemContent from '../../Elements/Puzzles/Humilitas/HumilitasPoemContent';
import CaritasPoemContent from '../../Elements/Puzzles/Caritas/CaritasPoemContent';
import HumanitasPoemContent from '../../Elements/Puzzles/Humanitas/HumanitasPoemContent';
import IndustriaPoemContent from '../../Elements/Puzzles/Industria/IndustriaPoemContent';
// Redirects to each main puzzle component
// Connected to puzzleSlice reducer, will update when state.puzzle updates

const PuzzlePoemContent = (props) => {
    // let dispatch = useDispatch();
    let puzzlePoem;
    if (props.puzzle === "castitas") {
        puzzlePoem = <CastitasPoemContent/>
    }
    else if (props.puzzle === "temperantia") {
        puzzlePoem = <TemperantiaPoemContent/>
    }
    else if (props.puzzle === "industria") {
        puzzlePoem = <IndustriaPoemContent/>
    }
    else if (props.puzzle === "patientia") {
        puzzlePoem = <PatientiaPoemContent/>
    }
    else if (props.puzzle === "humilitas") {
        puzzlePoem = <HumilitasPoemContent/>
    }
    else if (props.puzzle === "caritas") {
        puzzlePoem = <CaritasPoemContent/>
    }
    else if (props.puzzle === "humanitas") {
        puzzlePoem = <HumanitasPoemContent/>
    }
    else {
        puzzlePoem = <div>We didn't find a match!</div>
    }
    return (
        <div>
            {/* You've reached the puzzle for: {puzzle} */}
            {puzzlePoem}
            {/* <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button> */}

        </div>
    )
    // return (
    //     <div>
    //         <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>

    //     </div>
    // )
}


export default PuzzlePoemContent