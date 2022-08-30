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
  const [loading, setLoading] = useState(true)
  
  const getProjects = async () => {
    setError([])
    
    await axiosInstance.get(`portfolio/api/get/projects/`).then(
      (res) => {
        setProjects(res.data)
        setLoading(false)
      }
    ).catch(
      (err) => {
        setError([
          err.message
        ])
        setLoading(false)
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
          projects={projects}
          />
          { loading && <div className="mx-auto ms-2 ms-sm-4">
            Getting Data from backend Database...
          </div>}
        </AppContent>

      </div>
  )
}

export default Homepage