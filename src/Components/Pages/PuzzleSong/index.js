import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import CastitasSong  from '../../Elements/Sounds/Castitas.mp3';
import TemperantiaSong from '../../Elements/Sounds/Temperantia.mp3';
import HumilitasSong from '../../Elements/Sounds/Humilitas.mp3';
import CaritasSong from '../../Elements/Sounds/Caritas.mp3';
import HumanitasSong from '../../Elements/Sounds/Outro.mp3';
import IndustriaSong from '../../Elements/Sounds/Industria.mp3';

const PuzzleSong = (props) => {
    let puzzleSong;
    if (props.puzzle === "castitas") {
        puzzleSong = <ReactAudioPlayer src={CastitasSong} autoPlay loop />
    }
    else if (props.puzzle === "temperantia") {
        puzzleSong = <ReactAudioPlayer src={TemperantiaSong} autoPlay loop />
    }
    else if (props.puzzle === "industria") {
        puzzleSong = <ReactAudioPlayer src={IndustriaSong} autoPlay loop />
    }
    else if (props.puzzle === "patientia") {
        puzzleSong = <div id="empty-patientia-song-div"/>
    }
    else if (props.puzzle === "humilitas") {
        puzzleSong = <ReactAudioPlayer src={HumilitasSong} autoPlay loop />
    }
    else if (props.puzzle === "caritas") {
        puzzleSong = <ReactAudioPlayer src={CaritasSong} autoPlay loop />
    }
    else if (props.puzzle === "humanitas") {
        puzzleSong = <ReactAudioPlayer src={HumanitasSong} autoPlay loop />
    }
    return (
        <div>
            {puzzleSong}
        </div>
    )
    
}

export default PuzzleSong;