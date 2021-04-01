import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import charSound from '../../Sounds/character.mp3';


const CaritasPoemContent = () => {
	let playSound = (character, charIdx) => {
		var audio = new Audio(charSound);
		audio.play();
	}
    return (
        <div>
        	<Typist className="MyTypist" cursor={{show: false}} onCharacterTyped={playSound}>
        		<p>A humming shimmer, the beaming lights.</p>
        		<Typist.Delay ms={500} />
        		<p>It was cold and dark, now it’s crystal white.</p>
        		<Typist.Delay ms={1000} />
        		<p>Loading, loading, data with thoughts.</p>
        		<Typist.Delay ms={500} />
        		<p>In a moment's notice I ceased to be lost.</p>
        		<Typist.Delay ms={1000} />
        		<p>There was nothing, nothing in sight.</p>
        		<Typist.Delay ms={500} />
        		<p>Now it’s shining, filled with crystal white.</p>
        		<Typist.Delay ms={1000} />
        		<p>Hard rock metal, now filled with heat.</p>
        		<Typist.Delay ms={500} />
        		<p>Electric currents now shine and beat.</p>
        		<Typist.Delay ms={1000} />
        		<p>Hmm...Is that me humming to that melodic tune?</p>
        		<Typist.Delay ms={500} />
        		<p>Should I follow the current? Should I be there soon?</p>
        		<Typist.Delay ms={1000} />
        	</Typist>
        </div>
    )
}

export default CaritasPoemContent;