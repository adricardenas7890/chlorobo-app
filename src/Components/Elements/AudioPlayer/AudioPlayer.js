import React from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';


const GlobalAudioPlayer = (props) => {
    return (
        <ReactAudioPlayer src={props.songName} autoPlay loop volume={props.volume} muted={props.music}  />
    )
}


// Connect to store and couple Layout component with currentViewPage store
const getAudioSettings = (appState) => {
    return ({
        music: appState.currentAudioSettings.music,
        sounds: appState.currentAudioSettings.sounds,
        volume: appState.currentAudioSettings.volume
    })

}

export default connect(getAudioSettings)(GlobalAudioPlayer)