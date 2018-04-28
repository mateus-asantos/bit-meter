import React, { Component } from 'react';
import { MyChart } from './components/chart'
import { getData } from './components/get'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [0] }
    this.getDataRequest= this.getDataRequest.bind(this)
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

    let join = this.state.data.concat(info)
    this.setState({ data: join })

    console.log('state')
    console.log(this.state)
  };


  render() {
    return (
      <div className="App">
        <MyChart data={this.state.data} />
      </div>
    );
  }
}

export default App;
