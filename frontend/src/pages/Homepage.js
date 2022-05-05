import React from 'react'
import SideBar from '../components/SideBar'
import AppContent from '../components/AppContent'

function Homepage() {
  return (
      <div className="row">
        <SideBar />
        <AppContent title={'Portfolio'}/>
      </div>
  )
}

export default Homepage