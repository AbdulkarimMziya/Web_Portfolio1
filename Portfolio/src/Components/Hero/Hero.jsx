import React from 'react'
import './hero.scss'
const Hero = () => {
  return (
    <div className='hero' id='Home'>
        <div className="wrapper">
            <div className="hero-container" >
                <div className="avatar">
                    <img src="hero.png" alt="" />
                </div>
                <div className="title">
                    <h1><span className='slct'>Fullstack</span> and <span className='slct'>Software</span> engineer</h1>
                </div>
                <div className="about-me text">
                    As a fourth-year Bachelor of Computing Science student at Thompson Rivers University in BC, 
                    Canada, I'm actively seeking internships to apply and strengthen my skills.
                </div>
                <div className="actionBtns">
                    <a href="https://github.com/AbdulkarimMziya" target="_blank" className='btn'>GitHub</a>
                    <a href="http://www.linkedin.com/in/abdulkarim-mziya" target="_blank" className='btn'>LinkedIn</a>
                    <a href="https://docs.google.com/document/d/1_M67FewIIN-mNPHkDGeOf7L7w8yw6WfGoRYcXpjHsrc/edit?usp=sharing" target="_blank" className='btn'>View Resume</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero


