import React, { createContext, useReducer } from 'react';

// import reducer
import AppReducer from './AppReducer'

// creating initial state
const initialState = {
    transaction: [
        {id: 1, desc: 'Salary', amount: 1000},
        {id: 2, desc: 'Rent', amount: -100},
        {id: 3, desc: 'Gas', amount: -100}
    ]
}

// creating global context
export const GlobalContext = createContext(initialState);

// creating a provider to global context
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}