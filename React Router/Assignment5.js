import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Error from "./Error";
import Home from "./Home";
import LoginAdmin from "./LoginAdmin";
import AdminDashboard from './AdminDashboard';
import VendorList from "./VendorList";
import Settings from "./Settings";
import Dashboard2 from "./Dashboard2";

function Assignment5(){
    const [currentUser, setCurrentUser] = useState('')
    const [admin, setAdmin] = useState(false)
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
            <Route path="/dashboard" element={<AdminDashboard  admin={admin}/>}>
                <Route path="admin/" element={<Dashboard2 currentUser={currentUser} />}/>
                <Route path="vendors/" element={<VendorList/>}/>
                <Route path="settings/" element={<Settings/>}/>
            </Route>
            <Route path="/login" element={<LoginAdmin currentUser={setCurrentUser} admin={setAdmin}/>} />
            <Route path="/*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
    </>
    )
}

export default Assignment5;