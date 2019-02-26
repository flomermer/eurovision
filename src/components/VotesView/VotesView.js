import React, { Component } from "react";
import "./style.scss";
import ChartLines from "./ChartLines";

import axios from "axios";
import { connect } from "react-redux";
import { ROOT_API } from "../../consts";
import _ from "lodash";

import { isMobile } from "react-device-detect";

const MAX_LINES = isMobile ? 5 : 10;

class VotesView extends Component {
  constructor(props) {
    super(props);
    this.state = { votes: [], dir: "from", country: "israel", parts: [] };

    this.onSelectChange = this.onSelectChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.fetchPoints = this.fetchPoints.bind(this);
    this.fetchParts = this.fetchParts.bind(this); //participators
    this.renderSlctCountryOptions = this.renderSlctCountryOptions.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.fetchParts().then(() => {
      this.fetchPoints();
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.year !== this.props.year) this.fetchData();
  }
  fetchPoints() {
    let { year } = this.props;
    let { country, dir } = this.state;

    const request = axios({
      method: "GET",
      url: `${ROOT_API}/points/${year}/${dir}/${country}`
    });
    request.then(({ data }) => {
      if (!data) return false;
      //console.log(data);
      let votes = data;
      votes.forEach(vote => {
        //order it as {title, value} object for the ChartLines View
        vote.flag = this.props.flags[vote.country.toLowerCase()];
        vote.title = (
          <img
            src={this.props.flags[vote.country.toLowerCase()]}
            alt={vote.country}
            title={vote.country}
          />
        );
        vote.value = Number(vote.points);
        if (year > 2015 && year < new Date().getFullYear())
          //since 2016 votes maximum has been changed
          vote.value = _.round(vote.value / 2);

        delete vote.points;
      });
      votes = _.orderBy(votes, ["value"], ["desc"]);
      votes = votes.splice(0, MAX_LINES);
      votes = _.shuffle(votes);
      this.setState({ votes });
    });
  }
  fetchParts() {
    return new Promise((resolve, reject) => {
      let { year } = this.props;
      const request = axios({
        method: "GET",
        url: `${ROOT_API}/flags/participated/${year}`
      });

      request.then(({ data }) => {
        let parts = data;
        let foundCountry = _.find(parts, { country: this.state.country });
        let country;
        if (foundCountry) {
          country = this.state.country;
        } else {
          if (parts && parts.length > 0) country = parts[0].country;
          else country = this.state.country;
        }

        //let country = foundCountry ? this.state.country : parts[0] ? parts[]
        //slct remains on the current Country option, unless it's not exists and then choose another existing country by default
        this.setState({ parts, country }, () => resolve());
      });
    });
  }

  onSelectChange(e) {
    const { name, value } = e.target;
    let obj = {};
    obj[name] = value;
    this.setState(obj, () => {
      this.fetchPoints();
    });
  }
  renderSlctCountryOptions() {
    let { parts } = this.state;
    if (parts.length === 0) return <option value={0}>xxx</option>;
    return parts.map(part => {
      return (
        <option key={part.country} value={part.country}>
          {part.country}
        </option>
      );
    });
  }

  render() {
    //if (this.props.year === new Date().getFullYear()) return null;
    return (
      <div className="VotesView">
        <header className="view-header">Votes</header>
        <main>
          <ChartLines data={this.state.votes} />
          <div className="settings">
            <div>
              <select
                name="dir"
                value={this.state.dir}
                onChange={this.onSelectChange}
              >
                <option value="from">From</option>
                <option value="to">To</option>
              </select>
            </div>
            <div>
              <select
                name="country"
                value={this.state.country}
                onChange={this.onSelectChange}
              >
                {this.renderSlctCountryOptions()}
              </select>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

function mapStateToProps({ year, flags }) {
  return { year, flags };
}

export default connect(mapStateToProps)(VotesView);
