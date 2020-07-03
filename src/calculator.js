import React, { useState } from 'react';

function Calculator() {
    
    let [number, setNumber] = useState(0)
  
    return (
      <div>
        <h1>Calculator</h1>
        <h1>The Primary Number is = {number}</h1>
        <button className="btn" onClick={
          ()=> setNumber(number+1)
          }>
            Add One
        </button>
        
        <button className="btn" onClick={
          ()=> setNumber(number+2)
          }>
            Add Two
        </button>
  
        <button className="btn" onClick={
          ()=> setNumber(number+3)
          }>
            Add Three
        </button>
  
        <button className="btn" onClick={
          ()=> setNumber(number+4)
          }>
            Add Four
        </button>
        
        <button className="btn" onClick={
          ()=> setNumber(number+5)
          }>
            Add Five
        </button>
  
        <button className="btn" onClick={
          ()=> setNumber(number+6)
          }>
            Add Six
        </button>
  
        <button className="btn" onClick={
          ()=> setNumber(number+7)
          }>
            Add Seven
        </button>
        
        <button className="btn" onClick={
          ()=> setNumber(number+8)
          }>
            Add Eight
        </button>
  
        <button className="btn" onClick={
          ()=> setNumber(number+9)
          }>
            Add Nine
        </button>
  
        <button className="btn" onClick={
          ()=> setNumber(number+0)
          }>
            Add Zero
        </button>
  
  
        <button className="btn" onClick={
          ()=> setNumber(number+parseInt(prompt('Enter Custom Number:')))
          }>
            Add Custom #
        </button>
    </div>
    );
}

export default Calculator;