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

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(year){
    this.props.updateYear(year);
  }
  render(){
    const todayYear = Number(moment().format('YYYY'));
    const max = todayYear+1;
    const min = 1956;
    const year = this.props.year===max ? 'כל השנים' : this.props.year;

    return(
      <div className={`YearSlider ${this.props.className}`}>
          <Slider value={this.props.year}
                  orientation="vertical" onChange={this.handleChange}
                  min={min} max={max} step={1}
                  handleLabel={year.toString()}
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
