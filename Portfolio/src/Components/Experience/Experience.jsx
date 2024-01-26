import React from 'react'
import Resume from '../Resume Card/Resume'
import './experience.scss'

const Experience = () => {
    const resumeInfo = [
        {logo:'home-depot.png',title:'Customer Service at Home Depot', period:'April 2020 - April 2022', desc: 'I effectively utilize strong communication skills to engage with customers and colleagues, adeptly handling tasks such as processing returns and addressing product inquiries through both verbal and written channels. Additionally, my proficiency in Order Management Systems ensures seamless order processing, delivery tracking, and meticulous maintenance of inventory records, showcasing adaptability in managing large-scale orders and deliveries with ease.'}
    ]
  return (
    <div className='wrapper' id='Experience'>
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="experience-section">
            {resumeInfo.map((jobDesc) => (
                <Resume  
                    logo={jobDesc.logo}
                    title={jobDesc.title}
                    period={jobDesc.period}
                    desc={jobDesc.desc}
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
