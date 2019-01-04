import React, { Component } from 'react';
import './App.scss';

import YearSlider from './components/YearSlider';
import VotesView from './components/VotesView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='col col1'>
          <YearSlider/>
        </div>
        <div className='col col2'>
          <div>
            <VotesView />            
          </div>
        </div>
        <div className='col col3'>
          <div>moshe</div>
        </div>
      </div>
    );
  }
}

export default App;
