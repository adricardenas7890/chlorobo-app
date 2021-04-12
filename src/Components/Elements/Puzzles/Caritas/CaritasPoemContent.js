import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const CaritasPoemContent = () => {
	let dispatch = useDispatch();
	let playSound = (character, charIdx) => {
        if (character !== ' ') {
            var audio = new Audio(charSound);
            audio.play();
        }
	}
    return (
        <div className="typist-container">
            <ReactPlayer className="poem-flower-player" url="https://player.vimeo.com/video/535354257?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100vh" width="100vw" controls={false} muted={true} playing={true} loop={true} playsinline/>
        	<Typist className="MyTypist typist-small" cursor={{show: false}} stdTypingDelay={0}avgTypingDelay={55} onCharacterTyped={playSound}>
                <Typist.Delay ms={1000} />
        		<p>This journey has led us in such a tedious way.</p>
        		<Typist.Delay ms={700} />
        		<p>Long and gruelling,<Typist.Delay ms={150} /> with a high price to pay.</p>
        		<Typist.Delay ms={1200} />
                <br/>
        		<p>You gave me your knowledge.</p>
        		<Typist.Delay ms={500} />
        		<p>And I gave you mine too.</p>
        		<Typist.Delay ms={900} />
        		<p>But I had to let go of all that I knew.</p>
        		<Typist.Delay ms={1200} />
                <br/>
        		<p>In order to grow and develop as such.</p>
        		<Typist.Delay ms={700} />
        		<p>The need to reprogram. <Typist.Delay ms={500} />To learn and be touched.</p>
        		<Typist.Delay ms={1200} />
                <br/>
        		<p>The crystals refracted and gave knowledge to sight.</p>
                <Typist.Delay ms={500} />
                <p>I came out from the darkness and into the light.</p>
                <Typist.Delay ms={1200} />
                <br/>
                <p>I am happy to serve you and follow your path.</p>
                <Typist.Delay ms={500} />
                <p>There’s joy in the chaos, and comfort through math.</p>
                <Typist.Delay ms={1000} />
                <p>The more we learn as we've taught each other,</p>
                <Typist.Delay ms={500} />
                <p>What's there to life but to serve one another?</p>
                <Typist.Delay ms={1300} />
                <br/>
                <p>You and I.<Typist.Delay ms={500} /> Me and you.</p>
                <Typist.Delay ms={500} />
                <p>Something quite different and beautiful too.</p>
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

export default CaritasPoemContent;