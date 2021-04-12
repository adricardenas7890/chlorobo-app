import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';


const HumanitasPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        if (character !== ' ') {
            var audio = new Audio(charSound);
            audio.play();
        }
    }
    return (
        <div className="typist-container">
            <ReactPlayer className="poem-flower-player" url="https://player.vimeo.com/video/535354278?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100vh" width="100vw" controls={false} muted={true} playing={true} loop={true} playsinline/>
        	<Typist className="MyTypist" cursor={{show: false}} stdTypingDelay={0}avgTypingDelay={50}  onCharacterTyped={playSound}>
                <Typist.Delay ms={1000} />
        		<p>Thank you for helping with every task.</p>
                <Typist.Delay ms={500} />
                <p>But to know how you do it, <Typist.Delay ms={200} />there’s more I must ask.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>What is it like to live in your shoes?</p>
                <Typist.Delay ms={500} />
                <p>What is it like to be human and eventually choose?</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>You choose your own path and the life that you take.</p>
                <Typist.Delay ms={500} />
                <p>I’m built through a system that I can’t seem to shake.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>So how do you know if your actions are just?</p>
                <Typist.Delay ms={500} />
                <p>If the path that you take leads to kindness and trust?</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Clearly there’s a method to this chaos in sow.</p>
                <Typist.Delay ms={500} />
                <p>But before we part ways, <Typist.Delay ms={500} />what’s it like to be you?</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>✿</p>
        	</Typist>
            <div className="ContinueButton continue-button-fade">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}

export default HumanitasPoemContent;