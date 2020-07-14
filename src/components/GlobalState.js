import React, { createContext, useReducer } from 'react';

// import reducer
import AppReducer from './AppReducer'

// creating initial state
const initialState = {
    transactions: [
        {id: 1, description: 'Salary', transactionAmount: 1000 },
        {id: 2, description: 'Rent', transactionAmount: -100 },
        {id: 3, description: 'Gas', transactionAmount: -100 },
        {id: 4, description: 'Perfume', transactionAmount: -200 },
        {id: 5, description: 'Car', transactionAmount: 2000 }
    ]
}

// creating global context
export const GlobalContext = createContext(initialState);

// creating a provider to global context
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    // actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}