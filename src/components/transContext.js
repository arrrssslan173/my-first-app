import { createContext } from 'react';

const transactions = [
    {desc: 'Salary', amount: '1000'},
    {desc: 'Rent', amount: '-100'},
    {desc: 'Gas', amount: '-100'}
]

export const TransContext = createContext{Transactions};