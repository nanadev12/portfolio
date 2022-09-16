import './Navbar.css' 
import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
import{FaBars,FaTimes} from 'react-icons/fa'



 const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color,setColor] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 1){
        setColor(true);
    }else{
        setColor(false)
    }
  };
//  scroll event 
  window.addEventListener('scroll', changeColor);
    

  return (
    <div className={color ? 'header header-bg': 'header'}>
        <Link to='/'>
            <h1>Portfolio</h1>
        </Link>
        {/* if click is true show the nav links {nav-menu active}: if false dont show nav links{nav-menu} */}
        <ul className={click ?'nav-menu active': 'nav-menu'} >
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/About'>About</Link>
            </li>

            <li>
                <Link to='/Project'>Projects</Link>
            </li>

           
        </ul>

        <div onClick={handleClick} className="hamburger"> 
        {/* if click is true set hamMenu to X button{FaTimes} : or click is false set  X button to HamMenu {FaBArs} */}
             {click ? (
            <FaTimes size={20} style={{color: '#fff'} }/>): (<FaBars size={20} style={{color: '#fff'} }/>) }
            
          

        </div>
    </div>
  )
}

export default Navbar