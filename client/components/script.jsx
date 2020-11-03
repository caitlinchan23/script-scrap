import React from 'react';


const Script = (props) => {
    let score;
    let color;
    let textColor;
    if (props.score >= 17) {
      score = 'Strong Consider';
      color = 'rgb(116,230,116)';
      textColor = 'darkgreen';
    } else if (props.score >= 12) {
      score = 'Weak Consider';
      color = 'rgb(157, 252, 193)';
      textColor = 'rgb(9, 122, 9)';
    } else if (props.score >= 8) {
      score = 'Weak Pass';
      color = 'pink';
      textColor = 'rgb(184,29,56)';
    } else if (props.score <= 7) {
      score = 'Strong Pass'
      color = 'rgb(253,89,115)';
      textColor = 'rgb(109,9,25)';
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
      <button style={{color: textColor}} className="delete-Btn" id={props.title} onClick={props.onClick}>x</button>
    </div>
  )
}

export default Script;