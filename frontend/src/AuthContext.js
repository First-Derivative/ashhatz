import React, { useState, useEffect, useContext} from 'react'
import axiosInstance from './utils/axios'

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthUpdate() {
  return useContext(AuthUpdateContext);
}

function AuthChannel({ children }) {

  const [isAuth, setIsAuth] = useState(false)
  const [credentials, setCredentials] = useState({})

  const checkAuth = () => {
    axiosInstance.get('users/checkAuth').then( (res) => {
      setIsAuth(true)
      setCredentials(res.data)
    }).catch( (err) => {
      setIsAuth(false)
    })
  }

  function updateAuth(value) {
    if (value !== true && value !== false) {
      throw new Error("Invalid Auth value")
    }
    setIsAuth(value)
  }

  useEffect( ()=> {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={ [isAuth, credentials] }>
      <AuthUpdateContext.Provider value={updateAuth} >
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider> 
  )
}

export default AuthChannel