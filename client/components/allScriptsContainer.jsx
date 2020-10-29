import React, { useState, useContext } from 'react';

import Script from './script.jsx';
import { ScriptContext } from './scriptContext.jsx';

const ScriptsContainer = () => {
  const [scripts, setScripts] = useContext(ScriptContext);
  scripts.sort((a, b) => b.score - a.score);

  const deleteScript = (event) => {
    // console.log(event.target.id)
    fetch(`/api/delete/${event.target.id}`, {
      method: 'DELETE'
    });
  }

  return (
    <div id="script-container">
      {scripts.map((script) => (
        <span className="script">
        <Script title={script.title} writer={script.writer} feature={script.feature} score={script.score} onClick={(e) => deleteScript(e)}/>
        </span>
      ))}
    </div>
  )
}

export default ScriptsContainer;