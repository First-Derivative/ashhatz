import React from 'react'
import SideBar from '../components/SideBar'
import AppContent from '../components/AppContent'
import PortfolioContent from '../components/PortfolioContent'
import axiosInstance from '../utils/axios'
import { useState, useEffect } from 'react'
import ErrorAlert from '../components/ErrorAlert'

function Homepage() {

  const [projects, setProjects] = useState([])
  const [error, setError] = useState([])
  
  const getProjects = async () => {
    setError([])
    
    await axiosInstance.get(`portfolio/api/get/projects/`).then(
      (res) => {
        setProjects(res.data)
      }
    ).catch(
      (err) => {
        setError([
          err.message
        ])
        console.log("got error")
        console.log(err)
      }
    )
  }

  useEffect( () => {
    getProjects()
  }, [])

  return (
      <div className="row">
        <SideBar />
        <AppContent title={'Portfolio'}>
          { error.length > 0 && <ErrorAlert styling={"col-10 col-sm-5 my-3 mx-auto text-center"} message={error} />}
          <PortfolioContent
          />
        </AppContent>

      </div>
  )
}

export default Homepage