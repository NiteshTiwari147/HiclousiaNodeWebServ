import React, { Component} from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    AreaSeries,
    LineMarkSeries,
} from 'react-vis';

class CompanyEmployeesGraph extends Component {
    constructor(props) {
        super(props);
        this.st
        this.state = { useCanvas: false}
    }
    render() {
        const { companyName } = this.props;
        const getData = (diff) => {
            const data = [
                {
                    x: 0,
                    y: 80+diff
                },
                {
                    x: 1,
                    y: 85+diff
                },
                {
                    x: 2,
                    y: 83+diff
                },
                {
                    x: 3,
                    y: 88+diff
                },
                {
                    x: 4,
                    y: 86+diff
                },
                {
                    x: 5,
                    y: 91+diff
                },
                {
                    x: 6,
                    y: 87+diff
                },
                {
                    x: 7,
                    y: 86+diff
                },
                {
                    x: 8,
                    y: 82+diff
                },
                {
                    x: 9,
                    y: 78+diff
                },
            ]
            return data;
        }
        return (
            <div>
                <div className='jobCompTitle'>
                    <p>Employees Comparison Graph</p>
                </div>
            <XYPlot width={200} height={250}>
                <XAxis />
                <YAxis />
                <AreaSeries
                className="first-series"
                opacity={0.45}
                data={getData(5)}
                color={'blue'}
                />
                <LineMarkSeries
                    className="linemark-series-example"
                    lineStyle={{stroke: 'green'}}
                    data={getData(3)}
                />
                <AreaSeries className="second-series" opacity={0.25} color={'red'}
                data={getData(2)} />
                <AreaSeries
                className="third-series"
                opacity={0.25}
                data={getData(-5)}
                />
                <AreaSeries
                className="fourth-series"
                opacity={0.25}
                data={getData(8)}
                />
            </XYPlot> 
            <div className="compStatsContainer">
                <div className='compStats redBorder'>
                    <div className="compTitle">
                        Low
                    </div>
                    <div className="compValue">
                        68.85
                    </div>
                </div>
                <div className='compStats blueBorder'>
                    <div className="compTitle">
                        Average
                    </div>
                    <div className="compValue" style={{'textAlign': 'center'}}>
                        75.69
                    </div>
                </div>
                <div className='compStats greenBorder'>
                    <div className="compTitle">
                        High
                    </div>
                    <div className="compValue">
                        83.12
                    </div>
                </div>
            </div>
            <div style={{'marginTop': '1rem'}}>
                <h6> Standard Deviation : 4.26 </h6>
            </div>
            <div style={{'marginTop': '1rem'}}>
                <h6>  Your Score: 73.48 </h6>
            </div>
        </div>
        )
    }
}

export default CompanyEmployeesGraph;

