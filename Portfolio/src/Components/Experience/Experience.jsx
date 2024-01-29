import React from 'react'
import Resume from '../Resume Card/Resume'
import './experience.scss'

const Experience = () => {
    const resumeInfo = [
        {title:'e-Learning Application ', tools:'HTML, CSS, JAVASCRIPT, REACT, FreeForm, Firebase', desc: 'With interactive quizzes, comprehensive course listings, and seamless device compatibility, the e-learning platform aims to aid university students to engage in effective and enjoyable learning anytime, anywhere.Utilizing a Free form to design the UI for the application, leveraging React for seamless interface development.Firebase is integrated to ensure data management and real-time functionality.'}
    ]
  return (
    <div className='wrapper' id='Working On'>
      <div className="experience-container">
        <h2>Other Projects</h2>
        <div className="experience-section">
            {resumeInfo.map((project) => (
                <Resume  
                    title={project.title}
                    tools={project.tools}
                    desc={project.desc}
                />
            ))}
        </div>
        <div className="education-section">

        </div>
      </div>
    </div>
  )
}

export default Experience
