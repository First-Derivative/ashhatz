import React, { useState, useContext, ReactElement } from "react"
import NotificationBar from "../components/common/NotificationBar"

export interface NotificationInterface {
  id?: number
  message: string
}

const NotificationContext = React.createContext<any | null>(null)
const NotificationUpdateContext = React.createContext<any | null>(null)

export function useNotif() {
  return useContext(NotificationContext)
}

export function useNotifUpdate() {
  return useContext(NotificationUpdateContext)
}

function NotificationChannel({ children }: { children: ReactElement }) {
  const [updatedID, setUpdatedID] = useState(0) // consider generating UUID via some npm library.
  const [notifs, setNotifs] = useState<Array<NotificationInterface>>([])

  function addNotif(notif: NotificationInterface): void {
    setUpdatedID(prev => prev += 1)
    setNotifs(prev => {
      const new_notif = { "id": updatedID, ...notif }
      const new_notifs = [...prev]
      new_notifs.unshift(new_notif)
      return new_notifs
    })
  }

  function popNotif(): void {
    setNotifs(prev => {
      const new_notifs = [...prev]
      new_notifs.shift()
      return new_notifs
    })
  }

  return (
    <NotificationContext.Provider value={notifs}>
      <NotificationUpdateContext.Provider value={[addNotif, popNotif]}>
        {children}

        <NotificationBar />
      </NotificationUpdateContext.Provider>
    </NotificationContext.Provider>
  )
}

export default NotificationChannel