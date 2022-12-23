import { React,useState } from 'react'; 
import Info from './Info.js';



function Home({myData}) {
//below we set a key for the component's data getting passed as props so that 
//the application can determine that the (in this case numberText) unique value exists for these items
//within the props getting handed off.
 

//pick a random number without going over the possible range for the array


const [dtls, setDtls]=useState(myData[Math.floor(Math.random()*myData.length)])
  


  return (
    <>
      <div className='App-header-Home'>
        <div className='leftBdy'>
          words
        </div>
        <div className='RightBdy'>
          <h1 className='MyNm'>Joshua Shockley</h1>
          <h3 className='MyFrm'>Springfield Mo.</h3>
          <div>
            <h4>
              {dtls.title}
            </h4>
            <p>
              {dtls.captionText}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className='bttmCntctInfo'>Contact me at my LinkedIn - <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/joshuawdshockley/'>joshuawdshockley</a></h2>
        {/* <Info myData={myData} key={myData.numberText}/> */}
      </div>
    </>
  )
}

export default Home;