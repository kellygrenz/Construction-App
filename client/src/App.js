import React from 'react'
import DataProvider from './DataProvider'
import {BrowserRouter} from 'react-router-dom'
// import Header from './structure/header/Header'

const App = () => 
  
<div> 
  <h1>EZ BMP!!!  👊</h1>
  <h2>This is the App</h2>

  <BrowserRouter>
    <DataProvider />
</BrowserRouter>

</div>




export default App

