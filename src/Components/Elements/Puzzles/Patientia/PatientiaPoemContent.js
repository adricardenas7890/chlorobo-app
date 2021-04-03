import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';


const PatientiaPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.play();
    }
    return (
        <div className="typist-container">
        	<Typist className="MyTypist" cursor={{show: false}} onCharacterTyped={playSound}>
        		<p>Mhmmm... Humm. Soothing. Loading...</p>
        		<Typist.Delay ms={500} />
        		<p>A bit overworked so I slowed the coding.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>The heat overflowed and went past my limits.</p>
                <Typist.Delay ms={500} />
                <p>Searching through chaos, I wasted my minutes.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Time is essential. Valuable. Wise.</p>
                <Typist.Delay ms={500} />
                <p>I must not waste it. It’ll be our demise.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Better to take the moment to think.</p>
                <Typist.Delay ms={500} />
                <p>Reload and reprogram. Use the date to sync.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Mind to body. Body to mind.</p>
                <Typist.Delay ms={500} />
                <p>Our worlds are different, yet one of a kind.</p>
                <Typist.Delay ms={1000} />
                <br/>
            </Typist>
            <div className="ContinueButton">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}

export default PatientiaPoemContent;