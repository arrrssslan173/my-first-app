import React, { useContext } from "react";
import { GlobalContext } from './GlobalState'

function AccountSummary() {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.transactionAmount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return(
        <div className='summary-container'>
            
            <span id='green'><h3>INCOME<br />${income}</h3></span> <hr/>
            
            <span id='red'><h3>EXPENSE <br />${expense}</h3></span>
        </div>
    );
}

export default AccountSummary;