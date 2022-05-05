import React, { useEffect } from 'react';

import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Media from './pages/Media';
import Literature from './pages/Literature';
import { DarkmodeChannel } from './DarkmodeContext';
import { Routes, Route, Navigate} from 'react-router-dom';
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
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/literature" element={<Literature/>} />
        <Route exact path="/media" element={<Media/>} />
        <Route
        path="*"
        element={<Navigate to="/" replace />}
        />
      </Routes>
    </DarkmodeChannel>
  );
}

export default App;
