import React, { useContext } from "react";
import { GlobalContext } from './GlobalState';

export const Balance = () => {
    
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.transactionAmount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    return(
        <div  className='bal'>
            <h4>
                Balance ${total}
            </h4>
        </div>
    );
}

export default Balance;