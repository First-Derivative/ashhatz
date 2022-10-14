import React, { useState } from 'react'
import profileImg from '../../assets/profile.jpg'
import { ReactComponent as FileIcon } from '../../assets/file.svg'
import { useDarkmode } from '../../DarkmodeContext'
import {darkTheme, lightTheme} from '../../utils/theme'
import ProfileEmailModal from './ProfileEmailModal'

function ProfileContent() {

  const darkmode = useDarkmode()
  const [openModal, setOpenModal] = useState(false)
  const [emailForm, setEmailForm] = useState({
    email: '',
    number: '',
    subject: '',
    content: ''
  })

  const updateEmailForms = ({target}) => setEmailForm({
    ...emailForm,
    [target.name] : target.value
  });

  const profileStyle = {
    color: darkmode ? darkTheme.text : lightTheme.text,
    fontSize: '95%'
  }

  const svgStyle = {
    height: '24px',
    width: '24px',
    position: 'relative'
  }

  const handleCVLink = () => {
    const url = "https://drive.google.com/file/d/1UsdgpxOcqXwGn13nYr4N94jRtTJ1lGPw/view?usp=sharing"
    window.open(url + "_blank")
  }

  return (
    <div className="col-12 text-start ps-0 ps-sm-3">

      {/* Subtitle */}
      <div className="row">
        <div className="col">
          <div className="h5 mx-auto ms-4 fs-italic">
            Who Am I ? -Ash Hatz obviously.
          </div>
        </div>
      </div>

      {/* Profile Content Container */}
      <div className="row mt-3 mx-3">
        
        {/* Profile Content */}
        <div className="col-12 col-sm-8">
          
          <div className="row">
            <div className="p fw-light mb-2" id="profile-text" style={profileStyle}>
              I'm a 22 year old developer from Singapore living in the grand metropolitan city of London. School was a prescription that I took gladly and earned a 1st Class BSc in Computer Science from Queen Mary University of London.
              Currently I'm immersing myself in what can only be described as <span className="fw-bold">"the-zone"</span>, this is when you're coding consistently and constantly thinking about the next feature, the next solution, the infrastructure, and any other thought that involves lines of instructions.
              Colloquially my peers and I call this being <span className="fw-bold">"wired-in"</span>. 
            </div>
            <div className="p fw-light mb-2" style={profileStyle}>
              This season is wired-in working on Django/Python projects that involve a heavy backend. There is something satisfying in creating models, views, urls, and especially creating API endpoints. 
              In terms of expansion, I really would love to work on projects which include a vast API infrastructure which I can dive into. 
            </div>
          </div>

          {/* Profile Buttons */}
          <div className="row mb-3 mb-sm-0 mt-3 mt-sm-5">

            {/* CV Button */}
            <div className="col-7 col-sm-6">
              <button 
                className="btn fw-light p-3 profile-button" 
                type="button" 
                onClick={() => handleCVLink()}
                style={profileStyle}>
                  <FileIcon className="pe-2 align-self-center" id="profile-cv-icon" style={svgStyle}/>
                  Curriculum Vitae
                </button>
            </div>

            {/* Email Button */}
            <div className="col">
              <button 
              className="btn fw-light p-3 profile-button" 
              type="button" 
              onClick={() => setOpenModal(true)}
              style={profileStyle}> Lazy to Email ?</button>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="col-12 col-sm-4">
          <figure className="figure">
            <img 
            src={profileImg}
            alt="My senior graduation imago"
            className="img-fluid rounded"
            />
            <figcaption 
            className="figure-caption text-end mt-1 fw-light"
            style={profileStyle}>
              Staring at my Github action run fail
            </figcaption>
          </figure>
        </div>
        
      </div>

      {/* Profile Email Form Modal */}
      <ProfileEmailModal emailForm={emailForm} updateEmailForms={(e) => updateEmailForms(e)} open={openModal} openHandler={() => setOpenModal(false)}/>
      
    </div>
  )
}

export default ProfileContent