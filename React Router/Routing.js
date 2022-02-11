import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Filter from '../Filter'
import FormCss from '../FormCss'

function Routing() {
  return (
    <>
    <h1>Routing</h1>
    <BrowserRouter>
    <ul>
        <li> <Link to="/home">Home </Link></li>
        <li> <Link to="/about">About </Link></li>
        <li> <Link to="/form">From </Link></li>
        <li> <Link to="/filter">Filter</Link></li>
    </ul>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/form" element={<FormCss/>}/>
            <Route path="/filter" element={<Filter/>}/>
        </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default Routing

const Home =()=>{ return <h2> Home Component</h2>}
const About =()=>{ return <h2> About Component</h2>}
const Contact =()=>{ return <h2> Contact Component</h2>}