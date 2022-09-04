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
    color: darkmode ? darkTheme.text : lightTheme.text
  }

  const svgStyle = {
    height: '24px',
    width: '24px',
    position: 'relative'
  }

  const handleCVLink = () => {
    const url = "https://drive.google.com/file/d/1I8SEeBq2TgB9E0c8zo7d8FwH8Flod3rP/view?usp=sharing"
    window.open(url + "_blank")
  }

  return (
    <div className="col-12 text-start px-0 px-sm-3">

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
            <div className="p fw-light" id="profile-text" style={profileStyle}>
                To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. The graphic designer’s first fucking consideration is always the size and shape of the format, whether for the printed page or for digital display. You need to sit down and sketch more fucking ideas because stalking your ex on facebook isn’t going to get you anywhere. Can we all just agree as the greater design community to stop.
            </div>
          </div>

          {/* Profile Buttons */}
          <div className="row mb-3 mb-sm-0">

            {/* CV Button */}
            <div className="col-7 col-sm-6">
              <button 
                className="btn fw-light mt-3 mt-sm-5 p-3 profile-button" 
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
              className="btn fw-light mt-3 mt-sm-5 p-3 profile-button" 
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