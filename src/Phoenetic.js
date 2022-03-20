import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import './Phonetic.css';


export default function Phoenetic(props) {
    return (
        <div className="Phoenetic">
            <p className="Listen">🔊Listen</p>
            <ReactAudioPlayer
            src={props.phoenetic.audio}
            autoPlay
            controls
            />              
            <br />
            {props.phoenetic.text}
        </div>
    );
}