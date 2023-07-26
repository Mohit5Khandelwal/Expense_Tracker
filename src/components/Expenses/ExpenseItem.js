import React from 'react';    

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// Component in a react is a java script function 

// In react js we have one root element to return the JSX code 

// Data is not hard coded it would be dynamic come 

// {} run small javascript code 

// In props parameter we holding all the values of parameter 
// props would be like an key value pair 

function ExpenseItem( props) {

    // using useState() we can update or changes in the components 
    // useState() will return array [] from which we update 

    // Another way to pass data props.expense.title
    // using toLocaleString () we get human readable date format 


    return (
    <li>
        <Card className = "expense-item"> 

            {/* // Here we are passing date as parameter in this function  */}
            <ExpenseDate date = { props.date } />

            <div className = "expense-item__description">
                <h2> { props.title } </h2>
                <div className = "expense-item__price">
                    $ { props.amount }
                </div>
            </div>
        </Card>
    </li>

)};

export default ExpenseItem;