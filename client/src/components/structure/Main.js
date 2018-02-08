import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'

import Admin from '../pages/admin/Admin'
import { AddAdminContainer } from '../pages/admin/AddAdminContainer'
import { AdminContainer } from '../pages/admin/AdminContainer'

import AddPostContainer from '../pages/posts/AddPostContainer'
import PostContainer from '../pages/posts/PostContainer'

import PropTypes from 'prop-types'

const Main = ({domainData}) => {
  return (
    <Switch>
      <Route path='/add-posts' render={() => <AddPostContainer domainData={domainData} />} />
      <Route path='/admin-sign-up' render={() => <AddAdminContainer domainData={domainData} />} />
      <Route path='/posts' render={() => <PostContainer domainData={domainData} />} />
      <Route path='/admin' render={() => <Admin />} />
      <Route path='/login' render={() => <AdminContainer />} />
      <Route path='/' component={Home} />{/* Im not even being used right now */}
    </Switch>
  )
}

Main.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Main
