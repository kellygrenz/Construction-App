
import React, {Component} from 'react'
import Layout from './components/structure/Layout'
// import * as UserApi from './lib/userApi'
import $ from 'jquery'

class DataProvider extends Component {

  state = {
    isLoaded: false,
    projects: []
  }

  methods = {
    getAllProjects: () => {
      $.ajax({
        url: '/api/projects',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'projects from SERVER')
        this.setState({ isLoaded: true, projects: response.data})
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
      this.state.isLoaded 
        ? <Layout domainData={domainData}/>
        : <div>...Loading</div>
    )
  }
}

  export default DataProvider
