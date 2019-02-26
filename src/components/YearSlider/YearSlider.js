import React, {Component} from 'react';
import './style.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateYear} from '../../actions';
import moment from 'moment';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './'

import KeyDetect from '../misc/KeyDetect';

class YearSlider extends Component{
  constructor(props){
    super(props);
    this.state = {value: this.props.year};
    this.handleChange     =   this.handleChange.bind(this);
    this.changeCompleted  =   this.changeCompleted.bind(this);
    this.stepYear         =   this.stepYear.bind(this);
  }
  handleChange(value){
    this.setState({value});
  }
  changeCompleted(){
    this.props.updateYear(this.state.value); //update global year
  }
  stepYear(dir){
    let {year} = this.props;
    if(!year) return false;

    let todayYear = new Date().getFullYear();
    let newYear = dir==='next' ? year+1 : year-1;

    if(newYear>todayYear+1) return false;

    this.setState({value: newYear}, () => this.props.updateYear(newYear));

  }
  render(){
    const todayYear = Number(moment().format('YYYY'));
    const max     = todayYear+1;
    const min     = this.props.min;
    const year    = this.state.value===max ? 'כל השנים' : this.state.value;

    return(
      <div className={`YearSlider ${this.props.className}`}>
          <KeyDetect callback={this.stepYear} ascii={[40,38]} payloads={['prev','next']} isCtrl={true} />
          <Slider value={this.state.value} handleLabel={year.toString()}
                  orientation="vertical"
                  onChange={this.handleChange} onChangeComplete={this.changeCompleted}
                  min={min} max={max} step={1}
                  tooltip={false}
          />
      </div>
    );
  }
}

function mapStateToProps({year}){
  return {year};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({updateYear}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(YearSlider);
