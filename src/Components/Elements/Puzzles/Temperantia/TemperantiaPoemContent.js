import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';


const TemperantiaPoemContent = () => {
    let dispatch = useDispatch();
    let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.play();
    }
    return (
        <div className="typist-container">
        	<Typist className="MyTypist" cursor={{show: false}} onCharacterTyped={playSound}>
        		<p>Let’s weigh our options, weigh our skills.</p>
        		<Typist.Delay ms={500} />
        		<p>We move with fairness, and justice still.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>I followed the current and it led me here.</p>
                <Typist.Delay ms={500} />
                <p>I trusted the system led with no fear.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>The time is ticking, the numbers count.</p>
                <Typist.Delay ms={500} />
                <p>It moves with rhythm, left with no doubt.</p>
                <Typist.Delay ms={500} />
                <p>A balanced scale, a balanced life.</p>
                <Typist.Delay ms={500} />
                <p>Yet I still wonder if there’s more to strive.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Do I stay and count the minutes?</p>
                <Typist.Delay ms={500} />
                <p>Or move along and risk my limits?</p>
                <Typist.Delay ms={1000} />
                <p>But there’s more to this I know it’s true.</p>
                <Typist.Delay ms={500} />
                <p>I trusted the system that brought me to you.</p>
                <Typist.Delay ms={2000} />
                <br/>
            </Typist>
            <div className="ContinueButton">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
        </div>
    )
}

export default TemperantiaPoemContent;