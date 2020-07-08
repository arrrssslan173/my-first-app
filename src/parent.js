import React from 'react';
import Child from './child.js';

function Parent(){
    return(
    <div>
        <h1>Parent Component</h1>
        <Child />
    </div>
    );
}

export default Parent;