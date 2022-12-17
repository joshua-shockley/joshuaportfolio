import React from 'react'

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



  return (
    
    <div className='SkllSection'>
    <h3 className='SkllTitleHeader'>Skills : </h3>
    {skills[0] !== "" ?
        <div className='SkllCards'> 
            {skills.map((sklls) =>
            <ul className='skllCardItems'>                    
                <li className='skllLstItms'>{sklls}</li>               
            </ul>
            )} 
        </div> 
        : 
        <div> not data yet </div>
    }

</div>
  );
};

