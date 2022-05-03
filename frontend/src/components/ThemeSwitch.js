import React from 'react'
import styled from 'styled-components';
import { ReactComponent as ToggleOn } from '../assets/toggle-on.svg';
import toggleOff from '../assets/toggle-off.svg'

const ToggleStyles = styled.svg({
  width: '32px',
  height: '32px',
  filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(100deg) brightness(104%) contrast(103%)',
  cursor: 'pointer',
});

const ContainerStyle = styled.div({
  position: 'absolute',
  color: 'white'
})

function ThemeSwitch({handleClick}) {
  return (
    <ContainerStyle>
      <div className="d-inline-flex px-3 px-sm5 mt-3 mt-sm-5" onClick={handleClick}>
        <ToggleStyles>
          <ToggleOn />
        </ToggleStyles>
        <div className='p my-auto ms-3'>
          - Light Mode
        </div>
      </div>
    </ContainerStyle>
  )
}

export default ThemeSwitch