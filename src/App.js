import React, {Component} from "react";
import "./App.scss";
import Chart from './components/Chart'
import jsonfile from "./data";
import Moment from 'react-moment';
Moment.globalFormat = 'MMM DD';

const labels = jsonfile[0].response.data.map(function(e) {
    return  e.date;
});

const data = jsonfile[0].response.data.map(function(e) {
    return e.PD;
});

const dataLGD = jsonfile[0].response.data.map(function(e) {
    return e.LGD;
});

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
        };
    }


    componentWillMount() {
        this.getChartData();
    }

    getChartData(){
        // Ajax calls here
        this.setState({
            chartData:{
                labels: labels,
                datasets: [
                    {
                        label: "PD",
                        data: data,
                        backgroundColor:[
                            'rgba(153, 102, 255, 0.6)'
                        ]
                    },
                    {
                        label: "LGD",
                        data: dataLGD,
                        backgroundColor:[
                            'rgba(45, 433, 255, 0.6)'
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="App">
                <div className="column">
                    <Chart chartData={this.state.chartData} />
                </div>
                <div className="column">
                    <div className="title">The reference data for this company:</div>
                    <div>{"Name: " + jsonfile[0].response.entity.name}</div>
                    <div>{"ID: " + jsonfile[0].response.entity.id}</div>
                    <div>{"Industry: " + jsonfile[0].response.entity.industry}</div>
                    <div>{"Country: " + jsonfile[0].response.entity.country}</div>
                    <div>{"Region: " + jsonfile[0].response.entity.region}</div>
                    <div>{"The most recent PD: " + jsonfile[0].response.data[0].PD}</div>
                    <div>{"PDMedianProxyBps: " + jsonfile[0].response.data[0].PDMedianProxyBps}</div>
                    <div>{"PDContributionCount: " + jsonfile[0].response.data[0].PDMedianProxyBps}</div>
                    <div>{"SP: " + jsonfile[0].response.data[0].SP}</div>
                </div>
            </div>
        );
    }
}

export default App;
