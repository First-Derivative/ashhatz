import React from 'react'

// Static Temp Media
import temp2 from '../../assets/temp/temp_2.png'
import temp3 from '../../assets/temp/temp_3.png'
import temp4 from '../../assets/temp/temp_4.png'
import { useDarkmode } from '../../DarkmodeContext'
import { darkTheme, lightTheme } from '../../utils/theme'

function ProjectModalMedia({media}) {

  const darkmode = useDarkmode()

  const id = media
  const figStyling = {
    color: darkmode ? darkTheme.text : lightTheme.text
  }
  let img = {
    "src" : null,
    "caption": "img pending AWS S3 image slider release"
  };

  switch(String(id)){
    case "2":
      img.src = temp2;
      img.caption = "DLK Asia Homepage"
      break;
    case "3":
      img.src = temp3;
      img.caption = "DLK HUB Login screen"
      break;
      case "4":
      img.src = temp4;
      img.caption = "DLK MS shipping data search feature"
      break;
    default:
      img.src = "https://picsum.photos/300/300"
  }

  return (
    <div className="d-block">
        
        <img 
        src={img.src} 
        alt="Media Content" 
        className="img-fluid d-block mx-auto rounded mb-2" />

        <figcaption 
        className="figure-caption text-center"
        style={figStyling}>
          {img.caption}
        </figcaption>
    </div>
  )
}

export default ProjectModalMedia