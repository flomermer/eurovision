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
    return (
      <div
        className="Chunk"
        style={{
          backgroundColor: this.state.color,
          height: `${this.state.height}%`
        }}
      />
    );
  }
}

export default Chunk;
