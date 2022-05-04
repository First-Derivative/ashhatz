import React, { useEffect } from 'react';

import Homepage from './pages/Homepage';
import { DarkmodeChannel } from './DarkmodeContext';

import GlobalStyle from './utils/GlobalStyles';
import icon_link from './assets/favicon.ico';
import mobile_icon_link from './assets/logo192.png';
// import manifest_link from './assets/manifest.json';
import './App.css';

function App() {

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
    <DarkmodeChannel>

    <GlobalStyle />

      <div className="container-fluid vh-100" id="app-container">
        <Homepage/>
      </div>
    </DarkmodeChannel>
  );
}

export default App;
