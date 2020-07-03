import React, { useState } from 'react';
import './App.css';

function Lights () {

    let [isLit, setLit] = useState(false);
    
    return (
    <div className={'room ' +(isLit?'lit':'dark')}>

        <h1>The Room is:  <u>{isLit ? 'Lit' : 'Dark'}</u> and the Bulb is <u>{isLit ? 'On' : 'Off'}</u> </h1>

        <br />
        
        <button className='btn2' 
            onClick={
                ()=>
                setLit(!isLit)
            }>
            Switch Light
        </button>


        <h1>The Room is:  <u>{isLit ? 'Lit' : 'Dark'}</u> and the Bulb is <u>{isLit ? 'On' : 'Off'}</u> </h1>

        <br />
        
        <button className='btn2' 
            onClick={
                ()=>
                setLit(!isLit)
            }>
            Switch Light
        </button>
    </div>
    );
}

export default Lights;