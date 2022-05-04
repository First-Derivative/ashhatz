import React from 'react'

function Navbar() {
  return (
    <div className="row gy-4 gy-sm-5 text-center justify-content-evenly">
      
      <div className="col-6 col-sm-3 px-3">
        
        <div className="h5 my-auto py-4 border border-primary">
          Stats
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div className="h5 my-auto py-4 border border-primary">
          Profile
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div className="h5 my-auto py-4 border border-primary">
          Literature
        </div>
      
      </div>

      <div className="col-6 col-sm-3 px-3">
        
        <div className="h5 my-auto py-4 border border-primary">
          Movies
        </div>
      
      </div>
    </div>
  )
}

export default Navbar