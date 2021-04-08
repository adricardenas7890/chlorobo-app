import React from 'react';
import Typist from 'react-typist';
import "./index.css";
import charSound from '../Sounds/character.mp3';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { mainMenuPage, helpPage } from '../../Pages/Content/contentSlice';


const IntroPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.volume = .7;
        audio.play();
    }
    return (
        <div className="typist-container-intro">
        	<Typist className="MyTypist-intro text-shadow" cursor={{show: false}} onCharacterTyped={playSound}>
                <Typist.Delay ms={4000} />
        		<p>Where we begin and where we are going.</p>
                <Typist.Delay ms={500} />
                <p>The answers are there but are never quite showing.</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>Would you like to come along with me?</p>
                <Typist.Delay ms={500} />
                <p>Would you like to explore? <Typist.Delay ms={500} /> Open our eyes and see?</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>It might be asking a lot.</p>
                <Typist.Delay ms={500} />
                <p>But I’m sure there’s a lot more to be taught.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>I know nothing and neither do you.</p>
                <Typist.Delay ms={500} />
                <p>But come along and we’ll test if it’s true.</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>Test our limits and boundaries indeed.</p>
                <Typist.Delay ms={500} />
                <p>Discover when it’s best to follow or lead.</p>
                <Typist.Delay ms={1500} />
                <br/>
                <p>I can tell that you’re different and so am I.</p>
                <Typist.Delay ms={1000} />
                <p>Let's work together and discover why<Typist.Delay ms={200} />.<Typist.Delay ms={500} />.<Typist.Delay ms={500} />.</p>
                <Typist.Delay ms={3000} />
                <br/>
        	</Typist>
            <Typist cursor={{show: false}} >
                <Typist.Delay ms={16000} />
                <div className="ContinueButton intro-button">
                    <Button variant="dark" onClick={() => dispatch(mainMenuPage())} >Press here to continue</Button>
                </div>
            </Typist>
        </div>
    )
}

export default IntroPoemContent;