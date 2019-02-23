import React, { Component } from "react";
import "./style.scss";
import Tube from "./TestTube/tube";

class TubeCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  render() {
    return (
      <div className="TubeCharts">
        {Object.keys(this.state.data).map((key, index) => (
          <Tube key={index} title={key} data={this.state.data[key]} />
        ))}
      </div>
    );
  }
}

export default TubeCharts;
