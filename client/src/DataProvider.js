import React, { Component } from 'react'
import $ from 'jquery'
import Layout from './components/structure/Layout'

export default class componentName extends Component {
  state = {
    isLoaded: false,
    admin: null
    // projects: []
  }

  methods = {
    getAdmins: () => {
      $.ajax({
        url: '/api/admins',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'get all admin')
        this.setState({admin: response.admin, isLoaded: true})
      })
    },

    getAllProjects: () => {
      $.ajax({
        url: '/api/projects',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'from getAllProjects()')
        this.setState({projects: response.projects, isLoaded: true})
      })
    }
  }

  componentDidMount () {
    this.methods.getAllProjects()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods
    }
    return (
      <div>
        <Layout domainData={domainData} />
        {/* {
          this.state.isLoaded
            ? <Layout domainData={domainData} />
            : <div>...Loading</div>
        } */}
      </div>
    )
  }
}
