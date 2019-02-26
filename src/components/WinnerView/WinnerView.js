import React, {Component} from 'react';
import './style.scss';
import axios from 'axios';
import { connect } from "react-redux";
import {ROOT_API} from '../../consts';

import PicAndNotes from './PicAndNotes';

class WinnerView extends Component{
  constructor(props){
    super(props);
    this.state = {winner: null, location: null}
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
    if(year > todayYear)
      this.fetchHistoryWinner();
    else
      this.fetchYearWinner();
  }
  fetchYearWinner(){
    const request = axios.get(`${ROOT_API}/formula/${this.props.year}`);
    request.then(({data}) => {
      // console.log(data);
      if(!data.song){
        this.setState({winner:[], location:[]});
        return false;
      }
      let winner = [
        {text: data.winner},
        {text: data.song.name, title: `performer: ${data.performer}`}
      ];
      let location = [
        {text: data.host_city},
        {text: data.date}
      ]
      this.setState({winner, location});
    })
  }
  fetchHistoryWinner(){
    const request = axios.get(`${ROOT_API}/statistics/historyWinner`);
    request.then(({data}) => {
      //console.log(data);
      let winner = [
        {text: data.historyWinner.country.toUpperCase()},
        {text: `${data.historyWinner.wins} times`}
      ];
      let location = [
        {text: data.historyHost.city.toUpperCase()},
        {text: `${data.historyHost.times} times`}
      ]
      this.setState({winner, location});
    })
  }

  render(){
    return(
      <div className='WinnerView'>
        <header className='view-header'>Winner</header>
        <main>
          <PicAndNotes  notes={this.state.winner}   pic='mic_winner.png' />
          <PicAndNotes  notes={this.state.location} pic='flag2.png' />
        </main>
      </div>
    );
  }
}

function mapStateToProps({year}) {
  return { year };
}

export default connect(mapStateToProps)(WinnerView);
