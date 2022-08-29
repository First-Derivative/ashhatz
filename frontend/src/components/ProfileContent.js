import React from 'react'
import profileImg from '../assets/profile.jpg'
import { ReactComponent as FileIcon } from '../assets/file.svg'
import { useDarkmode } from '../DarkmodeContext'
import {darkTheme, lightTheme} from '../utils/theme'

function ProfileContent() {

  const darkmode = useDarkmode()

  const profileStyle = {
    color: darkmode ? darkTheme.text : lightTheme.text
  }

  const svgStyle = {
    height: '24px',
    width: '24px',
    position: 'relative'
    // filter : darkmode ? darkTheme.svg_filter : lightTheme.svg_filter
  }

  const handleCVLink = () => {
    const url = "https://drive.google.com/file/d/1mF6Zke-Bn_pKfAYe2NM31Jkms0e71nYO/view?usp=sharing"
    window.open(url + "_blank")
  }

  return (
    <>
    {/* Subtitle */}
    <div className="row">
      <div className="h5 mx-auto ms-4 fs-italic">
        Who Am I ? -Ash Hatz obviously.
      </div>
    </div>

    {/* Profile Content Container */}
    <div class="row mt-3 mx-3">
      
      {/* Profile Content */}
      <div className="col-12 col-sm-8">
        
        <div className="row">
          <div className="p fw-light" id="profile-text" style={profileStyle}>
              To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. The graphic designer’s first fucking consideration is always the size and shape of the format, whether for the printed page or for digital display. You need to sit down and sketch more fucking ideas because stalking your ex on facebook isn’t going to get you anywhere. Can we all just agree as the greater design community to stop.
          </div>
        </div>

        {/* Profile Buttons */}
        <div className="row">

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
    </>
  )
}

export default ProfileContent