import axios from "axios"
import qs from "qs"
import store from "../redux/store.js"
//import { removeUser } from "../redux/action-creators.js"
import { Toast } from 'antd-mobile';
import history from '../utils/history'

axios.interceptors.request.use((config) => {

  if (config.data instanceof Object && config.method === "post") {
    config.data = qs.stringify(config.data)
  }
  if (config.headers.needToken) {
    const token = store.getState().UpdateUser.token
    if (!token) {
      const err = new Error()
      err.status = 404
      throw err
    } else {
      config.headers.authorization = token
    }

  }
  return config
})

axios.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  if (!error.response) {
    if (error.status === 404) {
      history.replace('/login')
    }
  } else {
    if (error.response.status === 401) {
      // store.dispatch(removeUser())
      history.replace('/login')
      Toast.info('token过期');
    } else {

      Toast.info(error);

    }
  }
  return new Promise(() => { })
})
export default axios