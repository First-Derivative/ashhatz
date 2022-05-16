import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { ReactComponent as UserIcon } from '../assets/user-circle.svg'
import { ReactComponent as UnlockIcon } from '../assets/unlock.svg'
import { ReactComponent as CloseIcon } from '../assets/remove.svg'
import { useDarkmode } from '../DarkmodeContext'
import { lightTheme, darkTheme } from '../utils/theme'
import CSRFToken from './CSRFToken'

function LoginModal({open, openHandler}) {
  
  useEffect( () => {
    if (!open) return
  
    function handleEscape(e) {
      if(e.key === 'Escape') openHandler()
    }
    window.addEventListener("keyup", handleEscape);
    return () => window.removeEventListener("keyup", handleEscape);

  }, [open])
  
  const darkmode = useDarkmode()
  const [formData, setFormData] = useState({
    'email' : '',
    'password' : ''
  })

  if (!open) return null

  const iconStyle = {
    width: '28px',
    aspectRatio: '1/1',
    filter : darkmode ? darkTheme.svg_filter : lightTheme.svg_filter 
  }

  const smallIconStyle = {
    width: '20px',
    aspectRatio: '1/1',
    filter : darkmode ? darkTheme.svg_filter : lightTheme.svg_filter 
  }

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .8)',
    zIndex: 2000
  }

  const containerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: darkmode ? darkTheme.body : lightTheme.body ,
    zIndex: '2000',
    width: 'auto'
  }

  const handleInput = (e) => setFormData({
    ...formData,
    [e.target.name] : e.target.value
  })



  return ReactDOM.createPortal(
    // tabIndex="1" onKeyDown={(e) => handleKeyEscape(e)}
    <>
    <div style={overlayStyle} >
      <div className="rounded" style={containerStyle}>

        <div className="container">
          {/* Closing BUtton */}
          <div className="row pe-3 pt-3 justify-content-end">
            <div className="col-1 px-0 text-end">
              <CloseIcon 
              style={smallIconStyle} 
              className="target"
              onClick={openHandler}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="row pt-0 mb-4">
            {/* Title  */}
            <div className="col-12 mb-5 text-center">
              <div className="h1"> Admin Login </div>
            </div>
            
            {/* Form */}
            <div className="col-12 mx-auto my-auto">
              
              {/* CSRF Token */}
              <CSRFToken />
              {/* Email */}
              <div className="form-group row justify-content-center">
                  <label htmlFor="email" className="col-1 px-0 text-center align-self-center"><UserIcon style={iconStyle}/></label>
                  <div className="col-7 p-3">
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="email"
                    name="email"
                    defaultValue={formData.email}
                    onChange={e => handleInput(e)}/>
                  </div>
                </div>
              
              {/* Password */}
              <div className="form-group row justify-content-center">
                <label htmlFor="password" className="col-1 px-0 text-center align-self-center"><UnlockIcon style={iconStyle}/></label>
                <div className="col-7 p-3">
                  <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="password"
                  name="password"
                  defaultValue={formData.password}
                  onChange={e => handleInput(e)}/>
                </div>
              </div>

            </div>

            {/* Login Button */}
            <button className={`col-2 mx-auto my-3 btn ${darkmode ? 'btn-outline-light' : 'btn-outline-dark'}`}>
              login
            </button>

          </div>

        </div>

      </div>
    </div>
    </>

  , document.getElementById('login-portal'))
}

export default LoginModal