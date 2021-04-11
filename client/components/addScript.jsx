import React, { useState, useContext } from 'react';
import {ScriptContext} from './scriptContext.jsx';

const useInput = init => {
  const [value, setValue] = useState(init);
  const onChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  }
  return [value, onChange];
}

// TODO: Fix this!!!

const AddScript = () => {
  const [ title, titleOnChange ] = useInput('');
  const [ writer, writerOnChange ] = useInput('');
  const [ feature, featureOnChange ] = useInput('');
  const [ story_idea, storyOnChange ] = useInput('');
  const [ plot_structure, plotOnChange ] = useInput('');
  const [ characters, charsOnChange ] = useInput('');
  const [ dialogue, dialOnChange ] = useInput('');
  const [ setting_visual, settingOnChange ] = useInput('');
  // const [ score, scoreOnChange ] = useInput('');

  const addScore = (...args) => {
    let sum = 0;
    args.forEach(el => {
      sum += Number(el);
    })
    return sum;
  }
  
  const saveScript = () => {
    const body = {
      title: title.toUpperCase(), 
      writer,
      feature,
      story_idea, 
      plot_structure, 
      characters, 
      dialogue, 
      setting_visual, 
      score: addScore(story_idea, plot_structure, characters, dialogue, setting_visual)
    }
    fetch('/api/add', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(body)
    }) 
    .then(resp => resp.json())
  }

  /* Story Idea: Excellent, good, fair, poor 
      Plot/Structure: Execellent, good, fair, poor
      Characters: Excellent, good, fair, poor 
      Dialogue: Excellent, good, fair, poor
      Setting/Visual: Excellent, good, fair, poor */
  // TODO: create resusable selects
  return (
    <form id="add-script" onSubmit={saveScript}>
      <input id="title-input" type="text" placeholder="  Title" value={title} onChange={titleOnChange} />
      <input id="writer-input" type="text" placeholder="  Writer" value={writer} onChange={writerOnChange} />
      <select value={feature} onChange={featureOnChange}>
        <option>Type</option>
        <option value="Pilot">Pilot</option>
        <option value="Feature">Feature</option>
      </select>
      <select value={story_idea} onChange={storyOnChange}>
        <option>Story Idea</option>
        <option value="4">Excellent</option>
        <option value="3">Good</option>
        <option value="2">Fair</option>
        <option value="1">Poor</option>
      </select>
      <select value={plot_structure} onChange={plotOnChange}>
        <option>Plot/Structure</option>
        <option value="4">Excellent</option>
        <option value="3">Good</option>
        <option value="2">Fair</option>
        <option value="1">Poor</option>
      </select>
      <select value={characters} onChange={charsOnChange}>
        <option>Characters</option>
        <option value="4">Excellent</option>
        <option value="3">Good</option>
        <option value="2">Fair</option>
        <option value="1">Poor</option>
      </select>
      <select value={dialogue} onChange={dialOnChange}>
        <option>Dialogue</option>
        <option value="4">Excellent</option>
        <option value="3">Good</option>
        <option value="2">Fair</option>
        <option value="1">Poor</option>
      </select>
      <select value={setting_visual} onChange={settingOnChange}>
        <option>Setting/Visual</option>
        <option value="4">Excellent</option>
        <option value="3">Good</option>
        <option value="2">Fair</option>
        <option value="1">Poor</option>
      </select>
      <button id="add-button"><strong>+</strong></button>
    </form>
  )
}

export default AddScript;