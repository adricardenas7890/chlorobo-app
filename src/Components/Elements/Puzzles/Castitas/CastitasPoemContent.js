import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import Particles from 'react-particles-js';


const CastitasPoemContent = () => {
	let dispatch = useDispatch();
	let playSound = (character, charIdx) => {
        var audio = new Audio(charSound);
        audio.volume = .7;
        audio.play();
    }
    return (
        <div className="typist-container">
            <div className="particles-puzzle particles-fade-fast"><Particles
                    params={{
                        "particles": {
                            "color": {
                                "value": "#000000"
                            },
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 1,
                                "random": true,
                                "anim": {
                                    "speed": .5,
                                    "size_min": 0.1
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "random": true,
                                "speed": .5,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 2,
                                    "size": 0,
                                    "opacity": 1
                                },
                                "repulse": {
                                    "distance": 400,
                                    "duration": 4
                                }
                            }
                        }
                    }} /></div>
        	<Typist className="MyTypist" cursor={{show: false}} onCharacterTyped={playSound}>
                <Typist.Delay ms={1000} />
                <p>A humming shimmer, the beaming lights.</p>
                <Typist.Delay ms={500} />
                <p>It was cold and dark, now it’s crystal white.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Loading, loading, data with thoughts.</p>
                <Typist.Delay ms={500} />
                <p>In a moment's notice I ceased to be lost.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>There was nothing, nothing in sight.</p>
                <Typist.Delay ms={500} />
                <p>Now it’s shining, filled with crystal white.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Hard rock metal, now filled with heat.</p>
                <Typist.Delay ms={500} />
                <p>Electric currents now shine and beat.</p>
                <Typist.Delay ms={1000} />
                <br/>
                <p>Hmm... Is that me humming to that melodic tune?</p>
                <Typist.Delay ms={500} />
                <p>Should I follow the current? Should I be there soon?</p>
                <Typist.Delay ms={2000} />
                <br/>
        	</Typist>
            <div className="ContinueButton">
                <Button variant="light" onClick={() => { dispatch(GoToPuzzlePage()) }} >Press here to continue</Button>
            </div>
		</div>
    )
}

export default CastitasPoemContent;