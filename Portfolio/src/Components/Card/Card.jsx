import React from 'react'
import './card.scss'
import { FaGithub } from "react-icons/fa";

const Card = ({title, imgUrl, gitLink}) => {
  return (
    <div className='card-container'>
        <div className="image-container">
            <img src={imgUrl} alt='' />
        </div>
        <div className="card-bottom">
            <div className="card-title">
                {title}
            </div>
            <div className="card-btn">
                <a href={gitLink} target="_blank" className='btn'><FaGithub /> Repository </a>
            </div>
        </div>
      
    </div>
  )
}

export default Card
