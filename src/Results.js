import React from "react";
import Meaning from "./Meaning";
import Phoenetic from "./Phoenetic";
import "./Results";

export default function Results(props) {
    if (props.results) {
      return (
      <div className="Results">
          <section>
          <h3>{props.results.word}</h3>
            {props.results.phonetics.map(function (phoenetic, index) {
            return (
              <div key={index}>
                <Phoenetic phoenetic={phoenetic} />
              </div>
            );
          })}
          </section>
          {props.results.meanings.map(function(meaning, index) {
              return (
              <section key={index}>
                  <Meaning meaning={meaning} />
              </section> 
              );
          })}
      </div>
    );
    } else {
        return null;
    }
}