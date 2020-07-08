import React from 'react';
import './App.css';
import Lights from './lights.js';
import Calculator from './calculator.js';
import Parent from './parent.js'
import Child from './child.js'

function App(){
    return (
    <div>
      <Calculator />
      <Lights />
      <hr />
      <Parent />
      <Child />
    </div>
  );
}
    

export default App;
