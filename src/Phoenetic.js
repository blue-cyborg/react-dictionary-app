import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./Phoenetic.css"


export default function Phoenetic(props) {
    return (
        <div className="Phoenetic">
            <p>🔊Listen</p>
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