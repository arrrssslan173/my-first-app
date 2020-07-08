import React, { useState }  from 'react';
import './App.css';
import Lights from './lights.js';
import Calculator from './calculator.js';
import Parent from './parent.js'

function App(){
    let [number, setNumber] = useState(1
      );
    return (
    <div>
      <Calculator />
      <Lights />
      <hr />
      <Parent num={number}/>
      <button onClick={()=> {setNumber(++number)}}>Update Number</button>
    </div>
  );
}
    

export default App;
