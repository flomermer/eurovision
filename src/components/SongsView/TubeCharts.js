import React, { Component } from "react";
import "./style.scss";
import Tube from "./TestTube/tube";

class TubeCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlights: {
        composition: "",
        lang: "",
        genre: "",
        key: ""
      }
    };
    this.getHighlightFields = this.getHighlightFields.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.highlights != this.props.highlights) {
      this.getHighlightFields();
    }
  }

  renderTubes() {
    let { data } = this.props;
    return Object.keys(data).map((key, index) => (
      <Tube
        key={index}
        title={key}
        data={data[key]}
        highlights={this.state.highlights[key]}
      />
    ));
  }

  getHighlightFields() {
    // song data = artists, genres, key, language
    let highlights = this.props.highlights;
    let { artist, key, language } = highlights;
    let genre = highlights.genres
      ? highlights.genres[0][0]
        ? highlights.genres[0][0]
        : "other"
      : "other";
    console.log(artist);
    if (artist)
      this.setState({
        highlights: {
          composition: artist.length > 1 ? "band" : "solo",
          lang: language === "english" ? "english" : "other",
          key,
          genre: genre.includes("pop")
            ? "pop"
            : genre.includes("rock")
            ? "rock"
            : genre.includes("classic")
            ? "classic"
            : "other"
        }
      });
    else
      this.setState({
        highlights: {
          composition: "",
          lang: "",
          genre: "",
          key: ""
        }
      });
  }

  render() {
    return <div className="TubeCharts">{this.renderTubes()}</div>;
  }
}

export default TubeCharts;
