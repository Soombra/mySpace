import axios from 'axios'
const request = {
	get (url, params) {
		return axios.get(url, {
			baseURL: 'http://127.0.0.1:3000',
			...params
		})
	}
}
export default request