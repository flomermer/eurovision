import React, { Component } from "react";
import Chunk from "./chunk";
import _ from "lodash";

let colors = [
  "#f44336",
  "#ffc107",
  "#ffa000",
  "#ff6f00",
  "#fdd835",
  "#e65100",
  "#ff6d00",
  "#bf360c",
  "#ff3d00",
  "#e53935",
  "#8bc34a",
  "#4caf50"
];

class Tube extends Component {
  isChunkHighlight(key) {
    console.log(this.props.highlights);
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
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default Tube;
