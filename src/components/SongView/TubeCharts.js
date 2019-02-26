import React, { Component } from "react";
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
    if (prevProps.highlights !== this.props.highlights) {
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

  getHighlightGenre(genres) {
    let genre = genres ? (genres[0][0] ? genres[0][0] : "other") : "other";
    return genre.includes("pop")
      ? "pop"
      : genre.includes("rock")
      ? "rock"
      : genre.includes("classic")
      ? "classic"
      : "other";
  }

  calculateHighlights(highlights) {
    if (highlights === "all")
      return {
        composition: "all",
        lang: "all",
        key: "all",
        genre: "all"
      };

    let { artist, key, language } = highlights;
    let composition, lang, genre;
    composition = lang = genre = "";
    if (artist) {
      composition = artist.length > 1 ? "band" : "solo";
      lang = language === "english" ? "english" : "other";
      genre = this.getHighlightGenre(highlights.genres);
    } else {
      key = "";
    }

    return {
      composition,
      lang,
      key,
      genre
    };
  }
  getHighlightFields() {
    let highlights = this.calculateHighlights(this.props.highlights);
    this.setState({ highlights: highlights });
  }

  render() {
    return <div className="TubeCharts">{this.renderTubes()}</div>;
  }
}

export default TubeCharts;
