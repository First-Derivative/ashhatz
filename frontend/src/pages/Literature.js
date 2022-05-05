import React from 'react'
import SideBar from '../components/SideBar'
import AppContent from '../components/AppContent'

function Literature() {
  return (
    <div className="row">
      <SideBar />
      <AppContent title={'Pen, paper, and books'}/>
    </div>
  )
}

export default Literature