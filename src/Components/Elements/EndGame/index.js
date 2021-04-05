import React from 'react';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import './index.css';
import EndGamePoemContent from './EndGamePoemContent';
import flower1 from '../MainMenu/flower2.png';
import OutroSong from '../../Elements/Sounds/Outro.mp3';

const EndGame = () => {
    return (
        <div>
            <RadialVideo/>
        </div>
    )
}

const RadialVideo = () => {

    let onPlayFunction = () => { 
    }

    return (
        <div id="endgame-page">
            <EndGamePoemContent/>
            <ReactAudioPlayer src={OutroSong} autoPlay loop />
            <ReactPlayer onPlay={onPlayFunction} className="radial-player" url="https://player.vimeo.com/video/530113213?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100vh" width="100vw" controls={false} muted={true} playing={true} loop={true} playsinline/>
            <div className="flower-image">
                <img src={flower1} alt="flower1" />
            </div>
        </div>
    );

  }

export default EndGame;