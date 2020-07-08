import React, { useContext } from 'react';
import ValueContext from './valueContext.js';

function Child(){
    
    let value = useContext(ValueContext);
    return (
    <div>
        <h2>Child Component number is: {value}</h2>
    </div>
    );
}

export default Child;