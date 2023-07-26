import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React , { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from './ExpensesChart';

// we can store jsx content in variable also 

function Expenses( props ) {

    const[ filteredYear, setFilteredYear ] = useState( '2020' );
    //const[ filterInfoText, setFilterInfoText ] = useState( '2019, 2021 & 2022' );

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear( selectedYear );
    };

    // using filter method we filter data in the array !!!   ***Noted 
    const filteredExpenses = props.items.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;

    });

    return (

        <Card className = "expenses">

            <ExpensesFilter selected = { filteredYear } onChangeFilter = { filterChangedHandler } />

            <ExpenseChart  expenses = { filteredExpenses } />

            <ExpensesList items = { filteredExpenses } />

        </Card>

    );
}

export default Expenses;

    // Here we dynamically render the data in list 

    //         Adding some conditions  

    //         filteredExpenses.length === 0 && <p>No Expense Found. </p> 

    //         filteredExpenses.length > 0 && filteredExpenses.map( (expense) => (
    //             <ExpenseItem 

    //                 key    = {expense.id} // Unique identifier
    //                 title  =  { expense.title }
    //                 amount = { expense.amount }
    //                 date   = { expense.date }

    //             />

    //         ))
            
