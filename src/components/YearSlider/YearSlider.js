import React, {Component} from 'react';
import './style.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateYear} from '../../actions';
import moment from 'moment';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class YearSlider extends Component{
  constructor(props){
    super(props);
    this.state = {value: this.props.year};
    this.handleChange     =   this.handleChange.bind(this);
    this.changeCompleted  =   this.changeCompleted.bind(this);
  }
  handleChange(value){
    this.setState({value});
  }
  changeCompleted(){
    this.props.updateYear(this.state.value); //update global year
  }
  render(){
    const todayYear = Number(moment().format('YYYY'));
    const max = todayYear+1;
    const min = 1956;
    const year = this.state.value===max ? 'כל השנים' : this.state.value;

    return(
      <div className={`YearSlider ${this.props.className}`}>
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
