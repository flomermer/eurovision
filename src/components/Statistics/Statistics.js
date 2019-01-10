import React, {Component} from 'react';
import './style.scss';
import Winner from './Winner';
import Podium from './Podium';

class Statistics extends Component{
  render(){
    return(
      <div className='Statistics'>
        <header className='view-header'>Statistics</header>
        <main>
          <Winner/>
          <Podium />
        </main>
      </div>
    );
  }
}

export default Statistics;
