import React, { useState, useContext } from "react";
import { GlobalContext } from './GlobalState'

function AddTransaction() {

    const [description, setDescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
    }

    return(
        <div className='header'>
            <h4>Add Transaction</h4>
            <form onSubmit={onSubmit} >
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
            </form>
        </div>
    );
}

export default AddTransaction;