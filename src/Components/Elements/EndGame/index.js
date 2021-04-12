import React from 'react';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import GlobalAudioPlayer from '../../Elements/AudioPlayer/AudioPlayer';
import './index.css';
import EndGamePoemContent from './EndGamePoemContent';
import flowerComplete from '../MainMenu/flower-complete.png';
import OutroSong from '../../Elements/Sounds/Intro.mp3';

const EndGame = () => {
    return (
        <div>
            <RadialVideo/>
        </div>
    )
}

const RadialVideo = () => {

    return (
        <div id="endgame-page">
            <EndGamePoemContent/>
            <GlobalAudioPlayer src={OutroSong} autoPlay loop />
            <ReactPlayer className="radial-player" url="https://player.vimeo.com/video/530113213?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" height="100vh" width="100vw" controls={false} muted={true} playing={true} loop={true} playsinline/>
            <div className="flower-image">
                <img src={flowerComplete} alt="flower" />
            </div>
        </div>
    );

}

export default EndGame;