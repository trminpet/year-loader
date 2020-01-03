import React from 'react';
import './App.css';

import Loader from './loader';


function App() {
  return (
    <div className="App">
      <h1>Days of {new Date().getFullYear()}</h1>
      <Loader/>
    </div>
  );
}

export default App;
