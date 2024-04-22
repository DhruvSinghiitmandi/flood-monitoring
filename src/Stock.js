import React from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios'
class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    }
  }

  componentDidMount() {
    this.fetchStock();
  }
  
  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = 'HGJWFG4N8AQ66ICD';
    let StockSymbol = 'FB';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    axios
    .get('http://localhost:3001/getdata', {
      timeout: 5000
    })
    .then(
      res => {
        for(var key in res.data){
          console.log()
          stockChartXValuesFunction.push(res.data[key]["TIME"]);
          stockChartYValuesFunction.push(res.data[key]["VEL"]);
          
        }
        console.log(stockChartXValuesFunction)
        console.log(stockChartYValuesFunction)
        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction
        });

      }
    )
    .catch(err => console.error(err));



    
  }
  
  render() {
    return (
      <div>
        <h1>Discharge Rate</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 1420, height: 840, title: 'A Fancy Plot'}}
        />
      </div>
    )
  }
}

export default Stock;