import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";

class Streams extends Component {
  state = {
    streams: {}
  };
  componentDidMount() {
    axios
      .get(`/api/top-streams`)
      .then(response => this.setState({ streams: { ...response.data } }));
  }

  render() {
    console.log(this.state.streams);
    // console.log(this.state.profile);

    // console.log(picture);
    return <div className="" />;
  }
}

export default Streams;
