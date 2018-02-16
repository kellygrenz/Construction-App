import React, { Component } from 'react'
import $ from 'jquery'
import * as DeveloperApi from './lib/developerApi'
import * as AdminApi from './lib/adminApi'
import Layout from './components/structure/Layout'

export default class componentName extends Component {
  state = {
    isLoaded: false,
    posts: [],
    admin: null,
    developer: null,
    projects: []
  }

  methods = {
    // getAdmins: () => {
    //   $.ajax({
    //     url: '/api/admins',
    //     method: 'GET'
    //   }).done((response) => {
    //     console.log(response, 'get all admin')
    //     this.setState({admin: response.admin, isLoaded: true})
    //   })
    // },

    // getWeather: () => { // we need to figure this out
    //   $.ajax({
    //     url: 'http://api.wunderground.com/api/c675f48a3374f27d/geolookup/q/94107.json',
    //     method: 'POST'
    //   }).done((response) => {
    //     console.log(response, 'get weather')
    //     this.setState({post: response.data, isLoaded: true})
    //   })
    // },

    getAllProjects: () => { // not used yet
      $.ajax({
        url: '/api/projects',
        method: 'GET'
      }).done((response) => {
        // console.log(response, 'from getAllProjects()')
        this.setState({projects: response.data, isLoaded: true})
      })
    },
    getAllPosts: () => {
      $.ajax({
        url: '/api/posts',
        method: 'GET'
      }).done((response) => {
        // console.log(response, 'getAllPosts()asdfasdfdfasdffffffff')
        this.setState({posts: response.data, isLoaded: true})
      })
    },
    // getPost: (id) => {
    //   $.ajax({
    //     url: `/api/posts/${id}`,
    //     method: 'GET'
    //   }).done((response) => {
    //     console.log(response, 'getPost() clg')
    //     // this.setState({})
    //   })
    // },
    // ---------------------------DeveloperApi stuff----------------------------
    newDeveloper: (developer) =>
      DeveloperApi.signupDeveloper(developer)
        .then(developer => {
          console.log('from newDeveloper', developer)
          this.setState({developer})
          return developer
        }),
    loginDeveloper: (developerEmail, developerPassword) =>
      DeveloperApi.loginDeveloper(developerEmail, developerPassword)
        .then(developer => {
          console.log('loginDeveloper messsage', developer)
          // this.setState({developer})
          this.methods.getDeveloper(developer)
          return developer
        }),
    getDeveloper: (developer) =>
      DeveloperApi.getDeveloper(developer._id)
        .then(developer => {
          console.log('from getDeveloper()', developer)
          this.setState({developer})
          return developer
        }),
    logoutDeveloper: () =>
      DeveloperApi.logoutDeveloper()
        .then(() => {
          this.setState({developer: null})
        }),
    // ---------------------------AdminApi stuff----------------------------
    newAdmin: (admin) =>
      AdminApi.signupAdmin(admin)
        .then(admin => {
          console.log('from newAdmin', admin)
          this.setState({admin})
          return admin
        }),
    loginAdmin: (adminEmail, adminPassword) =>
      AdminApi.loginAdmin(adminEmail, adminPassword)
        .then(admin => {
          console.log('loginAdmin messsage', admin)
          // this.setState({admin})
          this.methods.getAdmin(admin)
          return admin
        }),
    getAdmin: (admin) =>
      AdminApi.getAdmin(admin._id)
        .then(admin => {
          console.log('from getAdmin()', admin)
          this.setState({admin})
          return admin
        }),
    logoutAdmin: () =>
      AdminApi.logoutAdmin()
        .then(() => {
          this.setState({admin: null})
        })
  }

  componentDidMount () {
    this.methods.getAllProjects()
    this.methods.getAllPosts()
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.admin != null, // || this.state.developer != null,
      loggedOut: this.state.admin == null, // || this.state.developer == null
      developerLoggedIn: this.state.developer != null,
      developerLoggedOut: this.state.developer == null
    }
    return (
      <div>
        {
          this.state.isLoaded
            ? <Layout domainData={domainData} />
            : <div>...Loading</div>
        }
      </div>
    )
  }
}
