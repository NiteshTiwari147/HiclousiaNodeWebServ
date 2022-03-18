import React, { Component} from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import DiscreteColorLegend from '../../../node_modules/react-vis/dist/legends/discrete-color-legend';
import GradientDefs from '../../../node_modules/react-vis/dist/plot/gradient-defs';

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    HorizontalBarSeries,
    HorizontalBarSeriesCanvas,
    LabelSeries
  } from 'react-vis';



class SkillHorizontalBar extends Component {
    constructor(props){
        super(props);
        this.state = { useCanvas: false}
    }
    render() {
        const data = [];
        const label_data = []
        let totalPoint = 0;
        this.props.data.map(obj => {
            totalPoint = obj.skillPoint + totalPoint;
        })
        this.props.data.map((obj,index) => {
            const angle_value = obj.skillPoint/totalPoint;
            const item = {
                x: angle_value*20,
                y: index+1
            }
            const label = {title: obj.skillName}
            data.push(item);
            label_data.push(label);
        })
        const ITEMS = [
            {title: 'React', color: 'url(#circles)'},
            {title: 'CPP', color: "#45aeb1"},
            {title: 'Python', color: '#f93'},        
            {title: 'NodeJS', color: 'url(#stripes)'},
            {title: 'C#', color: 'purple'},
        ];
        const DATA = [
            {
                x: 18.21802334361606,
                y: 1,
                color: 1,
            },
            {
                x: 14.21802334361606,
                y: 2,
                color: 52,
            },
            {
                x: 12.21802334361606,
                y: 3,
                color: 43,
            },
            {
                x: 7.21802334361606,
                y: 4,
                color:14
            },
            {
                x: 5.21802334361606,
                y: 5,
                color: 35,
            },
            {
                x: 3.21802334361606,
                y: 6,
                color: 28
            },
        ];
        return(
            <div className='topSkillBarGraphBox shadow'>
                <div className='smallContainerTitle'>
                    <h5>
                        Top Skill Bar
                    </h5>
                </div>
                <XYPlot
                    xDomain={[
                        0,
                        20
                    ]}
                    yDomain={[
                        0,
                        8
                    ]}
                    width={200}
                    height={300}
                    color="blue"
                    >
                    <XAxis/>
                    <YAxis />
                    <HorizontalBarSeries
                        barWidth={0.35}
                        data={DATA}
                        style={{}}          
                    />
                </XYPlot>
                <div className='visualLegend'>
                        <svg height={0} width={0}>
                            <GradientDefs>
                                <pattern id="stripes" width="4" height="4" patternUnits="userSpaceOnUse">
                                    <path d="M 0, 0 l 5, 5" stroke="#45aeb1" strokeLinecap="square" />
                                </pattern>
                                <pattern id="circles" width="3" height="3" patternUnits="userSpaceOnUse">
                                <circle cx="1.5" cy="1.5" r="0.8" fill="magenta" />
                                </pattern>

                            </GradientDefs>
                        </svg>
                        <DiscreteColorLegend orientation="horizontal" width={200} items={label_data} />
                </div>
            </div>
        )
    }
}

export default SkillHorizontalBar;