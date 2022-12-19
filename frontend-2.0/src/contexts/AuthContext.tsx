import React, { useState, useEffect, useContext, ReactElement } from "react"
import axiosInstance from "../utils/axios"


export interface AuthInterface {
  isAuth: boolean,
  name: string,
  email: string
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthUpdate() {
  return useContext(AuthUpdateContext);
}

const authDefault = { "isAuth": false, "name": "", "email": "" }

const AuthContext = React.createContext<AuthInterface>(authDefault);
const AuthUpdateContext = React.createContext<any | null>(null);

function AuthChannel({ children }: { children: ReactElement }) {

  const [auth, setAuth] = useState<AuthInterface>(authDefault)

  const checkAuth = () => {
    axiosInstance.get("users/checkAuth").then((res) => {
      setAuth({ isAuth: true, "name": res.data.name, "email": res.data.email })

    }).catch((err) => {
    })
  }

  function handleSignIn(data: AuthInterface): void {
    setAuth({ ...data, "isAuth": true })
  }

  function handleSignOut(): void {
    setAuth(authDefault)
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={auth}>
      <AuthUpdateContext.Provider value={[handleSignIn, handleSignOut]} >
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  )
}

export default AuthChannel