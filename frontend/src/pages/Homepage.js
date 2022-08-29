import React from 'react'
import SideBar from '../components/SideBar'
import AppContent from '../components/AppContent'
import PortfolioContent from '../components/PortfolioContent'

function Homepage() {

  return (
      <div className="row">
        <SideBar />
        <AppContent title={'Portfolio'}>
          <PortfolioContent
          />
        </AppContent>

      </div>
  )
}

export default Homepage