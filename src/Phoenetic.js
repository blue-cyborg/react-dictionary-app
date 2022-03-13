import React from "react";

export default function Phoenetic(props) {
    return (
        <div className="Phoenetic">
            <a href={props.phoenetic.audio} target="_blank" rel="noreferrer">
                Listen
            </a>
            <br />
            {props.phoenetic.text}
        </div>
    );
}