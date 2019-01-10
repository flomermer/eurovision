import React, {Component} from 'react';
import './style.scss';
import axios from 'axios';
import {ROOT_API} from '../../../consts';

import Bff from './Bff';

class Podium extends Component{
  constructor(props){
    super(props);
    this.state = {podium: null};

    this.fetchBff = this.fetchBff.bind(this);
  }
  componentDidMount(){
    this.fetchBff();
  }
  fetchBff(){
    const request = axios.get(`${ROOT_API}/statistics/bff`);
    request.then(({data}) => {
      this.setState({podium: data[0]});
    })
  }
  render(){
    let {podium} = this.state;
    if(!podium) return false;
    return(
      <div className='Podium'>
        <main>
          <div className='pos-1'><Bff countries={podium['1']} /></div>
          <div className='pos-2'><Bff countries={podium['2']} /></div>
          <div className='pos-3'><Bff countries={podium['3']} /></div>
        </main>
        <footer>Eurovision BFF</footer>
      </div>
    );
  }
}

export default Podium;
