import React from 'react'
import { useDarkmodeUpdate, useDarkmode } from '../DarkmodeContext';
import styled from 'styled-components';
import { ReactComponent as ToggleOn } from '../assets/toggle-on.svg';
import { ReactComponent as ToggleOff } from '../assets/toggle-off.svg'

const ToggleStyle = styled.svg({
  width: '32px',
  height: '32px',
  filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(100deg) brightness(104%) contrast(103%)',
  cursor: 'pointer',
});

const ContainerStyle = styled.div({
  position: 'absolute',
  color: 'white'
})

function DarkmodeSwitch() {
  const darkmode = useDarkmode();
  const handleClick = useDarkmodeUpdate();

  return (
    <ContainerStyle>
      <div className="d-inline-flex px-3 px-sm5 mt-3 mt-sm-5" onClick={handleClick}>
        <ToggleStyle>
          {darkmode ?  <ToggleOn /> : < ToggleOff />}
        </ToggleStyle>
        <div className='p my-auto ms-3'>
          - Light Mode
        </div>
      </div>
    </ContainerStyle>
  )
}

export default DarkmodeSwitch