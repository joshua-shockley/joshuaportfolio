import React from 'react';


export default function Awards() {
    //the idea is to modularize each part so that adjustments to this information is easy to get too
    const awards = [
        {
            name: "Service Excellence Award",
            dateRec: "2016",
            comment: "Nominated & Awarded For Going Above And Beyond to provide the best customer expirience possible",
            organization: "AT&T"
        },
        {
            name: "National Scholar/Athlete Award",
            dateRec: "2005",
            comment: "Nominated & Awarded For Academic and Athletic Excellence",
            organization: "The United States Army Reserve - via Willard High School"
        }
        // {
        //     name: "",
        //     dateRec: "",
        //     comment: "",
        //     organization: ""
        // },
    ]

    return (
        <div>
            <h3>Awards : </h3>
            {awards[0].dateRec !== "date" ?
                <div> data is updated whenever you want to setup the actual container for the information </div> : <div> not data yet </div>}

        </div>
    );
};