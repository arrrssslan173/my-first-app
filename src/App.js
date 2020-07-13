import React from 'react';
import './App.css';

// importing components
import Header from './components/header.js';
import Balance from './components/balance.js';
import AccountSummary from './components/accountSummary.js';
import TransactionHistory from './components/transactionHistory.js';
import AddTransaction from './components/addTransactions.js';

function App() {
  return (
      <div  className='container' >  
          <Header />
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
    </div>
  );
}

export default App;
