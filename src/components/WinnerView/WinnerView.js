import React, {Component} from 'react';
import './style.scss';
import axios from 'axios';
import { connect } from "react-redux";
import {ROOT_API} from '../../consts';

import Winner from './Winner';
import Location from './Location';
import Statistics from '../Statistics';

class WinnerView extends Component{
  constructor(props){
    super(props);
    this.state = {winner: null}
    this.fetchWinner = this.fetchWinner.bind(this);
  }
  componentDidMount(){
    this.fetchWinner();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.year !== this.props.year) this.fetchWinner();
  }
  fetchWinner(){
    let {year} = this.props;
    let todayYear = new Date().getFullYear();
    if(year > todayYear){
      this.setState({winner: null});
      return false;
    }

    const request = axios.get(`${ROOT_API}/formula/${this.props.year}`);
    request.then(({data}) => {
      this.setState({winner: data});
    })
  }

  render(){
    if(!this.state.winner) return <div className='WinnerView'><Statistics/></div>;

    return(
      <div className='WinnerView'>
        <header className='view-header'>Winner</header>
        <main>
          <Winner   winner={this.state.winner} />
          <Location winner={this.state.winner} />
        </main>
      </div>
    );
  }
}

function mapStateToProps({year}) {
  return { year };
}

export default connect(mapStateToProps)(WinnerView);
