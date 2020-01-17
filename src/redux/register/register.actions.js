import axios from 'axios';
import { config } from '../../utils/config';
const config_data = {
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
};
export const registerUser = userData => {
	return dispatch => {
		console.log(userData);
		axios
			.post(config.apiUrl + 'register/saveUser', userData, config_data)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};
};
