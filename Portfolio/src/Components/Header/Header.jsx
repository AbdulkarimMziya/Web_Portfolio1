import React from 'react'
import './header.scss'

const Header = () => {
  const items =['Home','Projects','Experience','Contact'];
  return (
    <div className="header">
        <div className='wrapper'>
            <div className="header-container">
                <h2>Abdulkarim.</h2>

                <div className="navbar">
                    {items.map((item) => (
                      <a href={`#${item}`}> {item} </a>
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header
