import React from "react";

import { connect } from "react-redux";
import Auth from "../Auth/Auth";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
const Log = styled.section`
	margin: auto;
`;
const LogIn = props => {
	console.log(props);

	return (
		<Log>
			<div>
				<Auth />
				<a href={process.env.REACT_APP_LOGIN}>
					<Button
						style={{
							backgroundColor: "#031424",
							textAlign: "center",
							color: "white",

							cursor: "pointer",
							textTransform: "uppercase",
							fontWeight: "500",
							fontSize: "20px"
						}}
					>
						Log In
					</Button>
				</a>
			</div>
		</Log>
	);
};
const mapStatetoProps = state => state;
export default connect(mapStatetoProps)(LogIn);
