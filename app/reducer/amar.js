const initialState = {
	age: 30
};

function amar(state = initialState, action) {
	switch (action.type) {
	case 'UPDATE_AGE':
		return {
			...state,
			age: 35
		};
	default:
		return state;
	}
}

export default amar;
