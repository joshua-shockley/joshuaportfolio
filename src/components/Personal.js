import React from 'react'
import PersonalInterests from './PersonalInterests'
import SoftSkills from './SoftSkills'

function Personal() {
  return (
    <div className='PerContainer'>
      <div className='TopPer'>
      <h1>You wanted to know more!</h1>
      </div>
      <div>
        <SoftSkills />
        <PersonalInterests />
      </div>
      
    
    
    </div>
  )
}

export default Personal