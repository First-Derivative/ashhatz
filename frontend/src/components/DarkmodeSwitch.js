import React, { useState} from 'react'
import { useDarkmodeUpdate, useDarkmode } from '../DarkmodeContext';
import { ReactComponent as ToggleOn } from '../assets/toggle-on.svg';
import { ReactComponent as ToggleOff } from '../assets/toggle-off.svg'

function DarkmodeSwitch() {
  const darkmode = useDarkmode();
  const handleClick = useDarkmodeUpdate();

  const [ isShown, setIsShown ] = useState(false)

  const iconStyle = {
    width: '32px',
    height: '32px',
    cursor: 'pointer'
  }

  const handleMouseEnter = () =>{
    setIsShown(true)
  }
  const handleMouseLeave = () =>{
    setIsShown(false)
  }

  return (
    <div className="d-inline-flex px-3 px-sm-5 mt-3 mt-sm-5" onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
        {darkmode ?  
        <ToggleOn 
        style={iconStyle} 
        onClick={handleClick}/> : 
        < ToggleOff 
        style={iconStyle} 
        onClick={handleClick}/>}
      <div className={`p my-auto ms-3 ${ isShown ? '' : 'invisible'}`}>
        { darkmode ? '- Dark mode' : '- Light mode'}
      </div>
    </div>
  )
}

export default DarkmodeSwitch