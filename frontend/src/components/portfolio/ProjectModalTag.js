import { useState } from 'react'
import { useDarkmode } from '../../DarkmodeContext'
import { darkTheme, lightTheme } from '../../utils/theme'

function ProjectModalTag({tag}) {
  const darkmode = useDarkmode()
  const [hover, setHover] = useState(false)

  // Edge Case: stop render of ModalTag incase of undefined tags
  if(tag === undefined) return null

  const tagStyling = {
    color: darkmode ? darkTheme.text : lightTheme.text,
    border: darkmode ? `1px solid ${lightTheme.body}` : `1px solid ${darkTheme.body}`,
    backgroundColor: darkmode ? darkTheme.body : lightTheme.body
  }
  const tagHoverStyling = {
    backgroundColor : tag.css_body, 
    color : tag.css_text,
    border : `1px solid ${tag.css_body}`
  } 

  return (
    <span 
    className="badge rounded-pill px-3 mx-2 mb-1 fw-light text-end" 
    style={hover ? tagHoverStyling : tagStyling}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      {tag.name}
    </span>
  )
}

export default ProjectModalTag