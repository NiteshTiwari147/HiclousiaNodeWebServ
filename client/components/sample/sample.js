import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  HorizontalBarSeries
} from 'react-vis';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { useCanvas: false}
    }
    render() {
    const {useCanvas} = this.state;
    // const BarSeries = useCanvas
    //   ? null
    //   : HorizontalBarSeries;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div className='industryOptions'>
                  <form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
  <input type="submit" />
</form>
                </div>
    );
  }
}