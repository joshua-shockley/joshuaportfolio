import React from "react";
import {Route, Link, Routes} from "react-router-dom";

//components brought in for the different routes
import Home from "./components/Home";
import Resume from "./components/Resume";


//now we build the stuff and pass around some props
export default function App(){
  return (
<div className="App">
  <nav>
  <Link to="/">Home</Link>
  <Link to="/Resume">Resume</Link>
  </nav>
  <div>
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/Resume" element={<Resume />}/>
    </Routes>
  </div>
</div>
  );
}

