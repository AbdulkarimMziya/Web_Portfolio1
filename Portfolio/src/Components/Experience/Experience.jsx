import React from 'react'
import Resume from '../Resume Card/Resume'
import './experience.scss'

const Experience = () => {
    const resumeInfo = [
        {title:'e-Learning Application ', tools:'HTML, CSS, JAVASCRIPT, REACT, FreeForm, Firebase', desc: 'I effectively utilize strong communication skills to engage with customers and colleagues, adeptly handling tasks such as processing returns and addressing product inquiries through both verbal and written channels. Additionally, my proficiency in Order Management Systems ensures seamless order processing, delivery tracking, and meticulous maintenance of inventory records, showcasing adaptability in managing large-scale orders and deliveries with ease.'}
    ]
  return (
    <div className='wrapper' id='Experience'>
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
