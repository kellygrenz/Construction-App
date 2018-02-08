import React from 'react'
import Header from './header/Header'
import Main from './Main'
import Footer from './footer/Footer'
import PropTypes from 'prop-types'

const Layout = ({domainData}) => {
  return (
    <div>
      <Header domainData={domainData} />
      <Main domainData={domainData} />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  domainData: PropTypes.object.isRequired
}
export default Layout
