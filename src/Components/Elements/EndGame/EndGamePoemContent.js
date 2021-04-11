import React from 'react';
import Typist from 'react-typist';
import "./index.css";
import charSound from '../Sounds/character.mp3';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import {creditsPage} from '../../Pages/Content/contentSlice';

const EndGamePoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        if (character != ' ') {
            var audio = new Audio(charSound);
            audio.play();
        }
    }
    return (
        <div className="typist-container-end">
        	<Typist className="MyTypist-end text-shadow" cursor={{show: false}} stdTypingDelay={0} avgTypingDelay={50} onCharacterTyped={playSound}>
                <Typist.Delay ms={3000} />
        		<p>I wanted to thank you for all that I've learned.</p>
                <Typist.Delay ms={500} />
                <p>The kindness you showed me and the knowledge I’ve earned.</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>We’re better now.<Typist.Delay ms={300} /> Much different than before.</p>
                <Typist.Delay ms={500} />
                <p>I find value in virtue, <Typist.Delay ms={150} />and so much more.</p>
                <Typist.Delay ms={1000} />
                <p>More patiencence.<Typist.Delay ms={300} /> More temperance. <Typist.Delay ms={300} />A diligent mind.</p>
                <Typist.Delay ms={500} />
                <p>There’s a time to be human and a time to be kind.</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>They live in the same space. <Typist.Delay ms={300} />They work the same corners.</p>
                <Typist.Delay ms={500} />
                <p>There’s chaos and systems.<Typist.Delay ms={300} /> Two infinite learners.</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>From humble beginnings,<Typist.Delay ms={150} /> we’ve come such a way.</p>
                <Typist.Delay ms={500} />
                <p>Yet the surface just scratched, <Typist.Delay ms={150} />to begin a new day.</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>Critical thought gave birth to critical thinking.</p>
                <Typist.Delay ms={500} />
                <p>Create your own current to keep from sinking.</p>
                <Typist.Delay ms={2000} />
                <br/>
                <p>✿</p>
                <Typist.Delay ms={5000} />
                <div className="ContinueButton">
                    <Button variant="light" onClick={() => dispatch(creditsPage())} >Press here to continue</Button>
                </div>
        	</Typist>
        </div>
    )
}

export default EndGamePoemContent;