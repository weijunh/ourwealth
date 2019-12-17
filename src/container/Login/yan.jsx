import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./yan.less"
import { saveUser } from "../../redux/action-creators.js"
import store from "../../redux/store.js"
import { reqLogin } from "../../api"
import { withRouter } from "react-router-dom"
import { Toast } from "antd-mobile"
const Basic = ({ history }) => (
  <div>
    <Formik
      // 初始化值   phone为下面表单的name值
      initialValues={{ phone: '', password: '', verification: "" }}
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
          errors.phone = '密码格式不正确';
        }

        // 返回错误对象  如果有则提交失败  没有则成功
        return errors;
      }}
      // 第一个为表单验证通过的值    第二个为一个函数
      onSubmit={async (values, { setSubmitting }) => {
        const { phone, password, verification } = values
        const result = await reqLogin({ name: phone, pwd: password, captcha: verification })
        if (result.code === 0) {
          store.dispatch(saveUser(result.data))
          history.replace('/shopping')
        }
        if (result.code === 1) {
          Toast.info('用户名或密码错误');
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="verification1">
          <Field type="text" name="phone" className="inputphone" placeholder="手机号码" />
          <ErrorMessage name="phone" component="div" className="error" />
          <Field type="password" name="password" className="inputpsw" placeholder="密码" />
          <ErrorMessage name="password" component="div" className="error" />

          <Field type="text" name="verification" className="inputyzm" placeholder="验证码" />
          <button type="submit" disabled={isSubmitting} className="login" >
            登录
          </button>


        </Form>
      )}
    </Formik>
  </div>
);

export default withRouter(Basic);