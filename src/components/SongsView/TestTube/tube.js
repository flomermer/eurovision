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
    console.log(this.props.highlights);
    return (
      <div className="Tube">
        <div className="cover">
          <Chunk key="head" />
        </div>
        <div className="inTube">
          {Object.keys(this.state.data).map((key, index) =>
            this.props.highlights == key ? (
              <Chunk
                key={index}
                title={key}
                height={this.state.data[key]}
                color={this.getColor()}
                grey={false}
              />
            ) : (
              <Chunk
                key={index}
                title={key}
                height={this.state.data[key]}
                color={this.getColor()}
                grey={true}
              />
            )
          )}
        </div>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default Tube;
