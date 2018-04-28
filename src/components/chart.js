import React from 'react';
import { Line } from 'react-chartjs-2';
const initialChartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
        {
            label: "VALUES",
            fillColor: "rgba(0,0,0,0.0)",
            strokeColor: "rgb(0, 251, 29)",
            pointColor: "rgb(0, 251, 29)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
        }

    ]
};

const chartOptions = {
    belzierCurve: false
};

export class MyChart extends React.Component {
    
    render() {
        const chartData = {
            ...initialChartData,
            data: this.props.data
        }
        //console.log(this.props.data)

        return (
            <div>
                <div>
                    <Line data={chartData} options={chartOptions} width={600} height={250} />
                </div>
                <div className='Graph-rect'>
                    <canvas id='myChart' width={400} height={400}></canvas>
                </div>
            </div>
        )
    }
}