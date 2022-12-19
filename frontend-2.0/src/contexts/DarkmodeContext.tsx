import React, { useState, useEffect, useContext, ReactElement } from 'react';


export function useDarkmode() {
  return useContext(DarkmodeContext);
}

export function useDarkmodeUpdate() {
  return useContext(DarkmodeUpdateContext);
}

const initialState = (): boolean => {
  const read: string | null = localStorage.getItem('darkmode')

  if (read === "true" || read === "falses") {
    const initState: boolean = JSON.parse(read)
    return initState
  }
  return false;
}

const DarkmodeContext = React.createContext<boolean>(initialState());
const DarkmodeUpdateContext = React.createContext<any | null>(null);

export function DarkmodeChannel({ children }: { children: ReactElement }) {

  const [darkmode, setDarkmode] = useState<boolean>(initialState());

  useEffect(() => {
    localStorage.setItem('darkmode', String(darkmode))
  }, [darkmode])

  function toggleDarkmode() {
    setDarkmode(mode => !mode)
  }

  return (
    <DarkmodeContext.Provider value={darkmode}>
      <DarkmodeUpdateContext.Provider value={toggleDarkmode}>
        {children}
      </DarkmodeUpdateContext.Provider >
    </DarkmodeContext.Provider>
  )
}
