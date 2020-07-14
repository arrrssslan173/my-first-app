import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount < 0 ? '-' : '+';

    return(
        <div>
                <li className='transac'><button onClick={() => deleteTransaction(transaction.id)} className='delete-btn' >x</button>
                <span> {transaction.description} </span>
                <span> {sign}${Math.abs(transaction.transactionAmount)}  </span>
                
            </li>
            
        </div>          
    )
}