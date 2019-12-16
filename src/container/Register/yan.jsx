import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./yan.less"
import { req_register } from "../../api"
import { saveUser } from "../../redux/action-creators.js"
import store from "../../redux/store.js"
import { withRouter } from "react-router-dom"
const Basic = ({ history }) => (
  <div>
    <Formik
      // 初始化值   phone为下面表单的name值
      initialValues={{ phone: '', password: '', ispassword: "", repetition: "" }}
      // 验证传入的值
      validate={values => {
        // 创建一个error对象
        const errors = {};
        // 判断当前的值phone是否为空 
        if (!values.phone) {
          errors.phone = '手机号不能为空';
        } else if (
          //  正则验证通过
          !/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(values.phone)
        ) {
          // 未通过
          errors.phone = '格式不正确';
        }
        if (!values.password) {
          errors.password = "密码不能为空"
        } else if (!/^[0-9]{4,8}$/.test(values.password)) {
          errors.password = '密码格式不正确';
        }

        if (!values.ispassword) {
          errors.ispassword = "密码不能为空"
        } else if (!/^[0-9]{4,8}$/.test(values.ispassword)) {
          errors.ispassword = '密码格式不正确';
        }
        if (values.ispassword !== values.password) {
          errors.repetition = "2次密码不一致"
        }
        // 返回错误对象  如果有则提交失败  没有则成功
        return errors;
      }}
      // 第一个为表单验证通过的值    第二个为一个函数
      onSubmit={async (values, { setSubmitting }) => {
        const { phone, password } = values

        const result = await req_register(phone, password)
        if (result.code === 0) {
          store.dispatch(saveUser(result.data))
          history.replace("/shopping'")
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="verification">
          <Field type="text" name="phone" className="inputphone" placeholder="手机号码" />
          <ErrorMessage name="phone" component="div" className="error" />
          <Field type="password" name="password" className="inputpsw" placeholder="密码" />
          <ErrorMessage name="password" component="div" className="error" />
          <Field type="password" name="ispassword" className="inputpsw" placeholder="确认密码" />
          <ErrorMessage name="ispassword" component="div" className="error" />
          <ErrorMessage name="repetition" component="div" className="error" />
          <button type="submit" disabled={isSubmitting} className="login" >
            登录
          </button>
        </Form>
      )}
    </Formik>
  </div>
);



export default withRouter(Basic)