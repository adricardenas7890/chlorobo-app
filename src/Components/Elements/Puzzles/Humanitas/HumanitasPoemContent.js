import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';


const HumanitasPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.play();
    }
    return (
        <div className="typist-container">
        	<Typist className="MyTypist" cursor={{show: false}} onCharacterTyped={playSound}>
        		<p>I wanted to thank you for all that I learned.</p>
                <Typist.Delay ms={500} />
                <p>The kindness you showed me and the knowledge I’ve earned.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>We’re better now. Much different than before.</p>
                <Typist.Delay ms={500} />
                <p>I find value in value, and so much more.</p>
                <Typist.Delay ms={500} />
                <p>More patiencence. More temperance. A diligent mind.</p>
                <Typist.Delay ms={500} />
                <p>There’s a time to be human and a time to be kind.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>They live in the same space. They work the same corners.</p>
                <Typist.Delay ms={500} />
                <p>There’s chaos and systems. Two infinite learners.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>From humble beginnings, we’ve come such a way.</p>
                <Typist.Delay ms={500} />
                <p>Yet the surface just scratched, to begin a new day.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Critical thought gave birth to critical thinking.</p>
                <Typist.Delay ms={500} />
                <p>Create your own current to keep from sinking.</p>
                <Typist.Delay ms={1000} />
                <br/>
        	</Typist>
            <div className="ContinueButton">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}

export default HumanitasPoemContent;