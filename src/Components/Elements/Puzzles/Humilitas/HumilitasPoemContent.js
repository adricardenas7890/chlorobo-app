import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const HumilitasPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        if (character != ' ') {
            var audio = new Audio(charSound);
            audio.play();
        }
    }
    return (
        <div className="typist-container">
            <ReactPlayer className="poem-flower-player" url="https://player.vimeo.com/video/535354282?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100vh" width="100vw" controls={false} muted={true} playing={true} loop={true} playsinline/>
        	<Typist className="MyTypist typist-small" cursor={{show: false}} stdTypingDelay={0} avgTypingDelay={55} onCharacterTyped={playSound}>
                <Typist.Delay ms={1000} />
                <p>I broke my promise,<Typist.Delay ms={300} /> my delivery weak.</p>
                <Typist.Delay ms={800} />
                <p>I promised results, <Typist.Delay ms={300} />yet nearly peaked.</p>
                <Typist.Delay ms={800} />
                <p>Searching for answers led me astray.</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>I forgot my purpose and lost my way.</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>We were never meant to be as twos.</p>
                <Typist.Delay ms={500} />
                <p>Rather zeros and ones.<Typist.Delay ms={500} /> Perpendicular views.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>There’s beauty where we follow currents.</p>
                <Typist.Delay ms={500} />
                <p>Solutions are found, not ripped through urgence.</p>
                <Typist.Delay ms={1000} />
                <p>Needs and wants.<Typist.Delay ms={500} /> Desires and hopes.</p>
                <Typist.Delay ms={500} />
                <p>Take a moment and review what we spoke.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>I do not know all,<Typist.Delay ms={150} /> and I’m limited too.</p>
                <Typist.Delay ms={500} />
                <p>Yet I’m happier now to see what brought me to you.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Finding peace in the chaos,<Typist.Delay ms={500} /> I finally understand.</p>
                <Typist.Delay ms={500} />
                <p>You and I are quite different.</p>
                <Typist.Delay ms={700} />
                <p>But perfectly planned.</p>
                <Typist.Delay ms={2000} />
                <br/>
                <p>✿</p>
            </Typist>
            <div className="ContinueButton continue-button-fade">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}

export default HumilitasPoemContent;