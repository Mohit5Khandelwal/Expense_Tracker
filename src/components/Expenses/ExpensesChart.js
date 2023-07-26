import React from 'react';
import Chart from '../Chart/Chart';

// In btwn child move from one follder to another we use ..

const ExpenseChart = (props) => {

    // creating an array which stores my datapoints 
    const chartDataPoints = [

        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of props.expenses) {  // of is used for array is for object 

        const expenseMonth = expense.date.getMonth(); // getting month we play as index in array 
        chartDataPoints[ expenseMonth ].value += expense.amount;
    }

    // passing datapoints in a chart 

    return (

        <Chart  dataPoints={ chartDataPoints } />

    );

}

export default ExpenseChart;