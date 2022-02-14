import React from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>        
    <h1 className="text-center m-3"> User Logged In Successfully</h1>
    <h2  className="text-center"><Link to='/login'>Logout</Link></h2>
      
    </>
  )
}

export default Dashboard
