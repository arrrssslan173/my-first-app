import React from 'react';
import Child from './child.js';

function Parent(props){
    return(
    <div>
        <h1>Parent Component</h1>
        <Child num={props.num}/>
    </div>
    );
}

export default Parent;