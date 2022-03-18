import React, { Component} from 'react';
import { graphql } from 'react-apollo';
import '../../../node_modules/react-vis/dist/style.css';
import query from '../../queries/getScore';

import {
    XYPlot,
    XAxis,
    YAxis,
    AreaSeries,
    LineMarkSeries,
  } from 'react-vis';

 class Score extends Component {
    constructor(props) {
        super(props);
        this.state = { useCanvas: false}
    }

    autoRefresh() {
      this.props.data.refetch({
        query
      })
    }
    render() {
      if(this.props.data.loading) {
        return (
          <div className='scoreGraphContainer shadow'>
            <div className='smallContainerTitle'>
              <h5>
                Score Box
              </h5>
            </div>
              Loading.....
          </div>
        )
      }
      // setInterval( () => this.autoRefresh(), 100000);
      const { Scorecard } = this.props.data.getCandidateBasicInfo;
      const rank_A = Scorecard.graph[0].plotPoints || null;
      const rank_B = Scorecard.graph[1].plotPoints || null;
      const rank_C = Scorecard.graph[2].plotPoints || null;
      const rank_D = Scorecard.graph[3].plotPoints || null;

      const getData = (rank) =>  {
        if(rank === 'A') {
           const data = [];
           rank_A.map(obj => {
             data.push({
               x: obj.x,
               y: obj.y
             })
           })
           return data;
        }
        if(rank === 'B') {
          const data = [];
          rank_B.map(obj => {
            data.push({
              x: obj.x,
              y: obj.y
            })
          })
          return data;
        }
        if(rank === 'C') {
          const data = [];
          rank_C.map(obj => {
            data.push({
              x: obj.x,
              y: obj.y
            })
          })
          return data;
        }
        if(rank === 'D') {
          const data = [];
          rank_D.map(obj => {
            data.push({
              x: obj.x,
              y: obj.y
            })
          })
          return data;
          }
        }
      return (
        <div className='scoreGraphContainer shadow'>
          <div className='smallContainerTitle'>
            <h5>
              Score Box
            </h5>
          </div>
          <XYPlot width={200} height={250}>
            <XAxis />
            <YAxis />
            <AreaSeries
              className="first-series"
              opacity={0.25}
              data={getData('A')}
            />
            <LineMarkSeries
                className="linemark-series-example"
                lineStyle={{stroke: 'green'}}
                data={getData('B')}
            />
            <AreaSeries className="second-series" opacity={0.25}
            data={getData('B')} />
            <AreaSeries
              className="third-series"
              opacity={0.25}
              data={getData('C')}
            />
            <AreaSeries
              className="fourth-series"
              opacity={0.25}
              data={getData('D')}
            />
          </XYPlot>
        </div>
      );
    }
}

export default graphql(query)(Score);