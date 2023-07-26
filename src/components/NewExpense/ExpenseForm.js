import React , { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [ enteredTitle, setEnteredTitle ] = useState( ' ' );
    const [ enteredDate, setEnteredDate ] = useState( ' ' );
    const [ enteredAmount, setEnteredAmount ] = useState( ' ' );

    // Another way to update state 
    // const [ userInput, setUserInput ] = useState( {

    //     enteredTitle: '',
    //     enteredDate: '',
    //     enteredAmount: ' '
    // });



    const dateChangeHandler = (event) => {
        // Here we get input data in event object 
        setEnteredDate( event.target.value );

        // setUserInput( {

        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    const titleChangeHandler = (event) => {
        
        setEnteredTitle( event.target.value );

        // setUserInput( {

        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // Good way to update state -->>
        // setUserInput( (prevState) => {
            
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     }
        // });
    };

    const amountChangeHandler = (event) => { 

        setEnteredAmount( event.target.value );

        // setUserInput( {

        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const submitHandler = (event) => {

        // sending the request to the page
        event.preventDefault();

        const expenseData = {

            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData( expenseData );

        setEnteredAmount( '' );
        setEnteredDate( '' );
        setEnteredTitle( '' );

    };

    return (

            <form onSubmit={ submitHandler } >

                <div className = 'new-expense__controls'>

                    <div className='new-expense__control'>
                        <label> Title</label>
                        <input type = 'text' onChange={ titleChangeHandler } value = { enteredTitle } />
                    </div>

                    <div className='new-expense__control'>
                        <label> Amount </label>
                        <input type = 'number' min="0.01" step="0.01" onChange={ amountChangeHandler } value = { enteredAmount } />
                    </div>

                    <div className='new-expense__control'>
                        <label> Date </label>
                        <input type = 'Date' onChange={ dateChangeHandler } min="2019-01-01" max = "2023-12-31" value={ enteredDate } />
                    </div>

                </div>

                <div className='new-expense__actions'>
                    <button type  = 'button' onClick = { props.onCancelEvent } > Cancel </button>
                    <button type  = 'submit'> Add Expense </button>
                </div>


            </form>
        
    );
}

export default ExpenseForm;