import React, { useState } from "react";
import {Route, Link, Routes} from "react-router-dom";

//components brought in for the different routes
import Home from "./components/Home";
import Resume from "./components/Resume";
import './App.css';
import Personal from "./components/Personal";

//pass in some practice props to get used to passing things around
import Data from './Data/Data.js';

//now we build the stuff and pass around some props
export default function App(){
//although we are grabbing the "Data" from the imported file, we have to apply it 
//to a const either directly or if we will adapt the propeties at some point then with useState.
// later when we need to adjust the "state" of datas we can use useEffect to update it with setDatas(below).
const [datas,setDatas] = useState(Data);
//if the state of my details are not yet in a hosted backend then I may not need to fully use
//the useState hook at this time.
// console.log(datas)

  return (
<div className="App">
  <nav className="HdrLnks">
  <Link className="App-link" to="/">Home</Link>
  <Link className="App-link" to="/Resume">Resume</Link>
  
  <Link className="App-link" to="/Personal">About Me</Link>
  <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/joshuawdshockley/'>LinkedIn</a>
  </nav>
  <div>
    <Routes>
    <Route exact path="/" element={<Home myData={datas}/>}/>
    <Route path="/Resume" element={<Resume />}/>
    <Route path="/Personal" element={<Personal />}/>
    </Routes>
  </div>
</div>
  );
}

