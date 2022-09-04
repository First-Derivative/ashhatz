import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useAuthUpdate } from '../../AuthContext'
import { ReactComponent as UserIcon } from '../../assets/user-circle.svg'
import { ReactComponent as UnlockIcon } from '../../assets/unlock.svg'
import { ReactComponent as CloseIcon } from '../../assets/remove.svg'
import { useDarkmode } from '../../DarkmodeContext'
import { lightTheme, darkTheme } from '../../utils/theme'
import CSRFToken from '../general/CSRFToken'
import axiosInstance from '../../utils/axios'
import ErrorAlert from '../general/ErrorAlert'

function LoginModal({open, openHandler, updateLoginHandler}) {
  
  useEffect( () => {
    if (!open) return
  
    function handleEscape(e) {
      if(e.key === 'Escape') openHandler()
    }
    window.addEventListener("keyup", handleEscape);
    return () => window.removeEventListener("keyup", handleEscape);

  }, [open])
  
  const darkmode = useDarkmode()
  const [updateAuth, updateCredentials] = useAuthUpdate()
  const [formData, setFormData] = useState({
    'email' : '',
    'password' : ''
  })
  const [error, setError] = useState([])

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
    width: '37.206rem'
  }

  const handleInput = (e) => setFormData({
    ...formData,
    [e.target.name] : e.target.value
  })

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      let email_input = document.getElementById('email')
      let password_input = document.getElementById('password')
      if(e.target === email_input ){
        password_input.focus()
      }
      else {
        handleLogin(e)
      }
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setError([]) // Reset error state to remove alert on login click

    axiosInstance.post("users/auth/login", formData).then( (res) => {
      openHandler()
      updateAuth(true)
      updateCredentials(res.data)
      updateLoginHandler()
    }).catch( (err) => {
      setError([
        err.response.data.error
      ])
    })
  }

  return ReactDOM.createPortal(
    <>
    <div style={overlayStyle} >
      <div className="rounded" id="login-container" style={containerStyle}>

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
            <div className={`col-12 ${error.length > 0 ? '' : 'mb-5'} text-center`}>
              <div className="h1"> Admin Login </div>
            </div>

            {/* ErrorAlert */}
            {error.length > 0 ? ( 
              <ErrorAlert styling={"col-10 col-sm-5 my-3 mx-auto text-center"} message={error} />
            ) : null}  
            
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
                    onChange={e => handleInput(e)}
                    onKeyDown={e => handleEnter(e)}
                    />
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
                  onChange={e => handleInput(e)}
                  onKeyDown={e => handleEnter(e)}
                  />
                </div>
              </div>

            </div>

            {/* Login Button */}
            <button className={`col-4 col-sm-2 mx-auto my-3 btn ${darkmode ? 'btn-outline-light' : 'btn-outline-dark'}`}
            onClick={(e) => handleLogin(e)}>
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