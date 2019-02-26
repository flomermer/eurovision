import React, {Component} from 'react';
import './style.scss';
import AllTimesWinner from './AllTimesWinner';
import Podium from './Podium';

class Statistics extends Component{
  render(){
    return(
      <div className={`Statistics ${this.props.className}`}>
        <header className='view-header'>Statistics</header>
        <main>
          <AllTimesWinner/>
          <Podium />
        </main>
      </div>
    );
  }
}

export default Statistics;
