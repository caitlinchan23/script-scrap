import { text } from 'body-parser';
import React from 'react';


const Script = (props) => {
    let score;
    let color;
    let textColor;
    if (props.score >= 17) {
      score = 'Strong Consider';
      color = 'palegreen';
      textColor = 'mediumseagreen';
    } else if (props.score >= 12) {
      score = 'Weak Consider';
      color = 'aquamarine';
      textColor = 'mediumseagreen';
    } else if (props.score >= 8) {
      score = 'Weak Pass';
      color = 'pink';
      textColor = 'crimson';
    } else if (props.score <= 7) {
      score = 'Strong Pass'
      color = 'crimson';
      textColor = 'darkred';
    };
  return (
    <div className="script-detail" style={{
      backgroundColor: color,
      borderRadius: 5,
    }}>
      <h2>{props.title}</h2>
      <h3>{props.writer}</h3>
      <br></br>
      <h5>{props.feature}</h5>
      <h4 style={{color: textColor}}>{score}</h4>
      <br></br>
      <button className="delete-Btn" id={props.title} onClick={props.onClick}>x</button>
    </div>
  )
}

export default Script;