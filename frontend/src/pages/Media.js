import React from 'react'
import SideBar from '../components/SideBar'
import AppContent from '../components/AppContent'

function Media() {
  return (
    <div className="row">
    <SideBar />
    <AppContent title={'Point, action, and shoot'}>
      <div className="row ms-2">

        <div className="col-12 h3">
          WIP...
        </div>

        <div className="col-12">
          Come back tomorrow to see if I've released an update.
        </div>
      </div>
    </AppContent>
  </div>
  )
}

export default Media