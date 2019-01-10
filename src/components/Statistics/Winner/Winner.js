import React, {Component} from 'react';
import './style.scss';
import axios from 'axios';
import {ROOT_API} from '../../../consts';

class Winner extends Component{
  constructor(props){
    super(props);
    this.state = {winner: null}
    this.fetchWinner = this.fetchWinner.bind(this);
  }
  componentDidMount(){
    this.fetchWinner();
  }
  fetchWinner(){
    const request = axios.get(`${ROOT_API}/statistics/historyWinner`);
    request.then(({data}) => {
      if(data && data.country)
        this.setState({winner: data.country});
    })
  }
  render(){
    let {winner} = this.state;
    return(
      <div className='Winner'>
        <header>History Winner</header>
        <main></main>
        <footer>{winner && winner.toUpperCase()}</footer>
      </div>
    );
  }
}

export default Winner;
