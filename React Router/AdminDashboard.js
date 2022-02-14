import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import axios from 'axios';

function AdminDashboard(props) {
    const [sidebar, setSidebar] = useState([]);
   
    useEffect(()=>{
        axios.get(" http://localhost:4000/Sidebar").then(response=>{
            setSidebar(response.data)
        })
    },[]);
   
  return (
    <>        
    <div className='row'>
        <div className='col-md-4'>
            {props.admin === true  &&
                sidebar.map(item=>{
                    return (
                    <ul key ={item.id}>
                        <li> <Link to={item.to}>{item.menuOption}</Link></li>
                    </ul> 
                )}) 
            } 
        </div>
        <div className='col-md-4'>
            {props.admin === true  ?
                <Outlet/>
                : <> 
                <h1 className="text-center m-3"> User Logged In Successfully</h1>
                <h2  className="text-center"><Link to='/login'>Logout</Link></h2>
              </>
            }
        
        </div>
        <div className='col-md-4'></div>
    </div>
    
      
    </>
  )
}

export default AdminDashboard
