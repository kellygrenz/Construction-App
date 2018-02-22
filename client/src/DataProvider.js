import React, { Component } from 'react'
import $ from 'jquery'
import * as DeveloperApi from './lib/developerApi'
import * as AdminApi from './lib/adminApi'
import Layout from './components/structure/Layout'

const Wunderground = require('wundergroundnode')
const myKey = 'c675f48a3374f27d'
const wunderground = new Wunderground(myKey)

export default class componentName extends Component {
  state = {
    isLoaded: false,
    posts: [],
    admin: null,
    developer: null,
    projects: [],
    city: null,
    weather: null,
    test: null,
    projectCheck: false
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

    getWeather: (zip) => {
      $.ajax({
        url: `http://api.wunderground.com/api/c675f48a3374f27d/geolookup/conditions/q/${zip}.json`,
        method: 'GET'
      }).done((response) => {
        // console.log('found city!!!!!!!!!!!!!', response.location.city)
        console.log('found weather', response.current_observation.weather)
        // console.log('wunderground', wunderground.conditions.request(weather))
        // console.log('find me', weather)
        this.setState({city: response.location.city, weather: response.current_observation.weather, isLoaded: true})
      })
    },

    getAllProjects: () => {
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
        console.log(response.data, 'getAllPosts()asdfasdfdfasdffffffff')
        this.setState({posts: response.data, isLoaded: true})
      })
    },
    deletePost: (id) => {
      $.ajax({
        url: `/api/posts/${id}`,
        method: 'DELETE'
      }).done((response) => {
        this.methods.getAllPosts()
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
          // console.log('from newDeveloper', developer)
          this.setState({developer})
          return developer
        }),
    loginDeveloper: (developerEmail, developerPassword) =>
      DeveloperApi.loginDeveloper(developerEmail, developerPassword)
        .then(developer => {
          // console.log('loginDeveloper messsage', developer)
          // this.setState({developer})
          this.methods.getDeveloper(developer)
          return developer
        }),
    getDeveloper: (developer) =>
      DeveloperApi.getDeveloper(developer._id)
        .then(developer => {
          // console.log('from getDeveloper()', developer)
          this.setState({developer, projectCheck: true})
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
          // console.log('from newAdmin', admin)
          this.setState({admin})
          return admin
        }),
    loginAdmin: (adminEmail, adminPassword) =>
      AdminApi.loginAdmin(adminEmail, adminPassword)
        .then(admin => {
          // console.log('loginAdmin messsage', admin)
          // this.setState({admin})
          this.methods.getAdmin(admin)
          return admin
        }),
    getAdmin: (admin) =>
      AdminApi.getAdmin(admin._id)
        .then(admin => {
          // console.log('from getAdmin()', admin)
          this.setState({admin})
          return admin
        }),
    logoutAdmin: () =>
      AdminApi.logoutAdmin()
        .then(() => {
          this.setState({admin: null})
        }),

    addPostToProject: (postId) => {
      if (this.state.developer != null) {
        $.ajax({
          url: `/api/developers/projectPage/${this.state.developer._id}`,
          method: 'PUT',
          data: {post_id: postId}
        }).done((response) => {
          console.log('addPostToProject()you know', response)
          this.methods.getDeveloper(this.state.developer)
        })
      } else {
        alert('You must be logged in to continue')
      }
    },
    removePostFromProject: postId => {
      if (this.state.developer != null) {
        $.ajax({
          url: `/api/developers/removeFromProjectPage/${this.state.developer._id}`,
          method: 'PUT',
          data: {post_id: postId}
        }).then((response) => {
          this.methods.getDeveloper(this.state.developer)
        }).catch((error) => {
          console.log('Could not remove from current project', error)
        })
      } else {
        console.log('You must be logged in')
      }
    }
  }

  componentDidMount () {
    this.methods.getAllProjects()
    this.methods.getAllPosts()
    fetch('http://api.wunderground.com/api/c675f48a3374f27d/geolookup/q/80013.json')
      .then(response => {
        if (response.wunderground) {
          return response.json()
        } else {
          response.json({msg: 'no weather'})
        }
      })
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.admin != null,
      loggedOut: this.state.admin == null,
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
