import React, {Component} from 'react';
import Bar from './Bar';

class Line extends Component{
  constructor(props){
    super(props);
    this.renderBars = this.renderBars.bind(this);
  }
  renderBars(){
    let bars = [];
    for(let i=0; i<this.props.value; i++)
      bars.push(<Bar val={i} />);
    return bars;
  }
  render(){
    return(
      <div className='Line'>
          {this.renderBars()}
      </div>
    )
  }
}

export default Line;
