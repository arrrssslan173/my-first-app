import React, { useState } from 'react';


function Light () {
    
    let [isLit, setLit] = useState(false)

    return (
    <div>
        <h1>The Room is:  {isLit ? 'Lit' : 'Dark'} </h1>
    </div>
    );
}

export default Light;