import React from 'react'
import './Navbar.css'
import { darkTheme, lightTheme} from '../utils/theme' 
import { useDarkmode } from '../DarkmodeContext'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const darkmode = useDarkmode();

  const active = {
    color: `${darkmode ? darkTheme.body : lightTheme.body}`,
    backgroundColor: `${darkmode ? darkTheme.text : lightTheme.text}`
  }

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
        style={active}  
        className={`h5 my-auto mx-auto py-3 w-75 btn-nav target ${ darkmode ? "dark-btn-nav" : "" }`}
        onClick={handleHomepage}
        >
          Stats
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div 
        className={`h5 my-auto mx-auto py-3 w-75 btn-nav target ${ darkmode ? 'dark-btn-nav' : '' }`}
        onClick={handleProfile}
        >
          Profile
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div 
        className={`h5 my-auto mx-auto py-3 w-75 btn-nav target ${ darkmode ? 'dark-btn-nav' : '' }`}
        onClick={handleLiterature}
        >
          Literature
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div className={`h5 my-auto mx-auto py-3 w-75 btn-nav target ${ darkmode ? 'dark-btn-nav' : '' }`}
          onClick={handleMedia}
        >
          Media
        </div>
      
      </div>
    </div>
  )
}

export default Navbar