import React, { useState, useEffect } from 'react'
import { ReactComponent as LockLoginIcon } from '../assets/lock.svg'
import { ReactComponent as UnlockLoginIcon } from '../assets/unlock.svg'
import { useAuth, useAuthUpdate } from '../AuthContext'
import { useDarkmode } from '../DarkmodeContext'
import { darkTheme, lightTheme } from '../utils/theme'
import axiosInstance from '../utils/axios'
import LoginModal from './LoginModal'

function LoginButton() {
  const [isAuth, credentials] = useAuth()
  const [updateAuth, updateCredentials] = useAuthUpdate()
  const darkmode = useDarkmode();
  const [isHover, setIsHover] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [signOut, setSignOut] = useState(false)

  const container = {
    position: 'absolute',
    bottom: '5%',
    color: `${ darkmode ? darkTheme.body : lightTheme.text}`,
    backgroundColor: `${ darkmode ? darkTheme.text : lightTheme.body}`,
  }

  const icon = {
    width : '20px',
    aspectRatio: '1/1',
    filter : 'invert(0%) sepia(2%) saturate(4%) hue-rotate(179deg) brightness(94%) contrast(92%)'
  }

  useEffect(() => {
    if( signOut === true ){
      setTimeout(() => {
        setSignOut(false)
        clearTimeout(this);  
      }, 3000);
    }
    return
  }, [signOut]);

  const updateHover = (input) => {
    setIsHover(input)
  }

  const handleSignout = () => {

    axiosInstance.post("users/auth/logout").then( (res) => {
      setSignOut(true)
      updateAuth(false)
    }).catch( (err) => {
      console.log(err.response.data.error)
    })
  }

  const updateModal = (input) => {
    if(input && isAuth) {
      handleSignout()
      return
    }
    setModalOpen(input)
  }

  return (
    <>

      { signOut && <div className="position-absolute" style={{ 'bottom': '5rem' }} >
        <div class="alert alert-success" role="alert">
          Sign out success!
        </div> 
      </div> }

      <div 
      style={container} 
      className="py-2 px-3 rounded-pill d-flex flex-row justify-content-between target" 
      id="btn-admin-access"
      onMouseEnter={() => updateHover(true)}
      onMouseLeave={() => updateHover(false)}
      onClick={() => updateModal(true)}
      >
  
        { isHover ? ( <UnlockLoginIcon style={icon} className="my-auto"/> ) : 
        ( <LockLoginIcon style={icon} className="my-auto"/>) }
  
        <div className='ps-2'>
          { isAuth ? 'Sign Out' : 'Admin Access' }
        </div>

      </div>
      <LoginModal open={modalOpen} openHandler={() => updateModal(false)} />
    </>
  )
}

export default LoginButton