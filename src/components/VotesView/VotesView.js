import React,{Component} from 'react';
import './style.scss';
import ChartLines from './ChartLines';

class VotesView extends Component{
  render(){
    return(
      <div className='VotesView'>
        <ChartLines />
      </div>
    );
  }
}

export default VotesView;
