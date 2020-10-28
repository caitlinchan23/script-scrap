import React from 'react';

const Script = ({ title, writer, feature, score }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>by {writer}</h3>
      <h3>{feature}</h3>
      <h3>Score: {score}</h3>
    </div>
  )
}

export default Script;