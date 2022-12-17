import React from 'react'

import Edu from './Edu.js';
import PreEx from './PreEx.js';


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
      </div>


    </div>

    </>
  )
}

export default Resume