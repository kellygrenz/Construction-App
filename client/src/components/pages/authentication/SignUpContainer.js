import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import PropTypes from 'prop-types'

class SignUpContainer extends Component {
  state = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    domainData: PropTypes.object.isRequired
  }
  onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    console.log('newUser message')
    this.props.domainData.newUser(this.state)
      .then(() => this.props.history.push('/login'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div>
        <h2>Sign up</h2>
        <SignUpForm
          {...this.state}
          onChangeHandler={this.onChangeHandler}
          onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default withRouter(SignUpContainer)
