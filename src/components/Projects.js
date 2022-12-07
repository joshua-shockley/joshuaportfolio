import React from 'react';
import { Image } from 'semantic-ui-react';
import clickerGiph from '../gifs/ezgif.com-crop.gif';
import llGiph from '../gifs/ezgif.com-gif-maker.gif';
import todoGph from '../gifs/ezgif.com-todo-gif-maker.gif';

export default function Projects() {


    if (!Image) {
        return <h1>loading images.....</h1>;
    };

    return (
        <section className="projects-container">
            <div className="p-container">

                <div className="project">
                    <h2><a href="https://github.com/build-week-weight-lifting-journal" target="blank" rel="noopener noreferrer" className="project-title" title="to Github for Lambda Lifts">Lambda Lifts App</a></h2>
                    <a href="https://lambdalifts.netlify.com" target="_blank" rel="noopener noreferrer" title="to Lambda Lifts App"> <Image className="project-img" src={llGiph} alt="snapshot of image on login page of Lambda Lifts app... has little guy holding barbell overhead under app title." wraped="true" /> </a>
                    <h4><strong>Tech Stack(frontend): </strong> react, sass, semantic-ui, redux</h4>
                    <h4>Developed the Login and Main Dashboard while cooperating with UX on design appearance</h4>
                    <h4>Designed and got Team Approval to utilize "In Progress" page for future release sections not ready for use</h4>
                    <h4>Worked Hard to Assist Team Members to complete styling according to UX Specifications</h4>
                </div>
                <div className="project">
                    <h2><a href="https://github.com/joshua-shockley/reducer-todo/tree/master" target="blank" rel="noopener noreferrer" className="project-title" title="to Github for Another Todo App">Another Todo App</a></h2>

                    <a href="https://todo.joshuawdshockley.now.sh" target="_blank" rel="noopener noreferrer" title="to Another Todo App"> <Image className="project-img" src={todoGph} alt="snapshot of To Do site saying... stuff to do. " wraped="true" /> </a>
                    <h4><strong>Tech Stack: </strong> react, css, reducer, hooks</h4>
                    <h4>Created layout with simplicity in mind to focus on functionality</h4>
                    <h4>Utilized react with hooks for state manipulation between app components</h4>
                    <h4>Programmed reducers for state requirements</h4>

                </div>
                <div className="project">
                    <h2><a href="https://github.com/joshua-shockley/Web-Application-Testing/tree/joshua-shockley" target="blank" rel="noopener noreferrer" title="To Github for Hitter Stat Clicker" className="project-title">Hitter Stat Clicker App</a></h2>

                    <a href="https://theapp.joshuawdshockley.now.sh" target="_blank" rel="noopener noreferrer" title="To the working App: Hitter Stat Clicker"><Image className="project-img" src={clickerGiph} alt="snapshot of baseball hitter stat clicker app... " wraped="true" /></a>
                    <h4><strong>Tech Stack: </strong> react, css, hooks, react testing library</h4>
                    <h4>Utilized React and Hooks with Functional Components</h4>
                    <h4>Manipulated Display with basic onClick Arrow functions and Prop Drilling for Live State Changes</h4>
                    <h4>Crafted tests utilizing reacts testing library</h4>

                </div>
                {/* 
                this project needs to be updated... 
                may need to email the api host to get new allowance 
                
                Better yet... maybe just make new little project for this part....
                */}
                {/* <div className="project">
                        <h3>Single page Nasa Photo Of The Day</h3>
                        <a href="https://nasa-photo-of-the-day.joshuawdshockley.now.sh" target="_blank" rel="noopener noreferrer"> <Image className="project-img" src={logoNasa} alt="snapshot of lightning bolt from clouds towards plane....yikes!" wraped="true" /> </a>
                        <h4><strong>Tech Stack(frontend): </strong> </h4>
                        <p>this project was a fun page to make for utilizing an API call to pull the Photo of the day fron a NASA API. I also set the photo to be a link to the high definition version if one exists and also played with the animation to the photo/logo at the top which i got from unsplash.</p>
                        <p>This was one of my first very few attempts utilizing API</p>
                    </div> */}
                {/* <div className="project">
                <h3>pr5</h3>
                <Image className="project-img" src={} alt=""  wraped/>
                <a href="" > Look At this one </a>
            </div> */}

            </div>

        </section>
    );
};