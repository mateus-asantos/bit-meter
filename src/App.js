import React, { Component } from 'react';
import { Chart } from './components/chart'
import { getData } from './components/get'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            time: []
        }
        this.getDataRequest = this.getDataRequest.bind(this)
    }

    componentDidMount() {
        setInterval(this.getDataRequest, 50000);
    };


    async getDataRequest() {

        let databtc = await getData;
        console.log('databtc')
        console.log(databtc);
        //console.log(databtc.BRL.buy);

        let info = databtc.data.BRL.buy
        console.log('info')
        console.log(info)

        let time = new Date();
        let currentTime = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();

        let joinTime = this.state.time.concat(currentTime)

        let join = this.state.data.concat(info)

        this.setState({
            data: join,
            time: joinTime,
            lastData: info,
        })



        console.log('state')
        console.log(this.state)
    };


    render() {
        return (
            <div className="App">
                <Chart data={this.state.data} time={this.state.time} />
                <br />
            </div>
        );
    }
}

export default App;
