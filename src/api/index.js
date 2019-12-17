
import axios from './ajax.js'
const basic = "http://localhost:3000"
export const reqLogin = ({ name, pwd, captcha }) => axios({
  method: "post",
  url: basic + "/login_pwd",
  data: {
    name,
    pwd,
    captcha
  }
})

export const req_register = (name, pwd) => axios({
  method: "post",
  url: basic + "/register_pwd",
  data: {
    name,
    pwd
  }
})

export const req_auto = () => axios({
  method: "get",
  url: basic + '/auto_login',
  headers: {
    needToken: true
  }
})
export const req_class_shop = () => axios("/classShop")
export const reqHomepage = () => axios('/homepage')

