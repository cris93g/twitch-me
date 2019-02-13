import { createStore, applyMiddleware, combineReducers } from "redux";

import promiseMiddleWare from "redux-promise-middleware";
import userReducer from "./ducks/userReducer";
import twitchReducer from "./ducks/twitchReducer";

const middleware = applyMiddleware(promiseMiddleWare);

const combinedReducers = combineReducers({
	userReducer,
	twitchReducer
});

const store = createStore(combinedReducers, middleware);

export default store;
