import React from 'react';
import './App.css';

// import global provider
import { GlobalProvider } from './components/GlobalState';

// importing components
import Header from './components/header.js';
import Balance from './components/balance.js';
import AccountSummary from './components/accountSummary.js';
import TransactionHistory from './components/transactionHistory.js';
import AddTransaction from './components/addTransactions.js';




function App() {
  return (
    <GlobalProvider>
      <div  className='container' >  
          <Header />
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
