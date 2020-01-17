import { LoginActionTypes } from './login.types';
const initialState = [];
export function authentication(state = initialState, action) {
	switch (action.type) {
		case LoginActionTypes.LOGIN_REQUEST:
			return {
				loggingIn: true,
				user: action.user,
			};
		case LoginActionTypes.LOGIN_SUCCESS:
			return {
				loggedIn: true,
				user: action.user,
			};
		case LoginActionTypes.LOGIN_FAILURE:
			return {};
		case LoginActionTypes.LOGOUT:
			return {};
		default:
			return state;
	}
}
