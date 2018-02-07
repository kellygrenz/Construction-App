
import React from 'react'
// import Header from './components/structure/header/Header'
import DataProvider from './DataProvider'

import { BrowserRouter } from 'react-router-dom'

const App = () =>
  <BrowserRouter>
    {/* <Header /><DataProvider /> will here instead of <Header /> */}
    <DataProvider />
  </BrowserRouter>
export default App

