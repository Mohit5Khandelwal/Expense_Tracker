import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';
// Onece the components is imported we can use it like an html element 
// Component name must start with uppcase characters

// we can set props for our custom components

function App() {

  // creating an object array 
  const Dummy_Expenses = [
    { 
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7 , 24 ),
    }, 
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2 , 12 ),

    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.49,
      date: new Date(2021, 2 , 28 ),

    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.49,
      date: new Date(2019, 2 , 28 ),

    },

  ];

  const addExpenseHandler = (expense) => {
      console.log( "In App.js" );
      //setExpenses( [ expense, ...expenses ] );
      // Another way to update 
      setExpenses( (prevExpenses) => {
        return [ expense, ...prevExpenses ];
      })

  };

  const[expenses, setExpenses] = useState( Dummy_Expenses );


  return (
    <div>
      <NewExpense onAddExpense = { addExpenseHandler } />
      <Expenses items = { expenses } />
    </div>
  );
}

export default App;
