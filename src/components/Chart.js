import React, {Component} from "react";
import {Line} from 'react-chartjs-2';


class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {chartData:props.chartData};
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'bottom'
    }

    render(){
        return(
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text: '3M CO',
                            fontSize: 15,
                        },
                        scales: {
                            xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Date'
                                }
                            }],
                            yAxes: [{
                                display: true,
                                ticks: {
                                    beginAtZero: true,
                                    steps: 10,
                                    stepValue: 5,
                                    max: 100
                                }
                            }]
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;
