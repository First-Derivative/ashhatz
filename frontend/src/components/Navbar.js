import React from 'react'
import './Navbar.css'
import { useDarkmode } from '../DarkmodeContext'
import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const darkmode = useDarkmode();

  const {pathname} = useLocation();
  console.log(pathname);

  const handleHomepage = () => {
    navigate('/');
    
  }

  const handleProfile = () => {
    navigate('/profile');
  }

  const handleLiterature = () => {
    navigate('/literature')
  }

  const handleMedia = () => {
    navigate('/media')
  }
  return (
    <div className="row gy-4 gy-sm-5 text-center justify-content-evenly">
      
      <div className="col-6 col-sm-3 px-3 ">
        
        <div 
        className={`h5 my-auto mx-auto py-3 w-75 btn-nav target 
        ${ pathname === '/' ? 'active' : ''}
        ${ darkmode ? "dark-btn-nav" : "" }`}
        onClick={handleHomepage}
        >
          Stats
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div 
        className={`h5 my-auto mx-auto py-3 w-75 btn-nav target
        ${ pathname === '/profile' ? 'active' : ''}
        ${ darkmode ? 'dark-btn-nav' : '' }`}
        onClick={handleProfile}
        >
          Profile
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div 
        className={`h5 my-auto mx-auto py-3 w-75 btn-nav target
        ${ pathname === '/literature' ? 'active' : ''}
        ${ darkmode ? 'dark-btn-nav' : '' }`}
        onClick={handleLiterature}
        >
          Literature
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div className={`h5 my-auto mx-auto py-3 w-75 btn-nav target
        ${ pathname === '/media' ? 'active' : ''}
        ${ darkmode ? 'dark-btn-nav' : '' }`}
          onClick={handleMedia}
        >
          Media
        </div>
      
      </div>
    </div>
  )
}

export default Navbar