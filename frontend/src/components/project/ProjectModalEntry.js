import { useDarkmode} from '../../DarkmodeContext'
import { darkTheme, lightTheme } from '../../utils/theme'

function ProjectModalEntry({title, value}) {
  const darkmode = useDarkmode()

  const darkModeStyling = {
    color: darkmode ? darkTheme.text : lightTheme.text
  }

  return (
    <div className="d-flex my-3">
      <div className="p" style={darkModeStyling}>
        <span className="fw-bold">{title}</span>: <br/>
        <span className="fw-lighter">{value}</span>
      </div>
    </div>
  )
}

export default ProjectModalEntry