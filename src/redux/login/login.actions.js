import axios from 'axios';
import { LoginActionTypes } from './login.types';
import { config } from '../../utils/config';

export const setLoginRequest = (email, password) => {
	return dispatch => {
		axios
			.post(config.apiUrl + 'login/auth/validate', { email: email, password: password })
			.then(res => {
				// console.log(res);
				// console.log(res.data);
				dispatch({
					type: LoginActionTypes.SET_CURRENT_USER,
					payload: res.data,
				});
			})
			.catch(error => {
				console.log(error);
			});
	};
};
