import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount < 0 ? '-' : '+';

    return(
        <li className='transac'>
            <span> {transaction.description} </span>
            <span> {sign}${Math.abs(transaction.transactionAmount)}  </span>
            <button onClick={() => deleteTransaction(transaction.id)} >x</button>
        </li>
    )
}