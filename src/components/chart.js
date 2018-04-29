import React from 'react';
import { Line } from 'react-chartjs-2';
import './component.css';


export const Chart = (props)=> {


    const chartData = {
        labels: props.time,
        datasets: [
            {
                label: "VALUES",
                fill: false,
                fillColor: "rgba(0,0,0,0.0)",
                borderColor: "rgb(0, 251, 29)",
                pointBackgroundColor: "rgb(0, 251, 29)",
                pointBorderColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: props.data
            }

        ]
    };

    const chartOptions = {
        belzierCurve: false
    };

    console.log('chartData')
    console.log(chartData)

    return (
        <div id='Wrapper'>
            <div>
                <Line data={chartData} options={chartOptions} />
            </div>
            <div className='Graph-rect'>
                <canvas id='myChart' ></canvas>
            </div>
        </div>
    )
}
