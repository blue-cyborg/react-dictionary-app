import React from "react";
import Meaning from "./Meaning";
import Phoenetic from "./Phoenetic";

export default function Results(props) {
    if (props.results) {
      return (
      <div className="Results">
          <h3>{props.results.word}</h3>
            {props.results.phonetics.map(function (phoenetic, index) {
            return (
              <div key={index}>
                <Phoenetic phoenetic={phoenetic} />
              </div>
            );
          })}
          {props.results.meanings.map(function(meaning, index) {
              return (
              <div key={index}>
                  <Meaning meaning={meaning} />
              </div> 
              );
          })}
      </div>
    );
    } else {
        return null;
    }
}