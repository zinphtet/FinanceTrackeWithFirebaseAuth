const authReducer = (state, action) => {
	switch (action.type) {
		case 'SIGN_UP':
			return {
				...state,
				user: action.payload,
			};
		case 'LOG_IN':
			return {
				...state,
				user: action.payload,
			};
		case 'LOG_OUT':
			return {
				...state,
				user: null,
			};
		case 'AUTH_STATE':
			return {
				...state,
				user: action.payload,
				authReady: true,
			};
		default:
			return { ...state };
	}
};

export default authReducer;
