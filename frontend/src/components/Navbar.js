import React from 'react'

function Navbar() {
  return (
    <div className="row text-center justify-content-evenly">
      <div className="col px-3">
        
        <div className="h5 my-auto py-4 border border-primary">
          Stats
        </div>
      
      </div>

      <div className="col px-3">
        
        <div className="h5 my-auto py-4 border border-primary">
          Profile
        </div>
      
      </div>

      <div className="col px-3">
        
        <div className="h5 my-auto py-4 border border-primary">
          Literature
        </div>
      
      </div>

      <div className="col px-3">
        
        <div className="h5 my-auto py-4 border border-primary">
          Movies
        </div>
      
      </div>
    </div>
  )
}

export default Navbar