import React from 'react'
import SideBar from '../components/SideBar'
import AppContent from '../components/AppContent'
import PortfolioContent from '../components/PortfolioContent'
import axiosInstance from '../utils/axios'
import { useState, useEffect } from 'react'
import ErrorAlert from './ErrorAlert'

function Homepage() {

  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    
    await axiosInstance.get(`portfolio/api/get/projects/`).then(
      (res) => {
        setProjects(res.data)
      }
    ).catch(
      (err) => {
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

          <PortfolioContent
          />
        </AppContent>

      </div>
  )
}

export default Homepage