import React from "react";

function TransactionHistory() {
    const transactions = [
        {desc: 'Salary', amount: '1000'},
        {desc: 'Rent', amount: '-100'},
        {desc: 'Gas', amount: '-100'}
    ]
    return(
        <div> 
                <h3 className='header'>Transaction History</h3>
                <hr />
                <ul className='trans-history'>
                    {transactions.map((transObj,ind)=>
                    {
                        return(
                            <div className='transac'>
                                <li>
                                    <span>{transObj.desc} </span>
                                    <span>{transObj.amount} </span>
                                </li>
                            </div>
                        )
                    })}
                    
                </ul>
            
        </div>
    );
}

export default TransactionHistory;