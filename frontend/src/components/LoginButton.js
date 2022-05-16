import React, { useState } from 'react'
import { ReactComponent as LockLoginIcon } from '../assets/lock.svg'
import { ReactComponent as UnlockLoginIcon } from '../assets/unlock.svg'
import { useDarkmode } from '../DarkmodeContext'
import { darkTheme, lightTheme } from '../utils/theme'
import LoginModal from './LoginModal'

function LoginButton() {

  const darkmode = useDarkmode();
  const [isHover, setIsHover] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  const container = {
    position: 'absolute',
    bottom: '5%',
    color: `${ darkmode ? darkTheme.body : lightTheme.text}`,
    backgroundColor: `${ darkmode ? darkTheme.text : lightTheme.body}`,
  }

  const icon = {
    width : '16px',
    height : '16px',
    filter : 'invert(0%) sepia(2%) saturate(4%) hue-rotate(179deg) brightness(94%) contrast(92%)'
  }

  const updateHover = (input) => {
    setIsHover(input)
  }

  const updateModal = (input) => {
    setModalOpen(input)
  }

  return (
    <>
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
          Admin Access
        </div>
  
      </div>
      <LoginModal open={modalOpen} openHandler={() => updateModal(false)} />
    </>
  )
}

export default LoginButton