import React, {Component} from 'react';
import './style.scss';
import Line from './Line';

class ChartLines extends Component{
  render(){
    return(
      <div className='ChartLines'>
        <Line value={12} />
        <Line value={6} />
        <Line value={9} />
        <Line value={5} />
        <Line value={8} />
        <Line value={3} />
        <Line value={10} />
      </div>
    );
  }
}

export default ChartLines;
