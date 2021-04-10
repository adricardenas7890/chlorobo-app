import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const IndustriaPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.volume = .7;
        audio.play();
    }
    return (
        <div className="typist-container">
            <ReactPlayer className="poem-flower-player" url="https://player.vimeo.com/video/535354290?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100vh" width="100vw" controls={false} muted={true} playing={true} loop={true} playsinline/>
            <Typist className="MyTypist typist-small" cursor={{show: false}} stdTypingDelay={0} avgTypingDelay={50} onCharacterTyped={playSound}>
                <Typist.Delay ms={1000} />
                <p>Tap, <Typist.Delay ms={400} />tap, <Typist.Delay ms={400} />tap. <Typist.Delay ms={1000} />Tick, <Typist.Delay ms={400} />tick,<Typist.Delay ms={400} /> tick.</p>
                <Typist.Delay ms={1000} />
                <p>We work in tandem, <Typist.Delay ms={400} />we work in clicks.</p>
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