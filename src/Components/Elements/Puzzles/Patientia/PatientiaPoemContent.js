import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';


const PatientiaPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.play();
    }
    return (
        <div className="typist-container">
            <ReactPlayer className="poem-flower-player" url="https://player.vimeo.com/video/535354296?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100vh" width="100vw" controls={false} muted={true} playing={true} loop={true} playsinline/>
        	<Typist className="MyTypist" cursor={{show: false}} stdTypingDelay={0} avgTypingDelay={55} onCharacterTyped={playSound}>
        		<p>Mhmmm<Typist.Delay ms={300} />.<Typist.Delay ms={300} />.<Typist.Delay ms={300} />. <Typist.Delay ms={600} />Humm.<Typist.Delay ms={600} /> Soothing.<Typist.Delay ms={600} />  Loading<Typist.Delay ms={300} />.<Typist.Delay ms={300} />.<Typist.Delay ms={300} />.<Typist.Delay ms={300} /></p>
        		<Typist.Delay ms={700} />
        		<p>A bit overworked so I slowed the coding.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>The heat overflowed and went past my limits.</p>
                <Typist.Delay ms={500} />
                <p>Searching through chaos, <Typist.Delay ms={300} />I wasted my minutes.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Time is essential. <Typist.Delay ms={300} />Valuable. <Typist.Delay ms={300} />Wise.</p>
                <Typist.Delay ms={500} />
                <p>I must not waste it. <Typist.Delay ms={300} />It’ll be our demise.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Better to take the moment to think.</p>
                <Typist.Delay ms={500} />
                <p>Reload and reprogram. <Typist.Delay ms={300} />Use the date to sync.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Mind to body. <Typist.Delay ms={300} />Body to mind.</p>
                <Typist.Delay ms={500} />
                <p>Our worlds are different, <Typist.Delay ms={300} />yet one of a kind.</p>
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

export default PatientiaPoemContent;