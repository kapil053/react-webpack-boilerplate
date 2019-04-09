const initialState = {
	name: 'kapil'
};

function test(state = initialState, action) {
	switch (action.type) {
	case 'UPDATE_NAME':
		return {
			...state,
			name: action.name
		};
	default:
		return state;
	}
}

export default test;
