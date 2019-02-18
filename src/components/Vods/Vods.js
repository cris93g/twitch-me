import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";

class Vods extends Component {
	// state = {
	// 	profile: {}
	// };
	// componentDidMount() {
	// 	axios
	// 		.get(`/me`)
	// 		.then(response => this.setState({ profile: { ...response.data } }));
	// }

	render() {
		return <div className="vods" />;
	}
}

export default Vods;
