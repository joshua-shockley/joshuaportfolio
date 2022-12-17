import React from 'react';


export default function Skills() {



    const skills = [
        "Both Frontend and Backend Dev",
        "Javascript",
        "Python3",
        "React",
        "Git",
        "HTML5",
        "Css3",
        "Node.js",
        "Less",
        "Sass",
        "Bootstrap",
        "Hooks",
        "Rest",
        "Ajax",
        "JSON",
        "Sqlite3",
        "Context api",
        "Knex.js",
        "Redux",
        "GraphQl",
        "Ms Access VBA",
        "SQL",
        "C#",
        ".NET",
        "Blazor"
    ]


    const theSoftSkills = [
        "Team player",
        "Eager to learn new things",
        "Team management",        
        "15+ years Customer service",
        "2+ year Quality Assurance experience",
        "4+ years (combined work experience) Supervisory roles",
        
    ]


    const personalInts = [
        "Gardening",
        "Landscaping",
        "Woodworking",
        "Carving",
        "Photography",
        "PCB projects",
        "Home Construction/Renovation",
        "Leather crafting",
        "In Home Wiring including coax, catV, phone",
        "Music",
        "Aggressive Blading",
        "Jeeping",
        "DIY Projects",
        "TaeKwondo"

    ]


    return (

        <div>
            <h3>The Skillset : </h3>
            <section className="skills-container">
                {/* this will be the top section.. it handles some stuff...lol! 
                        you know maybe list or organize page to look like my resume i have but with everything..
                        All the things... you know?   */}
                <div className="devSkills">
                    <h4>Developer Skills</h4>
                    <ul>
                        <>
                            {skills.map((skillsdata) =>
                                <li>{skillsdata}</li>)}
                        </>

                    </ul>
                </div>
                {/* this is the soft skills list */}
                <div className="softSkills">
                    <h4>Other Attributes</h4>
                    <ul>
                        <>{theSoftSkills.map((soft) =>
                            <li>{soft}</li>)}</>
                    </ul>
                </div>
                {/* this is the personal skills list */}
                <div className="personalInterests">
                    <h4>Personal Interests/Skills</h4>
                    <ul>
                        {personalInts.map((pData) =>
                            <li>{pData}</li>)}
                    </ul>
                </div>
            </section>

        </div>
    );

};