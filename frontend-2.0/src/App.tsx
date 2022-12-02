import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./Homepage";
import "./assets/styles/global.sass"
import icon_link from "./assets/icon/favicon.ico";
import mobile_icon_link from "./assets/icon/logo192.png";

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
    <BrowserRouter>
      {/* <AuthChannel> */}
      {/* <DarkmodeChannel> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
      {/* </DarkmodeChannel> */}
      {/* </AuthChannel> */}
    </BrowserRouter>
  );
}

export default App;
