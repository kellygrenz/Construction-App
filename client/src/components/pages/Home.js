import React from 'react'

const style = {
  container: {
    width: '100vw',
    display: 'flex'
    
  },
  headerImage: {
    width: '100%',
    height: 'auto'
  }
}

const Home = () => {
  return (
    <div style={style.container}>
      <img style={style.headerImage} src='images/header-img.jpg' />
    </div>
  )
}

export default Home
