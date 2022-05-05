import React from 'react'
import Navbar from './Navbar'

function AppContent({title}) {
  return (
    <div className="col-12 col-sm-9 p-4 p-sm-5">
      <Navbar />
      <div className="row mt-5 ">
        <div className="col-3 text-start px-3">
            <div className="h2 mx-auto my-auto w-75"> {title} </div>
        </div>
      </div>
    </div>
  )
}

export default AppContent