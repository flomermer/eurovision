import React, {Component} from 'react';
import './style.scss';

class Location extends Component{
  render(){
    let {winner} = this.props;
    if(!winner) return null;
    return(
      <div className='Location'>
        <main></main>
        <footer>
          <div className='country'>{winner.host_city}</div>
          <div className='country'>{winner.date}</div>
        </footer>
      </div>
    );
  }
}

export default Location;
