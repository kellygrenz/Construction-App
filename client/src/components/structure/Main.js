import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Admin from '../pages/admin/Admin'
import AdminLoginContainer from '../pages/authentication/AdminLoginContainer'
import AdminSignUpContainer from '../pages/authentication/AdminSignUpContainer'
import Developer from '../pages/developer/Developer'
import DeveloperLoginContainer from '../pages/authentication/DeveloperLoginContainer'
import DeveloperSignUpContainer from '../pages/authentication/DeveloperSignUpContainer'
import AddPostContainer from '../pages/posts/AddPostContainer'
import PostContainer from '../pages/posts/PostContainer'
import PropTypes from 'prop-types'
import ProjectContainer from '../pages/projects/ProjectContainer'

const Main = ({domainData}) => {
  return (
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/projects' render={() => <ProjectContainer domainData={domainData} />} />
      <Route path='/admin-sign-up' render={() => <AdminSignUpContainer domainData={domainData} />} />
      <Route path='/admin-login' render={() => <AdminLoginContainer domainData={domainData} />} />
      <Route path='/admin' render={() => <Admin domainData={domainData} />} />{/* I'm admin's home and empty */}
      <Route path='/add-posts' render={() => <AddPostContainer domainData={domainData} />} />
      <Route path='/posts' render={() => <PostContainer domainData={domainData} />} />
      <Route path='/developer-sign-up' render={() => <DeveloperSignUpContainer domainData={domainData} />} />
      <Route path='/developer-login' render={() => <DeveloperLoginContainer domainData={domainData} />} />
      <Route path='/developer' render={() => <Developer domainData={domainData} />} />
      <Route path='/' component={Home} />{/* Im not even being used right now */}
    </Switch>

  )
}

Main.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Main
