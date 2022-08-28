import React from 'react'
import DarkmodeSwitch from './DarkmodeSwitch'
import LoginButton from './LoginButton'
import './SideBar.css'
import space_small from '../assets/space.png'
import { ReactComponent as GithubIcon } from '../assets/github.svg'
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'
import { useAuth } from '../AuthContext'

function SideBar() {

  const [isAuth, credentials] = useAuth();

  const toggleIconCaption = (target) => {
    const elem = document.getElementById(target)
    
    if(elem.classList.contains("sidebar-icon-caption")) {
      elem.classList.remove("sidebar-icon-caption")
    }
    else {
      elem.classList.add("sidebar-icon-caption")
    }
    
  }

  const openIconLink = (target) => {
    const elem = document.getElementById(target)
    const url = elem.getAttribute("link")
    window.open("https://" + url, "_blank");
  }

  const darkStyle = {
    color: 'white'
  }
  return (

      <div className="col-12 col-sm-3" id='sidebar-container'>

        <div className='d-flex flex-column justify-content-between align-items-center' id="sidebar-content">
          
          <DarkmodeSwitch />
          <div className='text-center my-0 mb-5 my-sm-auto mx-0 mx-sm-5' style={darkStyle} id="sidebar-main-content">
            <div className="h1 mt-0 mt-sm-5 mb-5">
              { isAuth ? `Imperator ${credentials["name"]}` : 'Ashraff Hatz'}
            </div>

            <div className="d-flex justify-content-center mt-5" id="sidebar-icon-container">
              
              <div className='d-inline-block target'
                onMouseEnter={()=> toggleIconCaption("github-small")}
                onMouseLeave={()=> toggleIconCaption("github-small")}
                onClick={()=> openIconLink("icon-github")}>
                <div>
                  <GithubIcon 
                  className="sidebar-icon"
                  id="icon-github"
                  link="www.github.com/First-Derivative"
                  />
                </div>

                <div>
                  <small 
                    className="sidebar-icon-caption" 
                    style={{fontSize: '68%'}}
                    id="github-small"> 
                      First-Derivative 
                  </small>
                </div>
              </div>

              <div className='d-inline-block target'
                onMouseEnter={()=> toggleIconCaption("instagram-small")}
                onMouseLeave={()=> toggleIconCaption("instagram-small")}
                onClick={()=> openIconLink("icon-instagram")}>
                <div>
                  <InstagramIcon 
                    className="sidebar-icon"
                    id="icon-instagram"
                    link="www.instagram.com/ash_dot_h"
                  />
                </div>
                <div>
                  <small 
                  className="sidebar-icon-caption" 
                  style={{fontSize: '68%'}}
                  id="instagram-small"> 
                    ash_dot_h
                  </small>
                </div>
              </div>
            </div>

            <div className="p mt-0 mt-sm-1 mx-5 fw-light">
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