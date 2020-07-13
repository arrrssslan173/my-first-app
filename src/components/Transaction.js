import React from 'react'

export const Transaction = ({ transaction }) => {
    return(
        <li className='transac'>
            <span> {transaction.description} </span>
            <span> {transaction.transactionAmount}  </span>
        </li>
    )
}