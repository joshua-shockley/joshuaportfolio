import React, { useState } from "react";
import {Route, Link, Routes} from "react-router-dom";

//components brought in for the different routes
import Home from "./components/Home";
import Resume from "./components/Resume";
import './App.css';
import Personal from "./components/Personal";

//pass in some practic props to get used to passing things around
import Data from './Data/Data.js';

//now we build the stuff and pass around some props
export default function App(){

const [datas,setDatas] = useState(Data);

console.log(datas)

  return (
<div className="App">
  <nav>
  <Link className="App-link" to="/">Home</Link>
  <Link className="App-link" to="/Resume">Resume</Link>
  <Link className="App-link" to="/Personal">About Me</Link>
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

