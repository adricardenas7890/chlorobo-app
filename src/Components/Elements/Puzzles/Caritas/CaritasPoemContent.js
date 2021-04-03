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
		audio.play();
	}
    return (
        <div className="typist-container">
        	<Typist className="MyTypist typist-small" cursor={{show: false}} onCharacterTyped={playSound}>
        		<p>This journey has led us in such a tedious way.</p>
        		<Typist.Delay ms={500} />
        		<p>Long and gruelling, with a high price to pay.</p>
        		<Typist.Delay ms={1000} />
                <br/>
        		<p>You gave me your knowledge.</p>
        		<Typist.Delay ms={500} />
        		<p>And I gave you mine too.</p>
        		<Typist.Delay ms={500} />
        		<p>But I had to let go of all that I knew.</p>
        		<Typist.Delay ms={1000} />
                <br/>
        		<p>In order to grow and develop as such.</p>
        		<Typist.Delay ms={500} />
        		<p>The need to reprogram. To learn and be touched.</p>
        		<Typist.Delay ms={1000} />
                <br/>
        		<p>The crystals refracted and gave knowledge to sight.</p>
                <Typist.Delay ms={500} />
                <p>I came out from the dark and into the light.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>I was happy to serve you and follow your path.</p>
                <Typist.Delay ms={500} />
                <p>There’s joy in the chaos, and comfy through math.</p>
                <Typist.Delay ms={500} />
                <p>What we created in the glorious clicks.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>The zeros and ones are sure to be missed.</p>
                <Typist.Delay ms={500} />
                <p>You and I. Me and you.</p>
                <Typist.Delay ms={500} />
                <p>Something quite different and beautiful too.</p>
                <Typist.Delay ms={1000} />
                <br/>
        	</Typist>
            <div className="ContinueButton">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}

export default CaritasPoemContent;