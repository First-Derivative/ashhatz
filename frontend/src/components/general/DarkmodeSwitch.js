import React from 'react'
import { useDarkmodeUpdate, useDarkmode } from '../../DarkmodeContext';
import { ReactComponent as ToggleOn } from '../../assets/toggle-on.svg';
import { ReactComponent as ToggleOff } from '../../assets/toggle-off.svg'
import { ReactComponent as DarkModeIcon } from '../../assets/moon.svg'
import { ReactComponent as SunModeIcon } from '../../assets/sun.svg'


function DarkmodeSwitch() {
  const darkmode = useDarkmode();
  const handleClick = useDarkmodeUpdate();

  const iconStyle = {
    width: '32px',
    height: '32px',
    cursor: 'pointer'
  }

  const textIconStyle = {
    width: '24px',
    height: '24px',
  }

  return (
    <div className="d-inline-flex px-3 px-sm-5 mt-3 mt-sm-5" id="darkmode-container">
        {darkmode ?  
        <ToggleOn 
        style={iconStyle} 
        onClick={handleClick}/> : 
        < ToggleOff 
        style={iconStyle} 
        onClick={handleClick}/>}
      <div 
      className={`p my-auto ms-3`}
      id="darkmode-text"
      >
        { darkmode ? <DarkModeIcon className="me-2" style={textIconStyle}/> : <SunModeIcon className="me-2" style={textIconStyle}/> }
        { darkmode ? 'Dark mode' : 'Light mode'}
      </div>
    </div>
  )
}

export default DarkmodeSwitch