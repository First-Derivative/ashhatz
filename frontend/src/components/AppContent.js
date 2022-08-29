import React from 'react'
import Navbar from './Navbar'

function AppContent({title, children}) {
  return (
    <div className="col-12 col-sm-9 p-4 p-sm-5">
      <Navbar />
      <div className="row mt-5 ">
        <div className="col-12 text-start px-3">
            <div className="h2 mx-auto ms-4"> {title} </div>
        </div>
      </div>

      <div className="mt-5" id="AppContent">
        {children}
      </div>

    </div>
  )
}

export default AppContent