import React, { Component } from 'react';
import './App.scss';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchFlags} from './actions';

import YearSlider from './components/YearSlider';
import VotesView from './components/VotesView';

class App extends Component {
  componentDidMount(){
    this.props.fetchFlags();
  }
  render() {
    if(this.props.flags.length===0) return null;
    return (
      <div className="App">
        <div className='col col1'>
          <YearSlider/>
        </div>
        <div className='col col2'>
          <div></div>
          <VotesView/>
        </div>
        <div className='col col3'>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({flags}){
  return {flags};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchFlags}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
