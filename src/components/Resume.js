import React from 'react'

import Edu from './Edu.js';
import PreEx from './PreEx.js';
import Skills from './Skills.js';

function Resume() {


  return (
    
    <>
    <div>Resume</div>
    <div className='rsmBdy'>
      <div className='leftBdy'>
        <PreEx />      
      </div> 
      <div className='RightBdy'>
        <Edu />
        <Skills/>
        
      </div>


    </div>

    </>
  )
}

export default Resume