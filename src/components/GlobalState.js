import React, { createContext, useReducer } from 'react';

// import reducer
import AppReducer from './AppReducer'

// creating initial state
const initialState = {
    transactions: []
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

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}