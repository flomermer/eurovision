import React, {Component} from 'react';
import {connect} from 'react-redux';

class Bff extends Component{
  render(){
    let {countries, flags} = this.props;
    if(!countries) return false;
    let country1 = countries[0].toLowerCase();;
    let country2 = countries[1].toLowerCase();;
    return(
      <div className={`Bff ${this.props.className}`}>
        <img src={flags[country1]} alt={country1} title={country1} />
        <img src={flags[country2]} alt={country2} title={country2} />
      </div>
    );
  }
}

function mapStateToProps({flags}){
  return {flags};
}

export default connect(mapStateToProps)(Bff);
