import React from 'react'
import Header from './header/Header'
import Main from './main'



const Layout = ({ domainData}) =>
  <div>
    <Header domainData={domainData}/>
    <Main 
      domainData={domainData}
    />
    
  </div>

  // Layout.propTypes = {
  //   domainData: AppPropTypes.domainData
  // }

export default Layout