import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import AdminLoginForm from './AdminLoginForm'

class AdminLoginContainer extends Component {
  state = {
    adminEmail: undefined,
    adminPassword: undefined
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    domainData: PropTypes.object.isRequired
  }

  handleChange = (e) => this.setState({[e.target.id]: e.target.value})

  loginAdmin = (e) => {
    e.preventDefault()
    this.props.domainData.loginAdmin(this.state.adminEmail, this.state.adminPassword)
      .then(() => this.props.history.push('/admin'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div>
        <h2>Login</h2>
        <AdminLoginForm
          {...this.state}
          handleChange={this.handleChange}
          loginAdmin={this.loginAdmin} />
      </div>
    )
  }
}

export default withRouter(AdminLoginContainer)
