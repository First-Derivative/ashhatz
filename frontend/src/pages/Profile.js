import React from 'react'
import SideBar from '../components/SideBar'
import AppContent from '../components/AppContent'

function Profile() {
  return (
    <div className="row">
    <SideBar />
    <AppContent title={'Imago'}/>
  </div>
  )
}

export default Profile