import'../Components/HeroImg2.css';

import React, {Component} from 'react'
// class made it so that we can pass props down to as many files as we want 
class HeroImg2 extends Component {
    render(){
        return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>

        </div>
    </div>
  )
    }
    
  
}

export default HeroImg2