import React, { Component } from "react";
import Chunk from "./chunk";

const colors = [
  "#546e7a",
  "#ffca28",
  "#ffc107",
  "#ffa000",
  "#ff6f00",
  "#fdd835",
  "#e65100",
  "#ff6d00",
  "#bf360c",
  "#ff3d00",
  "#8bc34a",
  "#e53935",
  "#455a64"
];

let colors_queue = colors;

class Tube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  getColor() {
    const colorIndex = Math.floor(Math.random() * (colors.length - 1));
    let color = colors_queue[colorIndex];
    colors_queue = colors.filter(_color => _color !== color);
    return color;
  }

  isChunkHighlight(key) {
    return this.props.highlights === key || this.props.highlights === "";
  }

  isTitleHighlight(key) {
    return this.props.highlights !== "" && this.props.highlights === key;
  }
  render() {
    return (
      <div className="Tube">
        <div className="cover">
          <Chunk key="head" />
        </div>
        <div className="inTube">
          {Object.keys(this.state.data).map((key, index) => (
            <Chunk
              key={index}
              title={key}
              height={this.state.data[key]}
              color={this.getColor()}
              highlight={this.isChunkHighlight(key)}
              showTitle={this.isTitleHighlight(key)}
            />
          ))}
        </div>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default Tube;
