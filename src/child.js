import React from 'react';
import Parent from './parent.js';

function Child(props){
    
    return (
    <div>
        <h2>Child Component number is: {props.num}</h2>
    </div>
    );
}

export default Child;