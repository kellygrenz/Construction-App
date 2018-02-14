import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

import Admin from '../pages/admin/Admin'
import AdminLoginContainer from '../pages/authentication/AdminLoginContainer'
import AdminSignUpContainer from '../pages/authentication/AdminSignUpContainer'

import AddPostContainer from '../pages/posts/AddPostContainer'
import PostContainer from '../pages/posts/PostContainer'

import PropTypes from 'prop-types'

const Main = ({domainData}) => {
  console.log(AdminSignUpContainer, 'what Im looking for')
  return (
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/admin-login' render={() => <AdminLoginContainer domainData={domainData} />} />
      <Route path='/admin-sign-up' render={() => <AdminSignUpContainer domainData={domainData} />} />
      <Route path='/admin' render={() => <Admin />} />{/* I'm admin's home and empty */}
      <Route path='/add-posts' render={() => <AddPostContainer domainData={domainData} />} />
      <Route path='/posts' render={() => <PostContainer domainData={domainData} />} />
      <Route path='/' component={Home} />{/* Im not even being used right now */}
    </Switch>

  )
}

Main.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Main
