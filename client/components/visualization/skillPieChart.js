import React, { Component} from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import DiscreteColorLegend from '../../../node_modules/react-vis/dist/legends/discrete-color-legend';
import GradientDefs from '../../../node_modules/react-vis/dist/plot/gradient-defs';
import {RadialChart} from 'react-vis';

import './styles.css';

class SkillPieChart extends Component {
    render() {
        const data = [];
        const label_data = []
        let totalPoint = 0;
        this.props.data.map(obj => {
            totalPoint = obj.skillPoint + totalPoint;
        })
        this.props.data.map(obj => {
            const angle_value = obj.skillPoint/totalPoint;
            const item = {angle: angle_value, name: obj.skillName,label:obj.skillName,  opacity: 0.2,}
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

        return (
            <div className='skillsPieChart shadow'>
                <div className='smallContainerTitle'>
                    <h5>
                        Skills Pie Chart
                    </h5>
                </div>
                <RadialChart
                    colorDomain={[0, 100]}
                    colorRange={[0, 20]}
                    margin={{top: 100}}
                    animation={true}
                    data={data}
                    labelsRadiusMultiplier={1.1}
                    labelsStyle={{fontSize: 8, fill: 'blue'}}
                    showLabels
                    style={{stroke: '#fff', strokeWidth: 2}}
                    width={225}
                    height={200}
                    />
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
        );
    }
}

export default SkillPieChart;