import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Particles from 'react-particles-js';
import './index.css';
import IntroPoemContent from './IntroPoemContent';
import IntroSong from '../Sounds/Intro.mp3';

const Intro = () => {
    return (
        <div>
            <IntroSequence/>
        </div>
    )
}

const IntroSequence = () => {

    // let onPlayFunction = () => { 
    // }

    return (
        <div id="intro-page">
            <div className="particles-intro particles-fade">
                <Particles
                    params={{
                        "particles": {
                            "color": {
                                "value": "#ffffff"
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
                    }} />
            </div>
            <IntroPoemContent/>
            <ReactAudioPlayer src={IntroSong} autoPlay loop />
        </div>
    );

}

export default Intro;