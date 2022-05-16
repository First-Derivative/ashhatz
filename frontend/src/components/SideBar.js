import React from 'react'
import DarkmodeSwitch from './DarkmodeSwitch'
import LoginButton from './LoginButton'
import './SideBar.css'
import space_small from '../assets/space.png'
import { useAuth } from '../AuthContext'

function SideBar() {

  const [isAuth, credentials] = useAuth();

  const darkStyle = {
    color: 'white'
  }
  return (

      <div className="col-12 col-sm-3" id='sidebar-container'>

        <div className='d-flex flex-column justify-content-between align-items-center' id="sidebar-content">
          <DarkmodeSwitch />
          <div className='text-center my-0 mb-5 my-sm-auto mx-0 mx-sm-5' style={darkStyle} id="sidebar-main-content">
            <div className="h1 mt-0 mt-sm-5">
              { isAuth ? `Imperator ${credentials["name"]}` : 'Ashraff Hatz'}
            </div>
            <div className="p mt-0 mt-sm-5 mx-5 fw-light">
              Developer.
              Dungeon Delver.
              Pokemon Master.
            </div>
          </div>
  
          <div className=''>
            <img src={space_small} alt="The Final Frontier" className="img-fluid" id="space-banner" />
          </div>

          <LoginButton />
          
        </div>


      </div>

  )
}

export default SideBar