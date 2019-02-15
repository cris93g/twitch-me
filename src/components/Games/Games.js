import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";

class Games extends Component {
  state = {
    games: {}
  };
  componentDidMount() {
    axios
      .get(`/api/top-games`)
      .then(response => this.setState({ games: { ...response.data } }));
  }

  render() {
    console.log(this.state.games);
    // console.log(this.state.profile);

    // console.log(picture);
    return <div className="" />;
  }
}

export default Games;
