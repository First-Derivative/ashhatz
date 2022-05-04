import React from 'react'
import { ReactComponent as LoginIcon } from '../assets/unlock.svg'
import { useDarkmode } from '../DarkmodeContext'
import { darkTheme, lightTheme } from '../utils/theme'

function LoginButton() {

  const darkmode = useDarkmode();

  const container = {
    position: 'absolute',
    bottom: '5%',
    color: `${ darkmode ? darkTheme.body : lightTheme.text}`,
    backgroundColor: `${ darkmode ? darkTheme.text : lightTheme.body}`
  }

  const icon = {
    width : '16px',
    height : '16px',
    filter : `${ darkmode ?
      'invert(7%) sepia(1%) saturate(1043%) hue-rotate(314deg) brightness(98%) contrast(94%)' :
      'none'
    }`
  }

  return (
    <div style={container} className="py-2 px-3 rounded-pill d-flex flex-row justify-content-between target">
      <LoginIcon style={icon} className="my-auto"/>
      <div className='ps-2'>
        Admin Access
      </div>
    </div>
  )
}

export default LoginButton