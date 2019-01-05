import React, {Component} from 'react';
import './style.scss';
import Line from './Line';

class ChartLines extends Component{
  renderLines(){
    let {data} = this.props;
    //console.log(data);
    return data.map((line,i) => {
      return <Line key={i} line={line} />
    })
  }
  render(){
    return(
      <div className='ChartLines'>
        {this.renderLines()}
      </div>
    );
  }
}

export default ChartLines;
