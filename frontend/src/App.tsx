import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthChannel from "./contexts/AuthContext";
import NotificationChannel from "./contexts/NotificationContext";

import "./assets/styles/global.sass"
import Homepage from "./Homepage";
import icon_link from "./assets/icon/favicon.ico";
import mobile_icon_link from "./assets/icon/logo192.png";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {

  // Set Icons
  useEffect(() => {

    const favicon = document.getElementById("favicon");
    if (favicon != null) {
      favicon.setAttribute("href", icon_link);
    }

    const mobile_icon = document.getElementById("mobile-icon");
    if (mobile_icon != null) {
      mobile_icon.setAttribute("href", mobile_icon_link)
    }

  }, []);

  return (
    <ParallaxProvider>

      <BrowserRouter>
        <AuthChannel>
          <NotificationChannel>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </NotificationChannel>
        </AuthChannel>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
