import React from 'react'
import profileImg from '../assets/profile.jpg'
import { ReactComponent as FileIcon } from '../assets/file.svg'
import { useDarkmode } from '../DarkmodeContext'
import {darkTheme, lightTheme} from '../utils/theme'

function ProfileContent() {

  const darkmode = useDarkmode()

  const profileStyling = {
    color: darkmode ? darkTheme.text : lightTheme.text
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
      <div className="col-8">
        
        <div className="row">
          <div className="p" id="profile-text" style={profileStyling}>
              To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. The graphic designer’s first fucking consideration is always the size and shape of the format, whether for the printed page or for digital display. You need to sit down and sketch more fucking ideas because stalking your ex on facebook isn’t going to get you anywhere. Can we all just agree as the greater design community to stop.
          </div>
        </div>

        {/* Profile CV Link */}
        <div className="row">
          <div className="col-12">
            <figure 
            className="figure rounded target text-center mt-4 p-3"
            id="cv-icon"
            onClick={() => {
              window.open("https://drive.google.com/file/d/1mF6Zke-Bn_pKfAYe2NM31Jkms0e71nYO/view?usp=sharing" + "_blank")
            }}>
              <FileIcon />
              <figcaption 
              className="figure-caption text-end mt-3 fw-light"
              style={profileStyling}>
                Curriculum Vitae
              </figcaption>
            </figure>
          </div>
        </div>

      </div>

      {/* Profile Image */}
      <div className="col">
        <figure className="figure">
          <img 
          src={profileImg}
          alt="My senior graduation imago"
          className="img-fluid rounded"
          />
          <figcaption 
          className="figure-caption text-end mt-1 fw-light"
          style={profileStyling}>
            Staring at my Github action run fail
          </figcaption>
        </figure>
      </div>
      
    </div>
    </>
  )
}

export default ProfileContent