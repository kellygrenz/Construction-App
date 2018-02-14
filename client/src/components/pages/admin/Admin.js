import React from 'react'
import AdminHeader from '../../structure/header/AdminHeader'
import PostContainer from '../posts/PostContainer'


const Admin = ({domainData}) => {
  return (
    <div>
    

      <AdminHeader />

      <PostContainer 
        domainData={domainData}
      />
    </div>
  )
}

export default Admin
