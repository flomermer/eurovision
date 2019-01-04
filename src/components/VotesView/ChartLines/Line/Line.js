import React, {Component} from 'react';
import Bar from './Bar';

class Line extends Component{
  constructor(props){
    super(props);
    this.renderBars = this.renderBars.bind(this);
  }
  renderBars(value){
    let bars = [];
    for(let i=0; i<value; i++)
      bars.push(<Bar key={i} />);
    return bars;
  }
  render(){
    let {line} = this.props;
    if(line.value===0) return false;
    return(
      <div className='Line'>
          <div className='title'>{line.title}</div>
          {this.renderBars(line.value)}
      </div>
    )
  }
}

export default Line;
