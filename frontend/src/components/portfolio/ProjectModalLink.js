import { useDarkmode } from '../../DarkmodeContext'
import { darkTheme, lightTheme } from '../../utils/theme'
import { ReactComponent as LinkIcon } from '../../assets/link.svg'

function ProjectModalLink({link}) {
  const darkmode = useDarkmode()
  
  const linkStyling = {
    color: darkmode ? darkTheme.text : lightTheme.text,
  }
  const iconStyling = {
    width: '20px',
    height: '20px',
    filter: darkmode ? darkTheme.svg_filter : lightTheme.svg_filter
  }

  // Edge Case: stop render of ModalLink incase of undefined tags
  if(link === undefined) return null

  const handleURL = () => {
    const url = link.url
    window.open("http://" + url)
  }

  return (
    <div className="d-flex flex-row mt-3 target project-link-container"
    onClick={() => handleURL()}>
      <LinkIcon style={iconStyling} id="project-link-icon"/>
      <div className="p ps-2 align-self-center" style={linkStyling}>{link.name}</div>
    </div>
  )
}

export default ProjectModalLink