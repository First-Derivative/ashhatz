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
    color: ${ darkmode ? '#7A6E6E' : 'white'};
  }

  svg {
    filter: ${ darkmode ?
      'invert(50%) sepia(2%) saturate(2305%) hue-rotate(314deg) brightness(85%) contrast(81%)' :
      'invert(100%) sepia(100%) saturate(0%) hue-rotate(100deg) brightness(104%) contrast(103%)'
    }
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
