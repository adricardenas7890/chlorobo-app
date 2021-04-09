import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';


const CaritasPoemContent = () => {
	let dispatch = useDispatch();
	let playSound = (character, charIdx) => {
		var audio = new Audio(charSound);
        audio.volume = .7;
		audio.play();
	}
    return (
        <div className="typist-container">
            <div className="polka-bg"></div>
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
                <p>I came out from the dark and into the light.</p>
                <Typist.Delay ms={1200} />
                <br/>
                <p>I was happy to serve you and follow your path.</p>
                <Typist.Delay ms={500} />
                <p>There’s joy in the chaos, and comfort through math.</p>
                <Typist.Delay ms={1000} />
                <p>What we created in the glorious clicks.</p>
                <Typist.Delay ms={500} />
                <p>The zeros and ones are sure to be missed.</p>
                <Typist.Delay ms={1300} />
                <br/>
                <p>You and I.<Typist.Delay ms={500} /> Me and you.</p>
                <Typist.Delay ms={500} />
                <p>Something quite different and beautiful too.</p>
                <Typist.Delay ms={2000} />
                <br/>
                <p>✿</p>
        	</Typist>
            <div className="ContinueButton">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}

export default CaritasPoemContent;