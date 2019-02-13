import axios from 'axios'

const request = {}
const methods = ['get', 'post', 'put', 'delete']
for (let i in methods) {
  request[methods[i]] = function (url, params = {}) {
    if (process.server) {
      params.baseURL = 'http://127.0.0.1:3000'
    }
    return axios[methods[i]] (url, params)
  }
}

export default request
