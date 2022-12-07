import React from 'react';


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
            name: "Lambda",
            completed: "May 2019 - May 2020",
            degree: "Endorsement Program"

        },
        {
            name: "Nashville State Community College - via The Sage Group",
            Completed: "April 2016",
            degree:"Multiple Fiber Optics Installation and Fusion Splicing Technology Certifications"
        },
        {
            name: "Ozark Technical Community College",
            completed: "2008",
            degree: "Associates Degree"

        },

    ]

    return (
        <div>
            <h3>Education : </h3>
            {education[0].name !== "name" ?
                <div> data is updated so start making the jsx to display it. </div> : <div> not data yet </div>}

        </div>
    );
};