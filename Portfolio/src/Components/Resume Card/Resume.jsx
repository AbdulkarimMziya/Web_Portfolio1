import React from 'react'
import './resume.scss'

const Resume = ({logo, title, period, desc}) => {
  return (
    <div className="resume-container">
        <div className="resume-header">
            <span className="left">
                <img src={logo} alt="" />
                <h3>{title}</h3>
            </span>
            <span className="right">{period}</span>
        </div>
        <div className="resume-content">
            {desc}
        </div>
    </div>
  )
}

export default Resume
