import React, { useState } from 'react';


function Light () {
    
    let [isLit, setLit] = useState(false);
    let [color1, setColor1] = useState(0);
    
    function updateLit(){
        setLit(!isLit);     
    }

    function color(){
        setColor1(!color1);
    }

    return (
    <div>
        <h1>The Room is:  {isLit ? 'Lit' : 'Dark'} </h1>
        <h1>The Bulb Color is: {color1 ? 'Yellow' : 'White'} </h1>


        <button className='btn2' onClick={updateLit}>Switch Light</button>
        <br />
        <button className='btn2' onClick={color}>Light Color</button>
    </div>
    );
}

export default Light;