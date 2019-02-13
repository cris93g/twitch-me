import React, { Component } from "react";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">{routes}</div>
			</Provider>
		);
	}
}

export default App;
