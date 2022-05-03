import { useState, useEffect } from 'react';
import icon_link from './assets/favicon.ico';
import mobile_icon_link from './assets/logo192.png';
import manifest_link from './assets/manifest.json';
import './App.css';
import Homepage from './pages/Homepage';

function App() {
  
  // Set Icons & Manifest
  useEffect(() => {
    const favicon = document.getElementById('favicon');
    const manifest = document.getElementById('manifest');
    const mobile_icon = document.getElementById('mobile-icon');

    favicon.setAttribute('href', icon_link);
    mobile_icon.setAttribute('href', mobile_icon_link)
    manifest.setAttribute('href', manifest_link)
  }, []);


  return (
    <div className="container-fluid vh-100" id="app-container">
      <Homepage />
    </div>
  );
}

export default App;
