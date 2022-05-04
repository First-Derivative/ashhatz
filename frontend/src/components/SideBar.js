import React from 'react'
import './SideBar.css'
import space_small from '../assets/space.png'
import { useDarkmode } from '../DarkmodeContext'
import DarkmodeSwitch from './DarkmodeSwitch'

function SideBar() {
  const darkmode = useDarkmode();
  const renderedColor = darkmode ? '#7A6E6E' : 'white'

  const darkStyle = {
    color: renderedColor
  }
  return (

      <div className="col-3 vh-100 " id='sidebar-container'>
        <div className='d-flex flex-column min-vh-100 justify-content-between align-items-center'>
          <DarkmodeSwitch />
          <div className='my-auto mx-0 mx-sm-5' style={darkStyle}>
            <div className="h1 mt-5">
              Ashraff Hatz
            </div>
            <div className="p mt-5 ">
              Developer.
              Dungeon Delver.
              Pokemon Master.
            </div>
          </div>
  
          <div className=''>
            <img src={space_small} alt="The Final Frontier" className="img-fluid" />
          </div>
        </div>
      </div>

  )
}

export default SideBar