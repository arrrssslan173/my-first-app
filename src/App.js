import React, {useState} from 'react';
import './App.css';


function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={
        ()=> alert('Button Pressed')
        }>
          Button
      </button>
      <light />
    </div>
  );
}

export default App;
