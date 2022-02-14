import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <ul>
      <li><Link to='/login'> Login </Link></li>
    </ul>
      <h1 className="text-center m-3"> Home Component</h1>
    </>
  )
}

export default Home
