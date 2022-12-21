import React from 'react'

function Info(props) {
// any information passed the the component in a parent component is usable from props. 
//to use it here it needs to either be passed to useState or a const so we can map
//through it for each part of a reusable snippet or grab what we need from the props object array.
    const Informies = props.myData;

    console.log("Informies:", Informies);

    // the use of the "key ={inf.numberText}" is to help define that each item is unique
  return (
    <>
        {Informies.map((inf)=>
        <div key={inf.numberText}>
        <h3 >{inf.title}</h3>
        <p>{inf.captionText}</p>
        </div>
        )}
    </>
  )
};

export default Info;