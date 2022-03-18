import React, { Component } from 'react';

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalBarSeries,
    DiscreteColorLegend
} from 'react-vis';

const jobsData = [{x: 'SDE-1', y: 10347}, {x: 'SDE-2', y: 5876}, {x: 'SDE-3', y: 7634}, {x: 'MTS-1', y: 2361},{x: 'MTS-2', y: 1361}];

const applicantData = [{x: 'SDE-1', y: 12376}, {x: 'SDE-2', y: 4890}, {x: 'SDE-3', y: 5389}, {x: 'MTS-1', y: 2661}, {x: 'MTS-2', y: 2361}];

const labelData = jobsData.map((d, idx) => ({
    x: d.x,
    y: Math.max(jobsData[idx].y, applicantData[idx].y)
  }));

class JobsBarGraph extends Component {
    render() {
        const BarSeries = VerticalBarSeries;
        return (
            <div className='jobsBarGraphContainer'>
                <XYPlot xType="ordinal" width={350} height={250} xDistance={100}>
                    <DiscreteColorLegend
                        style={{left: '50px', top: '10px'}}
                        orientation="horizontal"
                        items={[
                        {
                            title: 'Jobs Available',
                            color: '#12939A'
                        },
                        {
                            title: 'Applicants',
                            color: '#79C7E3'
                        }
                        ]}
                    />
                    <XAxis />
                    <YAxis />
                    <BarSeries className="vertical-bar-series-example" data={jobsData} barWidth={0.5} />
                    <BarSeries data={applicantData}  barWidth={0.5}/>
                </XYPlot>
            </div>
        )
    }
}

export default JobsBarGraph;