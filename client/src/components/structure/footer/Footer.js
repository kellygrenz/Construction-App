import React from 'react'

const style = {
  container: {
    background: '#171e21',
    padding: '50px',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff'
  }
}

const Footer = () => {
  return (
    <div style={style.container}>
      <p style={style.text}>Copyright 2018  | EZ BMP</p>
    </div>
  )
}

export default Footer
