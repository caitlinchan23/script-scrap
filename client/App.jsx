/* react entry point that connects rest of react components */

import React, { Component } from 'react';
import ScriptsContainer from './components/allScriptsContainer.jsx';
import { ScriptProvider } from './components/scriptContext.jsx'
import AddScript from './components/addScript.jsx'

class App extends Component {
  
  render() {
  return (
    <ScriptProvider>
      <div>
        <AddScript />
        <ScriptsContainer />
      </div>
    </ScriptProvider>
    );
  }
}

export default App;