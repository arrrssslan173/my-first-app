import React, { useContext } from "react";

// import global context
import { GlobalContext } from './GlobalState';

// import transaction
import { Transaction } from './Transaction'

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    return(
        <div> 
                <h3 className='header'>Transaction History</h3>
                <hr />
                <ul className='trans-history'>
                    {transactions.map(transaction => (
                            <Transaction transaction={transaction} />
                        )
                    )}
                </ul>
            </div>
    );
}

export default TransactionHistory;