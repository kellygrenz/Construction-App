import React from 'react'
import DeveloperHeader from '../../structure/header/DeveloperHeader'
// import PostContainer from '../post/PostContainer'

const Developer = ({domainData}) => {
  return (
    <div>
      <DeveloperHeader domainData={domainData} />
      {/* <PostContainer
        domainData={domainData}
      /> */}
    </div>
  )
}

export default Developer
