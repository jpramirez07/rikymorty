import './App.css';
import React from 'react';
import Location from './component/Location';

function App() {

  return (
    <div className="App">
      <div className='banner'></div>
      <div className='container'>
        <h1>Rick and Morty wiki</h1>
      </div>
      < Location />
    </div>
  );
}

export default App;
