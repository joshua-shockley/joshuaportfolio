import React from 'react';
import '../App.css';

export default function Edu() {
    //the idea is to modularize each part so that adjustments to this information is easy to get too
    const education = [
        // {
        //     name: "MSU",
        //     completed: "find data for the date",
        //     degree: "cert or degree or endorsement status"
        //Nashville State Community College - via The Sage Group
        // },        
        {
            name: "Lambda School, Remote Program ",
            name2:" - Student/Labs Web Dev",
            completed: "May 2019 - May 2020",
            degree: "Endorsement Program",
            description:"Full Stack Web Development Program that focuses on JavaScript fundamentals. This program also dove into HTML, CSS, LESS, SASS, REACT.js, Node.js, and Computer Data Science Principles using Python3."

        },
        {
            name: "Nashville State Community College, ",
            name2:" - via The Sage Group",
            completed: "April 2016",
            degree:"Multiple Fiber Optics Installation and Fusion Splicing Technology Certifications",
            description:"3 different certifications focused around Fiber Theory, Practical Applications, and Fiber Line Repair."
        },
        {
            name: "Ozark Technical Community College",
            name2:"",
            completed: "August 2005- May 2008",            
            degree: "Associates Degree",
            description:""

        },

    ]

    return (
        <div className='EduSection'>
            <h3 className='EduTitleHeader'>Education : </h3>
            {education[0].name !== "name" ?
                <div className='EduCards'> 
                    {education.map((edu) =>
                    <div className='edCardItems'>                    
                        <h4 className='edCarName'>{edu.name}</h4>
                        <h5 className='edCarName2'>{edu.name2}</h5>
                        <p className='edCardCmpDt'>{edu.completed}</p>
                        <p className='edCardDegree'>{edu.degree}</p>
                        <p className='edDscrptn'>{edu.description}</p>
                    </div>
                    )} 
                </div> 
                : 
                <div> not data yet </div>
            }

        </div>
    );
};