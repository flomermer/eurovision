import React, { Component } from "react";
import TubeCharts from ".";
import axios from "axios";
import { ROOT_API } from "../../consts";
import { connect } from "react-redux";

class SongView extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "", highlights: "" };
    this.fetchSongStatistics = this.fetchSongStatistics.bind(this);
  }
  componentDidMount() {
    this.fetchSongStatistics();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.year !== this.props.year) this.fetchSongStatistics();
  }

  fetchSongStatistics() {
    let { year } = this.props;
    if (!this.state.data) {
      const request = axios({
        method: "GET",
        url: `${ROOT_API}/formula/2020`
      });
      request.then(({ data }) => {
        if (!data) return false;
        this.setState({ data: data });
      });
    }
    if (year <= 2019) {
      const request = axios({
        method: "GET",
        url: `${ROOT_API}/formula/${year}`
      });
      request.then(({ data }) => {
        if (!data) this.setState({ highlights: "" });
        else this.setState({ highlights: data.song });
      });
    } else {
      this.setState({ highlights: "" });
    }
  }

  render() {
    return (
      <main>
        <header className="view-header Song">Song</header>
        <TubeCharts data={this.state.data} highlights={this.state.highlights} />
      </main>
    );
  }
}
function mapStateToProps({ year }) {
  return { year };
}

export default connect(mapStateToProps)(SongView);
