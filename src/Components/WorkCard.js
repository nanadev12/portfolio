import './WorkCard.css'
import React from 'react'
// import {NavLink} from 'react-router-dom'

const WorkCard = (props) => {
  return (
            <div className='project-card'>
                <img src={props.imgSource} alt='card-img'/>
                <h2 className='project-title'> {props.title}</h2>
                <div className='pro-details'>
                    <p> {props.text}</p>
                    <div className='pro-btns'>
                     <a href={props.view} target='_blank' rel='noreferrer'>
                        <button  className='btn'>
                            View
                        </button>
                     </a>

                       
                    
                     
                    </div>
                </div>
            </div>
  )
}

export default WorkCard