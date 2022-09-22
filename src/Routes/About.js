import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'

 const About = () => {
  return (
    <div> 
        <Navbar/>
        <HeroImg2 heading='About' text='Hello World. 
        My name is Nana Kumi. I am a Fullstack developer with a preference in Frontend. I am skilled in developing products using technology such as HTML, CSS, JS, and modern frameworks'/>
       <Footer/>
    </div>
  )
}

export default About