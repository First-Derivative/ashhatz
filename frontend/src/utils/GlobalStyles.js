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
    
  }`

  return (
    <GlobalStyles >
      {children}
    </GlobalStyles>
  )
}

export default GlobalStyle
