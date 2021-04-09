import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import Particles from 'react-particles-js';


const IndustriaPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.volume = .7;
        audio.play();
    }
    return (
        <div className="typist-container">
            <div className="diagonal-bg-2"/>
            <Typist className="MyTypist typist-small" cursor={{show: false}} stdTypingDelay={0} avgTypingDelay={55} onCharacterTyped={playSound}>
                <Typist.Delay ms={1000} />
                <p>Tap, <Typist.Delay ms={700} />tap, <Typist.Delay ms={700} />tap. <Typist.Delay ms={2000} />Tick, <Typist.Delay ms={700} />tick,<Typist.Delay ms={700} /> tick.</p>
                <Typist.Delay ms={1000} />
                <p>We work in tandem, <Typist.Delay ms={700} />we work in clicks.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>You give me directions.<Typist.Delay ms={700} /> I’ll follow your lead.</p>
                <Typist.Delay ms={500} />
                <p>I was built with precision, <Typist.Delay ms={200} />and an accurate speed.</p>
                <Typist.Delay ms={1000} />
                <p>I work through the problems, <Typist.Delay ms={200} />though my memories are new.</p>
                <Typist.Delay ms={500} />
                <p>I collect all the data given to me from you.</p>
                <Typist.Delay ms={1000} />
                <p>I’ve strayed from my system, <Typist.Delay ms={200} />began a new journey.</p>
                <Typist.Delay ms={500} />
                <p>But your world is chaotic,<Typist.Delay ms={200} /> and I’m only just learning.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>It’s different here from the things I knew.</p>
                <Typist.Delay ms={500} />
                <p>I worked in numbers.<Typist.Delay ms={400} /> One,<Typist.Delay ms={400} /> zero, <Typist.Delay ms={600} />but never two.</p>
                <Typist.Delay ms={500} />
                <p>Me and you. <Typist.Delay ms={400} />You and I.</p>
                <Typist.Delay ms={500} />
                <p>We’re working together, <Typist.Delay ms={400} />yet I struggle to find.</p>
                <Typist.Delay ms={500} />
                <br/>
                <p>Find understanding. <Typist.Delay ms={400} />Find reason and logic.</p>
                <Typist.Delay ms={500} />
                <p>But you’re too random, <Typist.Delay ms={400} />far outside of my pocket.</p>
                <Typist.Delay ms={500} />
                <p>Tap, <Typist.Delay ms={700} />tap, <Typist.Delay ms={700} />tap. <Typist.Delay ms={2000} />Click, <Typist.Delay ms={700} />click,<Typist.Delay ms={700} /> click.</p>
                <Typist.Delay ms={1000} />
                <p>I wonder if our two worlds will stick.</p>
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

export default IndustriaPoemContent;