import React from 'react';
import { Button, Row, Col  } from 'react-bootstrap';
import { SetSolved } from '../puzzleProgressSlice';
import { useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import FadeIn from 'react-fade-in';
import './index.css';
import '../index.css';


const Industria = () => {
    // let title = "Industria";
    let dispatch = useDispatch();
    return (
        // <div className="castitas-container">
        //     This is the container for Industria.
        // </div>
        <div className="main-content-holder">
            <div className="ingame-puzzle-name-div"> <div className="ingame-puzzle-name">&nbsp;</div></div>
            <div className="main-puzzle-holder">
                <Row className="h-100" >
                    <Col xs={9} className="video-holder-div">
                        <IndustriaContent />
                    </Col>
                    <Col xs={3} className="puzzle-counters-div">
                        something
                    </Col>
                </Row>
                
                <Button variant="light" id="solvePuzzleButton" onClick={() => { dispatch(SetSolved(3));}}> click to solve this puzzle</Button>
                
            
            </div>
        </div>
    )
}

class IndustriaContent  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleFlag: false,
            classNameDiv: "industria-player-div"
        };
        this.fadeInFunction = this.fadeInFunction.bind(this);

    }

    fadeInFunction() {
        this.setState({
            visibleFlag: true,
            classNameDiv: "industria-player-div"
        });
    }

    render() {
        return (
            <FadeIn className="industria-player-div" transitionDuration={7000} visible={this.visibleFlag} >
                {/* <div className={this.classNameDiv}> */}
                    <ReactPlayer className="industria-player" url="https://player.vimeo.com/video/530111521?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="60vh" width="94vw" controls={false} onReady={this.fadeInFunction} playing={true} loop={true} />
                    {/* <iframe src="https://player.vimeo.com/video/530111521?title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Industria"></iframe> */}
                {/* </div> */}
            </FadeIn>
        )
    }

}

export default Industria