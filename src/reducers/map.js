import { MAP_LOADING, MAP_SUCCESS, MAP_ERROR } from '../actions';

let initialState = {
	treasure_map: [],
	leaderboard: {},
	adventurers: [],
	treasures: [],
	turn: 0,
	turn_count: 0,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case MAP_LOADING:
			return {
				...state,
				loading: true
			};
		case MAP_SUCCESS:
			return {
				...state,
				treasure_map: action.data.treasure_map,
				leaderboard: action.data.leaderboard,
				adventurers: action.data.adventurers,
				treasures: action.data.treasures,
				turn: action.turn,
				turn_count: action.data.turn_count,
				loading: false,
			};
		case MAP_ERROR:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}
