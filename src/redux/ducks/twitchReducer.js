import axios from "axios";

const GET_STREAMS = "GET_STREAMS";
const GET_TOP_GAMES = "GET_TOP_GAMES";

export function getStreams() {
	return {
		type: GET_STREAMS,
		payload: axios.get("/api/top-streams")
	};
}
export function getTopGames() {
	return {
		type: GET_TOP_GAMES,
		payload: axios.get("/api/top-games")
	};
}

const initialState = {
	streams: {},
	topGames: {}
};

export default function twitchReducer(state = initialState, action) {
	switch (action.type) {
		case `${GET_STREAMS}_FULFILLED`:
			return {
				...state,
				user: action.payload.data
			};
		case `${GET_STREAMS}_REJECTED`:
			return {
				...state
			};

		case `${GET_TOP_GAMES}_FULFILLED`:
			return {
				...state,
				user: action.payload.data
			};
		case `${GET_TOP_GAMES}_REJECTED`:
			return {
				...state
			};

		default:
			return state;
	}
}
