import React, { Component } from "react"
import { withRouter, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { reqauto } from "../redux/action-creators.js"
function WithCheckLogin (WrappedComponent) {
  return connect(state => ({ token: state.UpdateUser.token }), { reqauto })(withRouter(class extends Component {

    render () {
      const { token, ...res } = this.props
      const { location: { path } } = res
      if (token) {
        this.props.reqauto()
        if (path === "/login" || path === "/register") {
          return <Redirect to="/shopping"></Redirect>
        }

      }

      return <WrappedComponent  {...res}  ></WrappedComponent>
    }
  }))
}
export default WithCheckLogin