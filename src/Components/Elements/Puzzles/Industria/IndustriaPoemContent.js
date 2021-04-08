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
            <Typist className="MyTypist typist-small" cursor={{show: false}} onCharacterTyped={playSound}>
                <div>
                <Typist.Delay ms={1000} />
                <p>Tap, tap, tap. Tick, tick, tick.</p>
                <Typist.Delay ms={500} />
                <p>We work in tandem, we work in clicks.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>You give me directions. I’ll follow your lead.</p>
                <Typist.Delay ms={500} />
                <p>I was built with precision, and an accurate speed.</p>
                <Typist.Delay ms={500} />
                <p>I work through the problems, though my memories are new.</p>
                <Typist.Delay ms={500} />
                <p>I collect all the data given to me from you.</p>
                <Typist.Delay ms={500} />
                <p>I’ve strayed from my system, began a new journey.</p>
                <Typist.Delay ms={500} />
                <p>But your world is chaotic, and I’m only just learning.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>It’s different here from the things I knew.</p>
                <Typist.Delay ms={500} />
                <p>I worked in numbers. One, zero, but never two.</p>
                <Typist.Delay ms={500} />
                <p>Me and you. You and I.</p>
                <Typist.Delay ms={500} />
                <p>We’re working together, yet I struggle to find.</p>
                <Typist.Delay ms={500} />
                <br/>
                <p>Find understanding. Find reason and logic.</p>
                <Typist.Delay ms={500} />
                <p>But you’re too random, far outside of my pocket.</p>
                <Typist.Delay ms={500} />
                <p>Tap, tap, tap. Click, click, click.</p>
                <Typist.Delay ms={500} />
                <p>I wonder if our two worlds will stick.</p>
                <Typist.Delay ms={2000} />
                <br/>
                </div>
            </Typist>
            <div className="ContinueButton">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}

export default IndustriaPoemContent;