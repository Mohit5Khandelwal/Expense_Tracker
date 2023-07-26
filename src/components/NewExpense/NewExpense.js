import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

// parameters name could be any ...

// Here we pass our data from child --->> to parent App 


function NewExpense( props) {

    // Define button states
    const[ isEditing , setIsEditing ] = useState( false );

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

        };

        props.onAddExpense( expenseData );

        setIsEditing( false );

    };

    

    const startEditingHandler = () => {
        setIsEditing( true );
    }

    const cancelEventHandler = () => {
        setIsEditing( false );
    }


    return ( 
        
        <div className = "new-expense">

            { !isEditing && <button onClick = { startEditingHandler } > Add New Expenses </button> }
            {/* parameter for receiving the input form data "OnSaveExpenseData" */}
            {/* <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}  /> */}
            { isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}  onCancelEvent = { cancelEventHandler } /> }
        </div>
    );
}

export default NewExpense;