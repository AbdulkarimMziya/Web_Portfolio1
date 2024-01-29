import React from 'react'
import './resume.scss'

const Resume = ({title, tools, desc}) => {
  return (
    <div className="resume-container">
        <div className="resume-header">
            <span className="left">
                <h3>{title}</h3>
            </span>
            <span className="right">{tools}</span>
        </div>
        <div className="resume-content">
            {desc}
        </div>
    </div>
  )
}

export default Resume
