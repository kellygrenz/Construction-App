import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'

const Main = () => {
  return (
    <div>
      <Route path='/' component={Home} />{/* Im not even being used right now */}
    </div>
  )
}

export default Main
