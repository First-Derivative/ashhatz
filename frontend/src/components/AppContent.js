import React from 'react'
import Navbar from './Navbar'

function AppContent({title, children}) {
  return (
    <div className="col-12 col-sm-9 p-4 p-sm-5">
      <Navbar />

      <div className="row mt-5 ">
        <div className="col-12 text-start px-3">
            <div className="h2 mx-auto ms-2 ms-sm-4"> {title === "Imago" ? (
              <a 
              href="https://en.wiktionary.org/wiki/imago#Latin"
              target="_blank"
              rel="noreferrer">
                {title}
              </a>

            ) : title} </div>
        </div>
      </div>

      <div className="row mt-3" id="AppContent">
        <div className="col-12 text-start px-0 px-sm-3">
          {children}
        </div>
      </div>

    </div>
  )
}

export default AppContent