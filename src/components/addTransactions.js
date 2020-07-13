import React, { useState } from "react";

function AddTransaction() {

    const [description, setDescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();


    return(
        <div className='header'>
            <h4>Add Transaction</h4>
            <div className='lbl'>
                <label>Description</label>
                    <input className='input' 
                    placeholder='Detail of Transaction' 
                    type='text' required
                    value={description}
                    onChange={(e) => setDescription(e.target.value) }
                    />

                <label>Amount</label>
                    <input className='input' 
                    placeholder='Enter Amount' 
                    type='number' required
                    value={transactionAmount} 
                    onChange={(e) => setTransactionAmount(e.target.value) }
                    />
            </div>
            <br /><br />
            <button className='btn' >Add Transaction</button>
        </div>
    );
}

export default AddTransaction;