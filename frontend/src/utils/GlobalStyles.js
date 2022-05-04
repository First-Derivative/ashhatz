import React from 'react';
import { useDarkmode } from '../DarkmodeContext'
import { createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

function GlobalStyle({children}) {
  const darkmode = useDarkmode()

  const GlobalStyles = createGlobalStyle`
  body {
    background: ${ darkmode ? darkTheme.body : lightTheme.body };
    color: ${ darkmode ? darkTheme.text : lightTheme.text};
    transition: all 350ms linear;
    
  }
  
  .p {
    color: white;
  }

  svg {
    filter: invert(100%) sepia(96%) saturate(17%) hue-rotate(293deg) brightness(104%) contrast(106%)
  }

  .target {
    cursor: pointer
  }

  `

  return (
    <GlobalStyles >
      {children}
    </GlobalStyles>
  )
}

export default GlobalStyle
