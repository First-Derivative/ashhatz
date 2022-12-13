import React, { useEffect } from 'react'
import { NotificationInterface, useNotif, useNotifUpdate } from '../../contexts/NotificationContext'

function Notification({ notif }: { notif: NotificationInterface }) {
  const [addNotif, popNotif] = useNotifUpdate()
  useEffect(() => {
    setTimeout(() => {
      popNotif()
    }, 2500)
  }, [])

  return (
    <div className="pos-center">
      {notif.message}
    </div>
  )
}

function NotificationBar() {
  const [addNotif, popNotif] = useNotifUpdate()
  const notifs = useNotif()

  return (
    <>
      {notifs.length > 0 && (
        <div className="notifbar ptr" onClick={(e) => popNotif()}>
          {notifs.map((notif: NotificationInterface, index: number) => {
            return (
              <Notification notif={notif} key={index} />
            )
          })}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {notifs.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
      )}
    </>
  )
}

export default NotificationBar