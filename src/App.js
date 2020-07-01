import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={
        ()=> alert('First Button Pressed')
        }>
          First Button
      </button>
      
      <button onClick={
        ()=> alert('Second Button Pressed')
        }>
          Second Button
      </button>

      <button onClick={
        ()=> alert('Third Button Pressed')
        }>
          Third Button
      </button>
    </div>
  );
}

export default App;
