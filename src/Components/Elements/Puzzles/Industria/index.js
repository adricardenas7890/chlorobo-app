import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch, connect } from 'react-redux';
import  IndustriaCounters  from './IndustriaCounters';
import IndustriaVideo from './IndustriaVideo';
import IndustriaInputFields from './IndustriaInputFields';
import { GoToCompletePage } from '../puzzlePageSlice';
// import FadeIn from 'react-fade-in';
import './index.css';
import '../index.css';

const Industria = ({puzzle, poemMode, puzzleProgress}) => {
    let solved = false;
    let dispatch = useDispatch();
    let contentClass = "main-content-holder";

    let SolvedFunction = () => { 
        solved = true;
        contentClass = "main-content-holder fade";
        dispatch(SetSolved(3));
        setTimeout(() => { dispatch(GoToCompletePage()); }, 2000);
    }
    return (
        <div className={contentClass}>
            {/* <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">&nbsp;</div></div> */}
            <div className="main-puzzle-holder">
                <Container className="industria-container">
                    <Row className="industria-row h-100" >
                        <Col className="industria-video-col">
                            <IndustriaVideo />
                        </Col>
                    </Row>
                    <Row className="industria-row h-100" >
                        <Col className="industria-counters-col">
                            <Row className="counter-icons-row">
                                <Col>
                                    <IndustriaCounters counterName="or"></IndustriaCounters>
                                </Col>
                                <Col>
                                    <IndustriaCounters counterName="and"></IndustriaCounters>
                                </Col>
                                <Col>
                                    <IndustriaCounters counterName="not"></IndustriaCounters>
                                </Col>  
                            </Row>

                            <IndustriaInputFields onSolved={SolvedFunction} disabled={solved}/>
                        
                        </Col>
                    </Row>
                </Container>
            
            </div>
        </div>
    )
}


// Connect to store and couple Puzzle component with currentPuzzle store
const getPuzzleProgress = (appState) => {
    return ({
        puzzle: appState.currentPuzzle.puzzle,
        poemMode: appState.currentPuzzle.poemMode,
        puzzleProgress: appState.currentPuzzleProgress[1]

    })

}

export default connect(getPuzzleProgress)(Industria)