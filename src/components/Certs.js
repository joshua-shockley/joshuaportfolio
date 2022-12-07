import React from 'react';


export default function Cert() {
    //the idea is to modularize each part so that adjustments to this information is easy to get too

    const certs = [
        // {
        //     name: "certName",
        //     dateRec: "date",
        //     comment: "the comment",
        //     organization: ""
        // },
        {
            name: "CSFOI",
            dateRec: "2016-2020",
            comment: "Certified Specialist in Fiber Optic Installation",
            organization: "Nashville State Community College - via The Sage Group"
        },
        {
            name: "CSFO",
            dateRec: "2016-2020",
            comment: " Certified Specialist in Fiber Optic Technology",
            organization: "Nashville State Community College - via The Sage Group"
        },
        {
            name: "Certificate of Completion",
            dateRec: "04-05-2016",
            comment: "Fiber Optics with Fusion Splicing",
            organization: "Nashville State Community College - via The Sage Group"
        },
        {
            name: "HackerRank - SQL (Basic)",
            dateRec: "12-02-2022",
            comment: "Skills assessment for SQL",
            organization: "HackerRank"
        },
        {
            name: "HackerRank - CSS",
            dateRec: "12-02-2022",
            comment: "Skills assessment for CSS",
            organization: "HackerRank"
        },
        {
            name: "HackerRank - Python3 (Basic)",
            dateRec: "12-02-2022",
            comment: "Skills assessment for Python3",
            organization: "HackerRank"
        },

    ]

    return (
        <div>
            <h3>Certifications : </h3>
            {certs[0].dateRec !== "date" ?
                <div> data is updated whenever you want to setup the actual container for the information </div> : <div> not data yet </div>}


        </div>
    );
};