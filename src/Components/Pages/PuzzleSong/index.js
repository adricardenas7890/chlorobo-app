import React from 'react';
import CastitasSong  from '../../Elements/Sounds/Castitas.mp3';
import TemperantiaSong from '../../Elements/Sounds/Temperantia.mp3';
import HumilitasSong from '../../Elements/Sounds/Humilitas.mp3';
import CaritasSong from '../../Elements/Sounds/Caritas.mp3';
import HumanitasSong from '../../Elements/Sounds/Outro.mp3';
import IndustriaSong from '../../Elements/Sounds/Industria.mp3';
import GlobalAudioPlayer from '../../Elements/AudioPlayer/AudioPlayer';
const PuzzleSong = (props) => {
    let puzzleSong;
    if (props.puzzle === "castitas") {
        puzzleSong = <GlobalAudioPlayer songName={CastitasSong}  />
    }
    else if (props.puzzle === "temperantia") {
        puzzleSong = <GlobalAudioPlayer songName={TemperantiaSong} />
    }
    else if (props.puzzle === "industria") {
        puzzleSong = <GlobalAudioPlayer songName={IndustriaSong} />
    }
    else if (props.puzzle === "patientia") {
        puzzleSong = <div id="empty-patientia-song-div"/>
    }
    else if (props.puzzle === "humilitas") {
        puzzleSong = <GlobalAudioPlayer songName={HumilitasSong} />
    }
    else if (props.puzzle === "caritas") {
        puzzleSong = <GlobalAudioPlayer songName={CaritasSong} />
    }
    else if (props.puzzle === "humanitas") {
        puzzleSong = <GlobalAudioPlayer songName={HumanitasSong} />
    }
    return (
        <div>
            {puzzleSong}
        </div>
    )
    
}

export default PuzzleSong;