import React from "react"

function ErrorAlert({ message, styling }: { message: string, styling: string }) {
  return (
    <div className={styling}>
      <div className="alert alert-danger my-auto" role="alert">
        {message}
      </div>
    </div>
  )
}

export default ErrorAlert