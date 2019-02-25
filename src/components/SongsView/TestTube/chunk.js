import React, { Component } from "react";

class Chunk extends Component {
  render() {
    let color = this.props.highlight ? this.props.color : "#f7f7f7";
    const title = this.props.showTitle ? "inline" : "none";
    const titleStyle = {
      height: `${this.props.height}%`,
      color: color,
      fontWeight: "bold",
      display: `${title}`,
      position: "relative",
      fontSize: "large",
      bottom: "20px"
    };
    return (
      <div
        title={this.props.title}
        className="Chunk"
        style={{
          backgroundColor: color,
          height: `${this.props.height}%`
        }}
      >
        <p style={titleStyle}>{this.props.title}</p>
      </div>
    );
  }
}

export default Chunk;
