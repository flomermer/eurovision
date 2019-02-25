import React, { Component } from "react";

class Chunk extends Component {
  render() {
    let color = this.props.highlight ? this.props.color : "#f7f7f7";
    return (
      <div
        title={this.props.title}
        className="Chunk"
        style={{
          backgroundColor: color,
          height: `${this.props.height}%`
        }}
      />
    );
  }
}

export default Chunk;
