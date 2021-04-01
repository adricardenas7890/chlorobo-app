import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';



const CastitasPoemContent = () => {
	let dispatch = useDispatch();
	let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.play();
    }
    return (
        <div>
        	<Typist className="MyTypist" cursor={{show: false}} onCharacterTyped={playSound}>
        		<p>Let’s weigh our options, weigh our skills.</p>
        		<Typist.Delay ms={500} />
        		<p>We move with fairness, and justice still.</p>
        		<Typist.Delay ms={1000} />
        		<p>I followed the current and it led me here.</p>
        		<Typist.Delay ms={500} />
        		<p>I trusted the system led with no fear.</p>
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
				<Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>

        	</Typist>
        
		</div>
    )
}

export default CastitasPoemContent;