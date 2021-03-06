import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import './Phonetic.css';


export default function Phoenetic(props) {
    if (props.phoenetic.audio >= 0) {
    return null;
} else {
    return (
        <div className="Phoenetic">
            <p className="Listen">🔊Listen</p>
            <ReactAudioPlayer
            src={props.phoenetic.audio}
            controls
            />              
            <br />
            {props.phoenetic.text}
        </div>
    );
}
}