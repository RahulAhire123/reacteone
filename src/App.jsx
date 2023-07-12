
import { Route,Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";

const App=()=>{
    return <>
    <Navbar/>
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/About" Component={About}/>
        <Route path="/Service" Component={Service}/>
        <Route path="/Contact" Component={Contact}/>
        <Route path="/*"  element={<Home />}></Route>
    </Routes>
    </>
}

export default App