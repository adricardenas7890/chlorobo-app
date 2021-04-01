import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import charSound from '../../Sounds/character.mp3';


const HumilitasPoemContent = () => {
    let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.play();
    }
    return (
        <div>
        	<Typist className="MyTypist" cursor={{show: false}} onCharacterTyped={playSound}>
        		<p>Humillitas</p>
        		<Typist.Delay ms={500} />
        		<p>We move with fairness, and justice still.</p>
        		<Typist.Delay ms={1000} />
        		<p>END</p>
        	</Typist>
        </div>
    )
}

export default HumilitasPoemContent;