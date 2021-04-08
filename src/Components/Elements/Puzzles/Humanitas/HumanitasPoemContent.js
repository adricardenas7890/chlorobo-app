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
        audio.volume = .7;
        audio.play();
    }
    return (
        <div className="typist-container">
        	<Typist className="MyTypist" cursor={{show: false}} onCharacterTyped={playSound}>
                <Typist.Delay ms={1000} />
        		<p>Thank you for helping with every task.</p>
                <Typist.Delay ms={500} />
                <p>But to know how you do it, there’s a lot I must ask.</p>
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
                <p>Clearly there’s a method to this chaos in sow</p>
                <Typist.Delay ms={500} />
                <p>But before we part ways, <Typist.Delay ms={500} />what’s it like to be you?</p>
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