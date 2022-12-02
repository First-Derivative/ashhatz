import React, { useState, useEffect, useContext, ReactElement } from "react"
import axiosInstance from "../utils/axios"

export type Credentials = {
  name: string,
  email: string
}

export interface AuthContextInterface {
  isAuth: boolean,
  credentials: Credentials
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthUpdate() {
  return useContext(AuthUpdateContext);
}

const authDefault = { "isAuth": false, "credentials": { "name": "", "email": "" } }

const AuthContext = React.createContext<AuthContextInterface>(authDefault);
const AuthUpdateContext = React.createContext<any | null>(null);

function AuthChannel({ children }: { children: ReactElement }) {

  const [auth, setAuth] = useState<AuthContextInterface>(authDefault)

  const checkAuth = () => {
    axiosInstance.get("users/checkAuth").then((res) => {
      const credentials: Credentials = { "name": res.data.name, "email": res.data.email }
      setAuth({ isAuth: true, credentials: credentials })

    }).catch((err) => {
      console.log("Backend error: unable to get users/checkAuth")
    })
  }

  function handleSignIn(data: AuthContextInterface): void {
    setAuth(data)
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