import React from 'react'
import SideBar from '../components/general/SideBar'
import AppContent from '../components/general/AppContent'
import ProfileContent from '../components/profile/ProfileContent'

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