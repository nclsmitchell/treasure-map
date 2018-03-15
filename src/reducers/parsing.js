import { PARSE_LOADING, PARSE_SUCCESS, PARSE_ERROR } from '../actions';

let initialState = {
	parsing: null,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case PARSE_LOADING:
			return {
				...state,
				loading: true
			};
		case PARSE_SUCCESS:
			return {
				...state,
				parsing: action.data,
				loading: false,
			};
		case PARSE_ERROR:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
