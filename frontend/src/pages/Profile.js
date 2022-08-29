import React from 'react'
import SideBar from '../components/SideBar'
import AppContent from '../components/AppContent'
import ProfileContent from '../components/ProfileContent'

function Profile() {
  return (
    <div className="row">
    <SideBar />
    <AppContent title={'Imago'}>
      <ProfileContent/>
    </AppContent>
  </div>
  )
}

export default Profile