import React from 'react'
import './contact.scss'
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
    const style = { width: "30px", height: "30px"}
  return (
    <div className='contact'>
        <div className="wrapper">
            <div className="contact-container" id='Contact'>
                <h2>Contact</h2>
                <p className="text">
                    An enthusiastic Computing Science student with hands-on experience in both frontend and backend development. 
                    Proficient in data structures, algorithms, and advanced web design utilizing SQL databases. 
                    Currently on a self-taught journey, exploring frameworks like React to enhance development skills further.
                </p>
                <span className="mail">
                    <a href="mailto:abdulmziya@gmail.com" target='_blank'><BiLogoGmail /> abdulmziya@gmail.com </a></span>
                <div className="social-icons">
                    <a href='http://www.linkedin.com/in/abdulkarim-mziya' target='_blank'><FaLinkedin  style={style}/></a>
                    <a href='https://github.com/AbdulkarimMziya' target='_blank'><FaGithubSquare style={style}/></a>
                    <a href='http://instagram.com/ak_mziya21/' target='_blank'><FaInstagram style={style}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact

