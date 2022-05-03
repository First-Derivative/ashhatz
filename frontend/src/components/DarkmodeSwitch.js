import React from 'react'
import { useDarkmodeUpdate, useDarkmode } from '../DarkmodeContext';
import styled from 'styled-components';
import { ReactComponent as ToggleOn } from '../assets/toggle-on.svg';
import { ReactComponent as ToggleOff } from '../assets/toggle-off.svg'

const ContainerStyle = styled.div({
  position: 'absolute',
  color: 'white'
})

function DarkmodeSwitch() {
  const darkmode = useDarkmode();
  const handleClick = useDarkmodeUpdate();

  const iconStyle = {
    width: '32px',
    height: '32px',
    cursor: 'pointer'
  }

  return (
    <ContainerStyle>
      <div className="d-inline-flex px-3 px-sm-5 mt-3 mt-sm-5">
          {darkmode ?  <ToggleOn style={iconStyle} onClick={handleClick}/> : < ToggleOff style={iconStyle} onClick={handleClick} />}
        <div className='p my-auto ms-3'>
          { darkmode ? '- Dark mode' : '- Light mode'}
        </div>
      </div>
    </ContainerStyle>
  )
}

export default DarkmodeSwitch