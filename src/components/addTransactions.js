import React from "react";

function AddTransaction() {
    return(
        <div className='header'>
            <h4>Add Transaction</h4>
            <div className='lbl'>
                <label>Description</label>
                    <input className='input' placeholder='Detail of Transaction' type='text' required />
                <label>Amount</label>
                    <input className='input' placeholder='Enter Amount' type='number' required />
            </div>
            <br /><br />
            <button className='btn' >Add Transaction</button>
        </div>
    );
}

export default AddTransaction;