import React from 'react';
import Typist from 'react-typist';
import "../index.css";
import "../poemContent.css";
import charSound from '../../Sounds/character.mp3';
import { GoToPuzzlePage } from '../puzzlePageSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import Particles from 'react-particles-js';


const TemperantiaPoemContent = () => {
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