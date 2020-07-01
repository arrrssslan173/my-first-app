import React, {useState} from 'react';
import './App.css';


function App() {

  let [number, setNumber] = useState(0)

  return (
    <div>
      <h1>Calculator</h1>
      <h1>The Primary Number is = {number}</h1>
      <button class="btn" onClick={
        ()=> setNumber(number+1)
        }>
          Add One
      </button>
      
      <button class="btn" onClick={
        ()=> setNumber(number+2)
        }>
          Add Two
      </button>

      <button class="btn" onClick={
        ()=> setNumber(number+3)
        }>
          Add Three
      </button>

      <button class="btn" onClick={
        ()=> setNumber(number+4)
        }>
          Add Four
      </button>
      
      <button class="btn" onClick={
        ()=> setNumber(number+5)
        }>
          Add Five
      </button>

      <button class="btn" onClick={
        ()=> setNumber(number+6)
        }>
          Add Six
      </button>

      <button class="btn" onClick={
        ()=> setNumber(number+7)
        }>
          Add Seven
      </button>
      
      <button class="btn" onClick={
        ()=> setNumber(number+8)
        }>
          Add Eight
      </button>

      <button class="btn" onClick={
        ()=> setNumber(number+9)
        }>
          Add Nine
      </button>

      <button class="btn" onClick={
        ()=> setNumber(number+0)
        }>
          Add Zero
      </button>


      <button class="btn" onClick={
        ()=> setNumber(number+parseInt(prompt('Enter Custom Number:')))
        }>
          Add Custom Number
      </button>

    </div>
  );
}

export default App;
