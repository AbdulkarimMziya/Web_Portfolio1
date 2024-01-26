import React from 'react'
import './projects.scss'

import Card from '../Card/Card'

const Projects = () => {
    const Portfolio = [
        {title:'Admin Dashboard', imgUrl:'dashboard_img.png', gitLink: 'https://github.com/AbdulkarimMziya/Admin-Web-project'},
        {title:'To-do List', imgUrl:'todo_img.png', gitLink: 'https://github.com/AbdulkarimMziya/ToDO_ReactApp'}
    ]
  return (
    <div className='wrapper'>
      <div className="projects-container" id='Projects'>
        <h2>Projects</h2>

        <div className="project-section">

            {Portfolio.map((project) => (
                <Card 
                    title={project.title} 
                    imgUrl={project.imgUrl} 
                    gitLink={project.gitLink}
                />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
