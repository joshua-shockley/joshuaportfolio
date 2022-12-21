import React from 'react'

function Info(props) {

    const Informies = props.myData;

    console.log("Informies:", Informies);

  return (
    <>
        {Informies.map((inf)=>
        <>
        <h3>{inf.title}</h3>
        <p>{inf.captionText}</p>
        </>
        )}
    </>
  )
};

export default Info;