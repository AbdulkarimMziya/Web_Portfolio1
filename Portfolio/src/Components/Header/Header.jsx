import React from 'react'
import './header.scss'
import { useState } from 'react';
import Links from './Links';


const Header = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <div className="header">
        <div className='wrapper'>
            <div className="header-container">
                <h2>Abdulkarim.</h2>
                    <Links /> 
            </div>
        </div>
    </div>
  )
}

export default Header
