import React, { Component } from "react";
import TubeCharts from ".";

const mockData = {
  key: {
    C: 7,
    "G#": 2,
    B: 3,
    A: 5,
    "C#": 4,
    "A#": 2,
    F: 2,
    D: 6,
    G: 2,
    E: 2,
    "F#": 1,
    "D#": 3
  },
  lang: {
    english: 23,
    other: 16
  },
  composition: {
    band: 6,
    solo: 33
  },
  genre: {
    pop: 40,
    classic: 18,
    rock: 2,
    other: 40
  }
};

class SongView extends Component {
  state = {};
  render() {
    return (
      <main>
        <TubeCharts data={mockData} />
      </main>
    );
  }
}

export default SongView;
