import React from 'react';
import './App.css';
import Lights from './lights.js';
import Calculator from './calculator.js';
import Parent from './parent.js';
import ValueContext from './valueContext.js';

function App(){
    let val = 37;
    //let [number, setNumber] = useState(1);
    return (
    
      <ValueContext.Provider value={val}>
        <div>
        <Calculator />
        <Lights />
        <hr />
        <Parent />
        </div>
      </ValueContext.Provider>
    
  );
}
    

export default App;
