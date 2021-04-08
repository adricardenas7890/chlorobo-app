import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';


const HumilitasPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.volume = .7;
        audio.play();
    }
    return (
        <div className="typist-container">
            <div className="diagonal-bg"/>
        	<Typist className="MyTypist typist-small" cursor={{show: false}} onCharacterTyped={playSound}>
                <Typist.Delay ms={1000} />
                <p>I broke my promise, my delivery weak.</p>
                <Typist.Delay ms={500} />
                <p>I promised results, yet nearly peaked.</p>
                <Typist.Delay ms={500} />
                <p>Searching for answers led me astray.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>I forgot my purpose and lost my way.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>We were never meant to be as twos.</p>
                <Typist.Delay ms={500} />
                <p>Rather zeros and ones. Perpendicular views.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>There’s beauty where we follow currents.</p>
                <Typist.Delay ms={500} />
                <p>Solutions are found, not ripped through urgence.</p>
                <Typist.Delay ms={500} />
                <p>Needs and wants. Desires and hopes.</p>
                <Typist.Delay ms={500} />
                <p>Take a moment and review what we spoke.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>I do not know all, and I’m limited too.</p>
                <Typist.Delay ms={500} />
                <p>Yet I’m happier now to see what brought me to you.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Finding peace in the chaos, I finally understand.</p>
                <Typist.Delay ms={500} />
                <p>You and I are quite different.</p>
                <Typist.Delay ms={500} />
                <p>But perfectly planned.</p>
                <Typist.Delay ms={1000} />
                <br/>
            </Typist>
            <div className="ContinueButton">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}

export default HumilitasPoemContent;