import React, {useEffect} from 'react';
import { connect } from 'react-redux';


const GlobalSoundPlayer = ({ sound, soundOn }) => {
    useEffect = () => {
        if (soundOn) {
            var audioCorrect = new Audio(sound);
            audioCorrect.play();
        }
    }

    return (
        <>
        </>
    )
}


// Connect to store and couple Layout component with currentViewPage store
const getAudioSettings = (appState) => {
    return ({
        music: appState.currentAudioSettings.music,
        soundOn: appState.currentAudioSettings.sounds,
    })

}

export default connect(getAudioSettings)(GlobalSoundPlayer)