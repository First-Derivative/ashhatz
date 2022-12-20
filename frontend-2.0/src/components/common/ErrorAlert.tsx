import React from "react"

function ErrorAlert({ message, styling, handler }: { message: string, styling: string, handler: Function }) {
  return (
    <div className={styling} onClick={e => handler()}>
      <div className="alert alert-danger my-auto" role="alert">
        {message}
      </div>
    </div>
  )
}

export default ErrorAlert