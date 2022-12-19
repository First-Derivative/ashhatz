import React, { useState } from "react"
import { ProjectTagInterface } from "./Project"

function ProjectTag({ tag }: { tag: ProjectTagInterface }) {

  const [hover, setHover] = useState(false)

  const tagStyling = {
    color: "#0a0a0a",
    border: "1px solid #0a0a0a",
    backgroundColor: "#fff"
  }

  const tagHoverStyling = {
    backgroundColor: tag.css_body,
    color: tag.css_text,
    border: `1px solid ${tag.css_body}`
  }

  if (!tag) return null
  return (
    <span
      className="badge rounded-pill px-3 mx-2 mb-1 fw-bold text-end"
      style={hover ? tagHoverStyling : tagStyling}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {tag.name}
    </span>
  )
}

export default ProjectTag