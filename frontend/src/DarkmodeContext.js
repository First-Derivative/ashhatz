import React, { useState, useEffect, useContext  } from 'react';

const DarkmodeContext = React.createContext();
const DarkmodeUpdateContext = React.createContext();

export function useDarkmode() {
  return useContext(DarkmodeContext);
}

export function useDarkmodeUpdate() {
  return useContext(DarkmodeUpdateContext);
}

export function DarkmodeChannel({ children }){
  
  const [darkmode, setDarkmode] = useState( () => {
    let read = localStorage.getItem('darkmode')
    read = JSON.parse(read)
    if( read === true || read === false ) {
      return read;
    }
    return false;
  });

  useEffect( ()=> {
    localStorage.setItem('darkmode', darkmode)
  }, [darkmode])

  function toggleDarkmode() {
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
