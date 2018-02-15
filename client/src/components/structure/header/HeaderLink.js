import React from 'react'
import PropTypes from 'prop-types'

const HeaderLink = ({onClick, children}) => {
  return (
    <a onClick={onClick}>{children}</a>
  )
}

HeaderLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
export default HeaderLink
