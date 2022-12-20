import React, { useEffect } from "react"

function ErrorAlert({ message, styling, handler }: { message: string, styling: string, handler: Function }) {

  useEffect(() => {
    setTimeout(() => {
      handler()
    }, 2500)
  }, [])

  return (
    <div className={`${styling} ptr`} onClick={e => handler()}>
      <div className="alert alert-danger my-auto" role="alert">
        {message}
      </div>
    </div>
  )
}

export default ErrorAlert