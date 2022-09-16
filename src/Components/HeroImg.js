import'../Components/HeroImg.css';
import React from 'react';
import Office from '../Assets/office.jpeg'
import {Link} from 'react-router-dom'

 const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='office-img' 
            src={Office} alt ="office img"/>

        </div>

        <div className='content'>
            <p>NANA KUMI</p>
            <h1>Frontend Developer</h1>
            <div>
               <Link to='/Project' className='btn'>Projects</Link> 
               
            </div>

        </div>


    </div>
  )
}

export default HeroImg