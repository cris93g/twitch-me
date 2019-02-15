import React, { Component } from "react";
import "./LeftBar.css";
class LeftBar extends Component {
  render() {
    return (
      <div className="leftbar">
        <div>categories</div>
        <div>all games</div>
        <div>streams</div>
        <div>my favorites</div>
      </div>
    );
  }
}

export default LeftBar;
