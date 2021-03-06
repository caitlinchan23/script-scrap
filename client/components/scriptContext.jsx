import React, { useState, createContext } from "react";

export const ScriptContext = createContext();

// TODO: use redux for state management

export const ScriptProvider = (props) => {
  const [scripts, setScripts] = useState([]);

  fetch('/api')
  .then(res => res.json())
  .then(info => {
    setScripts(info);
  })
  .catch(err => console.log(err));

  return (
    <ScriptContext.Provider value={[scripts, setScripts]}>
      {props.children}
    </ScriptContext.Provider>
  )
}