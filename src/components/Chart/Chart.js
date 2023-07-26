import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

    // storing array of num 
    const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value ); // array we get 
    const totalMaximum = Math.max(...dataPointValues ); // pull out all the values come in list 

    return (
        <div className="chart">
            {/* Here we dynamically creating a chart bar  */}
            {props.dataPoints.map( (dataPoint) => ( 
                <ChartBar 
                
                    key       =  { dataPoint.label }
                    value     = { dataPoint.value }
                    maxValue  = { totalMaximum }
                    label     = { dataPoint.label }

                />
            ) )}
        </div>
    );
};

export default Chart;