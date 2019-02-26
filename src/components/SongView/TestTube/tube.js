import React, { Component } from "react";
import Chunk from "./chunk";

let colors = [
  "#25228E",
  "#6A0CCF",
  "#6a1b9a",
  "#B331A9",
  "#fdd835",
  "#e65100",
  "#ff6d00",
  "#bf360c",
  "#ff3d00",
  "#e53935",
  "#d50000",
  "#b71c1c"
];

class Tube extends Component {
  isChunkHighlight(key) {
    return this.props.highlights === key || this.props.highlights === "all";
  }

  isTitleHighlight(key) {
    return this.props.highlights !== "all" && this.props.highlights === key;
  }
  render() {
    return (
      <div className="Tube">
        <div className="cover">
          <Chunk key="head" />
        </div>
        <div className="inTube">
          {Object.keys(this.props.data).map((key, index) => (
            <Chunk
              key={index}
              title={key}
              height={this.props.data[key]}
              color={colors[index]}
              highlight={this.isChunkHighlight(key)}
              showTitle={this.isTitleHighlight(key)}
            />
          ))}
        </div>
        <div className="title">{this.props.title}</div>
      </div>
    );
  }
}

export default Tube;
