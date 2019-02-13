import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./content/Landing/Landing";
export default (
	<Switch>
		<Route component={Landing} exact path="/" />
	</Switch>
);
