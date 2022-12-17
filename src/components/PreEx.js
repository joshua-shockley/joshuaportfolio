import React from 'react';


export default function PreEx() {
    //the idea is to modularize each part so that adjustments to this information is easy to get too

    const pExp = [
        {
            company: "Advanced Database Solutions",
            started: "11-2020",
            left: "current",
            position: "Sales Manager/Programmer",
            location: "Ozark, Mo.",
            responsibilitites: [
                "Interacting with prospective clients, creating mock-ups, proposals/estimates, and onboard new clients that are ready to begin development",
                "Auditing software or websites from new clients that want help to make additions or changes to their existing systems",
                "Developing databases utilizing multiple technologies like MS Access, SQL, HTML5, .NET, C#, and JavaScript",
                "Listening to customer needs to help streamline frontend useability",
                "Collaborate as a team to provide an excellent client product",
                "Participate in thorough Quality Assurance practices during project development process",
                "Lead/participate regular SCRUM and project progress meetings with Clients to collect feedback and verify proper project trajectory",
                "Take lead rolls for and program internal company projects to further improve daily company workflow efficiency",
                "Traine new employees in Access VBA to instill company and industry standard programming practices"
            ]
        },
        {
            company: "ATT",
            started: "11-2014",
            left: "04-2019",
            position: "Premise Technician",
            location: "Springfield, Mo.",
            responsibilitites: [
                "Connected in home services from outside network lines",
                "Serviced in home fiber products for well rounded customer service",
                "Studied Theory Of Fiber Networks (attaining a national certification from KU) to better understand customer needs",
                "Learned self improvement techniques and safety methods regulalry",
                "Maintained personal supplies logistics for company truck within required timelines",
                "Awarded for great customer experience going above and beyond for difficult situations"
            ],
        },
        {
            company: "ARC of The Ozarks",
            started: "08-2010",
            left: "11-2014",
            position: "Behavioral Specialist Technician - Level II",
            location: "Springfield, Mo.",
            responsibilitites: [
                "Supported clients mentoring needs for better life choices",
                "Mentored consistent practice of necessary life skills with persons needing additional assistance",
                "Provided logistical planning for daily tasks and Medical needs for clients",
                "Currated the learning development with activites to promote positive and productive daily living",
                "Collaborated with clients for an exciting and healthy culinary experience"
            ],
        },


    ]


    return (
        <div className='ExpSection'>
        <h3 className='ExpTitleHeader'>Experience : </h3>
        {pExp[0].company !== "companyName" ?
            <div className='ExpCards'> 
                {pExp.map((Ex) =>
                <div className='exCardItems'>                    
                    <h4 className='exCarCompany'>{Ex.company}</h4>
                    <h5 className='exCarPosition'>{Ex.position}</h5>
                    <p className='exCardStartedEnd'>{Ex.started} to {Ex.left}</p>
                    <p className='exCardLocation'>{Ex.location}</p>
                    <ul className='exResponsibilities'>
                        {Ex.responsibilitites.map((resp)=>
                          <li>{resp}</li>  
                        )}
                    </ul>
                </div>
                )} 
            </div> 
            : 
            <div> not data yet </div>
        }

    </div>
);
    //     <div>
    //         <h3>Previous Experience : </h3>
    //         {pExp[0].company !== "companyName" ?
    //             <div> data is updated make the jsx already </div>
    //             :
    //             <div> not data yet </div>}

    //     </div>
    // );
};