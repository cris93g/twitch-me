import React, { Component } from "react";
import "./TopBar.css";
import LogIn from "../logIn/logIn";
import { connect } from "react-redux";
import axios from "axios";
class TopBar extends Component {
  state = {
    profile: {}
  };
  componentDidMount() {
    axios
      .get(`/me`)
      .then(response => this.setState({ profile: { ...response.data } }));
  }

  render() {
    // console.log(this.state.profile);
    const { picture, name } = this.state.profile;
    // console.log(picture);
    return (
      <div className="navtop">
        <div className="topbar">
          <p>{name}</p>
          <div className="avatar">
            <img className="avatar-image" src={picture} />
          </div>
          <LogIn />
        </div>
      </div>
    );
  }
}

export default TopBar;
