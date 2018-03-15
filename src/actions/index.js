import {
	SCRIPT_API_URL,
} from '../_config';

export const PARSE_LOADING = 'PARSE_LOADING';
export const PARSE_ERROR = 'PARSE_ERROR';
export const PARSE_SUCCESS = 'PARSE_SUCCESS';

export const MAP_LOADING = 'MAP_LOADING';
export const MAP_ERROR = 'MAP_ERROR';
export const MAP_SUCCESS = 'MAP_SUCCESS';

const parse = (input) => async dispatch => {
	try {

		const body = {
			'data': input
		}

		const parsing = await fetch(`${SCRIPT_API_URL}/parse`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(body),
		});

		dispatch({
			type: PARSE_LOADING,
			data: '',
		});

		if (!parsing.ok) {
			dispatch({
				type: PARSE_ERROR,
				data: '',
			});
		} else {

			const res = await parsing.json();

			dispatch({
				type: PARSE_SUCCESS,
				data: res,
			});

			dispatch({
				type: MAP_LOADING,
				data: '',
			});

			const init_map = await fetch(`${SCRIPT_API_URL}/map/init`, {
				method: 'POST',
				mode: 'cors',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(res),
			});

			if (!init_map.ok) {
				dispatch({
					type: MAP_ERROR,
					data: '',
				});
			} else {

				const res = await init_map.json();

				dispatch({
					type: MAP_SUCCESS,
					data: res,
					turn: 0,
				});
			}
		}
	} catch (err) {
		console.error(err);
	}
};


const get_map = (parsing, i) => async dispatch => {
	try {

		dispatch({
			type: MAP_LOADING,
			data: '',
		});

		const map = await fetch(`${SCRIPT_API_URL}/map/turn/${i}`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(parsing),
		});

		if (!map.ok) {
			dispatch({
				type: MAP_ERROR,
				data: '',
			});
		} else {

			const res = await map.json();

			dispatch({
				type: MAP_SUCCESS,
				data: res,
				turn: i,
			});
		}

	} catch (err) {
		console.error(err);
	}
};


export { parse, get_map };
