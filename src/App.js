import React, { Component } from "react";
import "./App.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchFlags } from "./actions";

import YearSlider from "./components/YearSlider";
import VotesView from "./components/VotesView";
import Statistics from "./components/Statistics";
import SongView from "./components/SongsView/SongView";

class App extends Component {
  componentDidMount() {
    this.props.fetchFlags();
  }
  render() {
    if (this.props.flags.length === 0) return null;
    return (
      <div className="App">
        <div className="col col1">
          <YearSlider />
        </div>
        <div className="col col2">
          <div />
          <div>
            <VotesView />
          </div>
        </div>
        <div className="col col3">
          <div>
            <SongView />
          </div>
          <div>
            <Statistics />{" "}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ flags }) {
  return { flags };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFlags }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
