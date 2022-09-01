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

  // Overriding Bootstrap Styles

  a {
    color: ${ darkmode ? darkTheme.text : lightTheme.text};
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }

  a:hover {
    color: ${ darkmode ? darkTheme.text : lightTheme.text};
    text-decoration: underline;
    transition: all 300ms ease-in-out;

  }
  
  .p {
    color: white;
  }

  .btn-outline-dark:hover {
    background-color: #0a0a0a !important;
    border-color: #0a0a0a !important;
  }

  .form-control {
    color: ${ darkmode ? darkTheme.text : lightTheme.text};
    background-color: ${ darkmode ? darkTheme.body : lightTheme.body };
    border-color: ${ darkmode ? '#fff' : '#0a0a0a'}
  }

  .form-control:focus {
    color: ${ darkmode ? darkTheme.text : lightTheme.text};
    background-color: ${ darkmode ? darkTheme.body : lightTheme.body };
    border-color: ${ darkmode ? '#fff' : '#0a0a0a'}
  }

  // General Classses

  svg {
    filter: invert(100%) sepia(96%) saturate(17%) hue-rotate(293deg) brightness(104%) contrast(106%)
  }

  .dark-icon {
    filter : invert(0%) sepia(2%) saturate(4%) hue-rotate(179deg) brightness(94%) contrast(92%)
  }

  .target {
    cursor: pointer
  }

  .visibile {
    visibility: visible;
  }

  .active {
    color: ${darkmode ? darkTheme.body : lightTheme.body};
    background-color: ${darkmode ? darkTheme.text : lightTheme.text};
  }

  .hover-icon {
    transition: all 200ms ease-in;
  }

  .hover-icon:hover {
    transform: scale(1.1);
    transition: all 200ms ease-in;
  }

  #darkmode-text {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }

  #darkmode-container:hover > #darkmode-text {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  // ===== AppContent Styling =====

  #appcontent-container {
    max-height: 100vh;
    overflow: scroll;

  }

  @media screen and (max-width: 768px) {
    #appcontent-container {
      max-height: none;
      overflow: initial;
    }
  }

  // ===== Login Styling =====

  @media (max-width: 500px) {
    #login-container {
      width: 80vw !important;
    }
  }

  #btn-admin-access {
    transition: all 200ms ease-in;
  }

  #btn-admin-access:hover {
    bottom: 5.5% !important;
    background-color: hsl(0, 0%, 95%) !important;
    transition: all 200ms ease-in;
  }

  // ===== Portfolio Styling =====
  
  .project-container { 
    width: 54rem;
    aspect-ratio: 1.618 / 1;
   }

   #project-link-icon {
    transition: all 200ms ease-in
   }

   .project-link-container:hover #project-link-icon {
    transform: scale(1.1);
    transition: all 200ms ease-in
   }

  @media screen and (max-width: 768px) {
    .project-container { 
      width: 20rem;
      height: 90vh;
      overflow: scroll;
    }
  }

  // ===== Profile Styling =====

  .profile-button {
    color: ${ darkmode ? darkTheme.text : lightTheme.text};
    background-color: ${ darkmode ? darkTheme.body : lightTheme.body};
    border: 1px solid ${ darkmode ? darkTheme.text : lightTheme.text};
    transition: all 150ms linear;
  }
  
  .profile-button:hover {
    transform: scale(1.1);
    color: ${ darkmode ? lightTheme.text : darkTheme.text} !important;
    background-color: ${ darkmode ? lightTheme.body : darkTheme.body};
    transition: all 150ms linear;
  }

  #profile-cv-icon {
    filter: ${darkmode ? darkTheme.svg_filter : lightTheme.svg_filter};
  }

  .profile-button:hover #profile-cv-icon {
    filter: ${darkmode ? lightTheme.svg_filter : darkTheme.svg_filter};
  }

  // ===== EmailModal Styling =====

  .input-error {
    border-color: #dc4245;
  }

  .email-container {
    width: 42rem;
    aspect-ratio: 1.6180339887 / 1;
    font-weight: 300 !important;
  }

  .email-root-container {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: 96%;
  }

  @media screen and (max-width: 768px) {
    .email-container {
      width: 22rem;
      aspect-ratio: 1.6180339887 / 1;
    }
    .email-root-container {
      width: 100%;
      left: 50%;
      transform: translate(-50%);
    }
  }

  `

  return (
    <GlobalStyles >
      {children}
    </GlobalStyles>
  )
}

export default GlobalStyle
