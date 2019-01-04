import React,{Component} from 'react';
import './style.scss';
import ChartLines from './ChartLines';

import axios from 'axios';
import {connect} from 'react-redux';
import {ROOT_API} from '../../consts';
import _ from 'lodash';

const MAX_LINES = 7;

class VotesView extends Component{
  constructor(props){
    super(props);
    this.state = {votes: []}
  }
  componentDidMount(){
    this.fetch();
  }
  componentDidUpdate(prevProps){
    if(prevProps.year!==this.props.year)
      this.fetch();
  }
  fetch(){
    const {year} = this.props;
    if(!year) return false;
    const request = axios({
      method: 'POST',
      url: `${ROOT_API}/points/pointsByCountyAndYear`,
      data: {year, country: 'France', string_dir: 'from'},
    });
    request.then(({data}) => {
      let votes = data[0].voted_to;
      votes = _.orderBy(votes, ['points'], ['desc']);
      votes = votes.splice(0,MAX_LINES);
      votes.forEach((vote) => { //order it as {title, value} object for the ChartLines View
        vote.title = vote.country;
        vote.value = vote.points;
        delete vote.country; delete vote.points;
      })
      this.setState({votes});
    })
  }
  render(){
    return(
      <div className='VotesView'>
        <ChartLines data={this.state.votes} />
      </div>
    );
  }
}

function mapStateToProps({year}){
  return {year};
}

export default connect(mapStateToProps)(VotesView);
