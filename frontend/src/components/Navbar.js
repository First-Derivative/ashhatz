import React from 'react'
import './Navbar.css'
import { darkTheme, lightTheme} from '../utils/theme' 
import { useDarkmode } from '../DarkmodeContext'

function Navbar() {

  const darkmode = useDarkmode();

  const active = {
    color: `${darkmode ? darkTheme.body : lightTheme.body}`,
    backgroundColor: `${darkmode ? darkTheme.text : lightTheme.text}`
  }

  return (
    <div className="row gy-4 gy-sm-5 text-center justify-content-evenly">
      
      <div className="col-6 col-sm-3 px-3 ">
        
        <div style={active}  className={`h5 my-auto mx-auto py-3 w-75 btn-nav target ${ darkmode ? "dark-btn-nav" : "" }`}>
          Stats
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div className={`h5 my-auto mx-auto py-3 w-75 btn-nav target ${ darkmode ? 'dark-btn-nav' : '' }`}>
          Profile
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div className={`h5 my-auto mx-auto py-3 w-75 btn-nav target ${ darkmode ? 'dark-btn-nav' : '' }`}>
          Literature
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div className={`h5 my-auto mx-auto py-3 w-75 btn-nav target ${ darkmode ? 'dark-btn-nav' : '' }`}>
          Movies
        </div>
      
      </div>
    </div>
  )
}

export default Navbar