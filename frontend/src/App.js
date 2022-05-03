import { useEffect, useState } from 'react';

import Homepage from './pages/Homepage';
import ThemeSwitch from './components/ThemeSwitch';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/theme';
import { GlobalStyles } from './utils/GlobalStyles';
import icon_link from './assets/favicon.ico';
import mobile_icon_link from './assets/logo192.png';
// import manifest_link from './assets/manifest.json';
import './App.css';

function App() {

  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      return;
    } 
    setTheme('dark')
  }
  
  // Set Icons & Manifest
  useEffect(() => {
    const favicon = document.getElementById('favicon');
    // const manifest = document.getElementById('manifest');
    const mobile_icon = document.getElementById('mobile-icon');

    favicon.setAttribute('href', icon_link);
    mobile_icon.setAttribute('href', mobile_icon_link)
    // manifest.setAttribute('href', manifest)
  }, []);


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
      <div className="container-fluid vh-100" id="app-container">
        <ThemeSwitch handleClick={toggleTheme} />
      <Homepage/>
    </div>
    </ThemeProvider>
  );
}

export default App;
