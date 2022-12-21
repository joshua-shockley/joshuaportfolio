import React from 'react'; 
import Info from './Info.js';


function Home({myData}) {
//below we set a key for the component's data getting passed as props so that 
//the application can determine that the (in this case numberText) unique value exists for these items
//within the props getting handed off.
  console.log(myData[0])
  return (
    <div className='App-header'>
      <h1>Joshua Shockley</h1>
      <h3>Springfield Mo.</h3>
      <h2>Contact me at my LinkedIn - <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/joshuawdshockley/'>joshuawdshockley</a></h2>
      <Info myData={myData} key={myData.numberText}/>
    </div>
  )
}

export default Home;