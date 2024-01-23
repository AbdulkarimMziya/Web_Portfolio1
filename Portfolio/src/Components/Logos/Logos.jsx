import React from 'react'
import './logos.scss'
import { FaJava, FaHtml5, FaCss3Alt, FaJs,FaReact } from "react-icons/fa";


const Logos = () => {
    const style = { width: "57px", height: "62px"}
  return (
    <div className='logos-section'>
        <div className="wrapper">
            <div className="logos-container">
                <h2>Experienced with</h2>

                <div className="logos">
                    <FaJava style={style} /> <FaHtml5 style={style} /> 
                    <FaCss3Alt style={style} /> <FaJs style={style} /> 
                    <FaReact style={style} className='react' />
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Logos
