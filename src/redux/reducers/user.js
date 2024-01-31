import * as actionTypes from '../actionTypes/actionType';
const initialState = {
	userData: null
};
const user = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_USER_DATA:
			return {
				...state,
				userData: payload,
			};
		default:
			return state;
	}
};
export default user;