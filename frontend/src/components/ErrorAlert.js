import React from 'react'

function ErrorAlert({message, styling}) {
  return (
    <div className={styling}>
      <div className="alert alert-danger my-auto" role="alert">
        {message}
      </div>
    </div>
  )
}

export default ErrorAlert