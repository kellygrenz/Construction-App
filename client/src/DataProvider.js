import React, { Component } from 'react'
import $ from 'jquery'
import * as UserApi from './lib/userApi'
import * as AdminApi from './lib/adminApi'
import Layout from './components/structure/Layout'

export default class componentName extends Component {
  state = {
    isLoaded: false,
    admin: null,
    posts: null
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
    getWeather: () => { // we need to figure this out
      $.ajax({
        url: 'http://api.wunderground.com/api/c675f48a3374f27d/geolookup/q/94107.json',
        method: 'POST'
      }).done((response) => {
        console.log(response, 'get weather')

        this.setState({post: response.data, isLoaded: true})

      })
    },
    getAllProjects: () => { // not used yet
      $.ajax({
        url: '/api/projects',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'from getAllProjects()')
        this.setState({projects: response.projects, isLoaded: true})
      })
    },
    getAllPosts: () => {
      $.ajax({
        url: '/api/posts',
        method: 'GET'
      }).done((response) => {
        console.log(response, 'getAllPosts()asdfasdfdfasdffffffff')
        this.setState({posts: response.data, isLoaded: true})
      })
    },
    getPost: (id) => {
      $.ajax({
        url: `/api/posts/${id}`,
        method: 'GET'
      }).done((response) => {
        console.log(response, 'getPost() clg')
        // this.setState({})
      })
    },
    // ---------------------------UserApi stuff----------------------------
    newUser: (user) =>
      UserApi.signupUser(user)
        .then(user => {
          console.log('from newUser', user)
          this.setState({user})
          return user
        }),
    loginUser: (email, password) =>
      UserApi.loginUser(email, password)
        .then(user => {
          console.log('loginUser messsage', user)
          // this.setState({user})
          this.methods.getUser(user)
          return user
        }),
    getUser: (user) =>
      UserApi.getUser(user._id)
        .then(user => {
          console.log('from getUser()', user)
          this.setState({user})
          return user
        }),
    logoutUser: () =>
      UserApi.logoutUser()
        .then(user => {
          this.setState({user: null})
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
        .then(admin => {
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
      loggedIn: this.state.admin != null,
      loggedOut: this.state.admin == null
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
