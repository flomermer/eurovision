import React, { Component } from "react";

class Chunk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      height: this.props.height
    };
  }

  render() {
    let color = this.props.highlight ? this.state.color : "#f7f7f7";
    return (
      <div
        title={this.props.title}
        className="Chunk"
        style={{
          backgroundColor: color,
          height: `${this.state.height}%`
        }}
      />
    );
  }
}

export default Chunk;
