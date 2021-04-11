import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';


const TemperantiaPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        if (character != ' ') {
            var audio = new Audio(charSound);
            audio.play();
        }
    }
    return (
        <div className="typist-container">
            <ReactPlayer className="poem-flower-player" url="https://player.vimeo.com/video/535354299?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100vh" width="100vw" controls={false} muted={true} playing={true} loop={true} playsinline/>
        	<Typist className="MyTypist" cursor={{show: false}} stdTypingDelay={0} avgTypingDelay={50} onCharacterTyped={playSound}>
                <Typist.Delay ms={1000} />
        		<p>Let’s weigh our options, <Typist.Delay ms={200} />weigh our skills.</p>
        		<Typist.Delay ms={700} />
        		<p>We move with fairness, <Typist.Delay ms={200} />and justice still.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>I followed the current and it led me here.</p>
                <Typist.Delay ms={500} />
                <p>I trusted the system led with no fear.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>The time is ticking, <Typist.Delay ms={300} />the numbers count.</p>
                <Typist.Delay ms={500} />
                <p>It moves with rhythm, <Typist.Delay ms={300} />left with no doubt.</p>
                <Typist.Delay ms={500} />
                <p>A balanced scale, <Typist.Delay ms={150} />a balanced life.</p>
                <Typist.Delay ms={500} />
                <p>Yet I still wonder if there’s more to strive.</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>Do I stay and count the minutes?</p>
                <Typist.Delay ms={500} />
                <p>Or move along and risk my limits?</p>
                <Typist.Delay ms={1000} />
                <p>But there’s more to this I know it’s true.</p>
                <Typist.Delay ms={500} />
                <p>I trusted the system that brought me to you.</p>
                <Typist.Delay ms={2000} />
                <br/>
                <p>✿</p>
            </Typist>
            <div className="ContinueButton continue-button-fade">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}

export default TemperantiaPoemContent;