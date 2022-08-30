import React from 'react'
import SideBar from '../components/SideBar'
import AppContent from '../components/AppContent'
import PortfolioContent from '../components/PortfolioContent'
import axiosInstance from '../utils/axios'
import { useState, useEffect } from 'react'
import ErrorAlert from '../components/ErrorAlert'

function Homepage() {

  const [projects, setProjects] = useState([])
  const [tags, setTags] = useState({})
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

  const getTag = async (id) => {
    
    if(!tags.hasOwnProperty(id)) {
      await axiosInstance.get(`portfolio/api/get/tag/${id}`).then( 
        (res) => {
          setTags( prevTags => ({...prevTags, [id] : res.data}))
      }).catch( 
        (err) => {
          return 
      })
    } 
  }

  useEffect( () => {
    getProjects()
  }, [])

  useEffect( ()=> {
    if(Object.keys(projects).length !== 0){
      projects.forEach( (project) => {
       for(let i = 0; i < project.tags.length ; i++) {
        getTag(project.tags[i])
       }
        
      })
    }
  }, [projects])

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