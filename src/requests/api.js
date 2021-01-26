import axios from 'axios/index'

const siteUrl = 'http://localhost:3000/'
const headers = {
  'Content-Type': 'application/json'
}
class GoalApi {
  constructor () {
    this.headers = headers
    this.siteUrl = siteUrl
  }
  _axiosRequest ({ headers, url, data, method }) {
    return axios.request({
      headers: {...this.headers, ...headers},
      url: `${this.siteUrl}goals/${url}`,
      data,
      method: method || 'post'
    })
  }
  getAll () {
    this._axiosRequest({ url: 'get-all'})
  }
  getOne (id) {
    this._axiosRequest({ url: `get-one/${id}`})
  }
  add (data) {
    this._axiosRequest({ url: `add`, data})
  }
}
let goalsApi = new GoalApi()

export default goalsApi
