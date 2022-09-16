import './WorkCard.css'
import React from 'react'

import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='Work-container'>
        
        <div className='project-container'>
            {/* val = the info being submitted */}
           {WorkCardData.map((val, id)=>{
            return(
              <WorkCard 
              key={id}
              imgSource={val.imgSource}
              title={val.title}
              text={val.text}
              view={val.view}

              />  
            )
           })}
        </div>
    </div>
  )
}

export default Work;