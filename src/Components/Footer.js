import '../Components/Footer.css'
import React from 'react'
import {FaPhone,FaMailBulk,FaLinkedin,FaInstagram}from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='phone'>
                 <h4>
                    {/* place icon and description in the same tag so they appear side by side */}
                   <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    301-339-3721</h4>   
                </div>

                 
                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}} />
                        nanadude11@gmail.com
                    </h4>
                   
                </div>
                <div className='socials'>
                    <h4>
                        <a href='https://www.linkedin.com/feed/' target='_blank' rel='noreferrer'>
                        <FaLinkedin size={25} style={{color:'#fff', marginRight:'2rem'}} />
                        </a>
                        <a href='https://instagram.com/dmvkickstop?igshid=YmMyMTA2M2Y=' target='_blank' rel='noreferrer'>
                        <FaInstagram size={25} style={{color:'#fff', marginRight:'2rem'}} />
                        </a>
                    </h4>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer