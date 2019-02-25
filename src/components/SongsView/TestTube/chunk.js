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
    const title = this.props.showTitle ? "inline" : "none";
    const titleStyle = {
      height: `${this.state.height}%`,
      color: color,
      "font-weight": "bold",
      display: `${title}`,
      position: "relative",
      "font-size": "large",
      bottom: "20px"
    };
    return (
      <div
        title={this.props.title}
        className="Chunk"
        style={{
          backgroundColor: color,
          height: `${this.state.height}%`
        }}
      >
        <p style={titleStyle}>{this.props.title}</p>
      </div>
    );
  }
}

export default Chunk;
