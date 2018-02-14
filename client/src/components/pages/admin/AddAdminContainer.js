import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
import PropTypes from 'prop-types'
import AddAdminForm from './AddAdminForm'

class AddAdminContainer extends Component {
  state = {
    name: undefined,
    email: undefined
  }
  static propTypes = {
    domainData: PropTypes.object.isRequired
    // history: PropTypes.object.isRequired
  }

  // methodName = {
  //   addAdmin: (e) => {
  //     e.preventDefault()
  //     const {name, email} = this.state
  //     const admin = {name, email}
  //     console.log('onSubmit()', admin)
  //     $.ajax({
  //       url: '/api/admins',
  //       method: 'POST',
  //       data: admin
  //     }).done((response) => {
  //       this.props.domiainData.addAdmin()
  //       this.props.history.push('/admin')
  //     })
  //   }
  onChangeHandler = (e) => this.setState({[e.target.id]: e.target.value})

  addAdmin = (e) => {
    e.preventDefault()
    const {name, email} = this.state
    const admin = {name, email}
    console.log('onSubmit()', admin)
    $.ajax({
      url: '/api/admins',
      method: 'POST',
      data: admin
    }).done((response) => {
      this.props.domainData.addAdmin()
      // this.props.history.push('/admin')
    })
  }

  render () {
    // const domainDataAdd = {
    //   ...this.props.domainData,
    //   ...this.state,
    //   ...this.methodName
    // }
    return (
      <div>
        {/* <AddAdminForm domainDataAdd={domainDataAdd} /> */}
        <AddAdminForm
          {...this.state}
          addAdmin={this.addAdmin}
          onChangeHandler={this.onChangeHandler} />
      </div>
    )
  }
}

export default withRouter(AddAdminContainer)
