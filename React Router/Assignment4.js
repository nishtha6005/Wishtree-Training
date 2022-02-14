import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Error from "./Error";
import Login from "./Login";
import Home from "./Home";


function Assignment4(){
    return (
        <>
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link mx-2" to='/'>Home </Link>
                    </li>
                </ul> 
            </nav>    
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Assignment4;