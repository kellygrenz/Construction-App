import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AdminSignUpForm from './AdminSignUpForm'
import PropTypes from 'prop-types'

const style = {
  container: {
    background: '#263238',
    padding: '10%'
  }
}

class AdminSignUpContainer extends Component {
  state = {
    adminFirstName: undefined,
    adminLastName: undefined,
    adminEmail: undefined,
    adminPassword: undefined
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    domainData: PropTypes.object.isRequired
  }
  onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

  submitAdminToServer = (e) => {
    e.preventDefault()
    this.props.domainData.newAdmin(this.state)
      .then(() => this.props.history.push('/admin-login'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div style={style.container}>
        
        <AdminSignUpForm
          {...this.state}
          onChangeHandler={this.onChangeHandler}
          submitAdminToServer={this.submitAdminToServer} />
      </div>
    )
  }
}

export default withRouter(AdminSignUpContainer)
