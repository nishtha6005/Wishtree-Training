import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ClientApi from "./ClientApi";
import VendorList from "./VendorList";
import Dashboard from "./Dashboard";
import Error from "./Error";
import ClientApiDetails from "./ClientApiDetails";

function Assignment2() {
  return (
    <>
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link mx-2" to='/'>Dashboard </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mx-2" to='/clients'>Clients </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mx-2" to='/vendors'>Vendors </Link>
                </li>
            </ul> 
        </nav>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/clients" element={<ClientApi/>}/>
            <Route path="/vendors" element={<VendorList/>}/>
            <Route path="/clients/:clientid" element={<ClientApiDetails/>} />
            <Route path="/*" element={<Error/>}/>
        </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default Assignment2

