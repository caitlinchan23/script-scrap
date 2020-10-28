import React, { useState, useContext } from 'react';
import {ScriptContext} from './scriptContext.jsx';

const useInput = init => {
  const [value, setValue] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  }
  return [value, onChange];
}

const AddScript = () => {
  const [ title, titleOnChange ] = useInput('');
  const [ writer, writerOnChange ] = useInput('');
  const [ feature, featureOnChange ] = useInput('');
  const [ score, scoreOnChange ] = useInput('');
  
  const saveScript = () => {
    const body = {
      title, 
      writer,
      feature,
      score
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

  return (
    <form onSubmit={saveScript}>
      <input type="text" title="title" value={title} onChange={titleOnChange} />
      <input type="text" by="by" value={writer} onChange={writerOnChange} />
      <input type="text" feature="feature" value={feature} onChange={featureOnChange} />
      <input type="text" score="score" value={score} onChange={scoreOnChange} />
      <button>Submit</button>
    </form>
  )

}

export default AddScript;