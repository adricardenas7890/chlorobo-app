import React from 'react';
import MainMenu from '../../Elements/MainMenu/index'
import ReactAudioPlayer from 'react-audio-player';
import MainMenuSong from '../../Elements/Sounds/MainMenu.mp3';
import GlobalAudioPlayer from '../../Elements/AudioPlayer/AudioPlayer';

// This will contain the main component for Main Menu
function MainMenuPage() {
    return (
        <div>
            <MainMenu /> 
            <GlobalAudioPlayer songName={MainMenuSong} />  
        </div>        
    ) 
}

export default MainMenuPage