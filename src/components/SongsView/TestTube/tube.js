import React, { Component } from "react";
import Chunk from "./chunk";

let colors = [
  "#fff8e1",
  "#ffecb3",
  "#ffe082",
  "#ffca28",
  "#ffc107",
  "#ffa000",
  "#ff6f00",
  "#fdd835",
  "#e65100",
  "#ff6d00",
  "#bf360c",
  "#ff3d00",
  "#fbe9e7",
  "#eeff41" // Lime,
];

class Tube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  getColor() {
    const colorIndex = Math.floor(Math.random() * colors.length);
    let color = colors[colorIndex];
    //colors = colors.filter(_color => _color !== color);
    return color;
  }

  render() {
    return (
      <div className="Tube">
        {Object.keys(this.state.data).map((key, index) => (
          <Chunk
            key={index}
            title={key}
            height={this.state.data[key]}
            color={this.getColor()}
          />
        ))}
      </div>
    );
  }
}

export default Tube;
