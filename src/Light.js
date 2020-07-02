import React, { useState } from 'react';


function Light () {
    
    let [isLit, setLit] = useState(false)

    function updateLit(){
        setLit(!isLit);     
    }
    return (
    <div>
        <h1>The Room is:  {isLit ? 'Lit' : 'Dark'} </h1>

        <button className='btn2' onClick={updateLit}>Switch Light</button>
    </div>
    );
}

export default Light;