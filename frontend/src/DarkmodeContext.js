import React, { useState, useContext  } from 'react';

const DarkmodeContext = React.createContext();
const DarkmodeUpdateContext = React.createContext();

export function useDarkmode() {
  return useContext(DarkmodeContext);
}

export function useDarkmodeUpdate() {
  return useContext(DarkmodeUpdateContext);
}

export function DarkmodeChannel({ children }){
  
  const [darkmode, setDarkmode] = useState(false);

  function toggleDarkmode() {
    console.log("calling darkmode context toggleDarkmode")
    setDarkmode( mode => !mode)
  }

  return (
    <DarkmodeContext.Provider value={darkmode}>
      <DarkmodeUpdateContext.Provider  value={toggleDarkmode}>
        {children}
      </DarkmodeUpdateContext.Provider >
    </DarkmodeContext.Provider>
  )
}
