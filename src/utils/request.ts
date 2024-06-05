import axios from 'axios';

const request = axios.create({
	withCredentials: true,
	timeout: 15000,
});

request.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

request.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default request;
