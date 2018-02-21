import React from 'react'
import DeveloperHeader from '../../structure/header/DeveloperHeader'
import PostContainer from '../posts/PostContainer'

const Developer = ({domainData}) => {
  return (
    <div>
      <DeveloperHeader domainData={domainData} />
      <PostContainer
        domainData={domainData}
      />
    </div>
  )
}

export default Developer
