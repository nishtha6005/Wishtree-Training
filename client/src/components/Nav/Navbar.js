import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    
    const logout=e=>{
        props.loggedIn(false)
        props.admin(false)
    }
    return (
    <>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand mx-3" to="/"><h3>Shoppie</h3></Link>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="collapseNavbar">
                <ul className="navbar-nav ms-auto">
                    { props.isAdmin ?
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin" data-bs-target="#myModal" data-bs-toggle="modal">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/products" data-bs-target="#myModal" data-bs-toggle="modal">Products </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/users" data-bs-target="#myModal" data-bs-toggle="modal">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/material-receipt" data-bs-target="#myModal" data-bs-toggle="modal">MR</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" data-bs-target="#myModal" data-bs-toggle="modal" onClick={(e)=>logout(e)}>Logout</Link>
                            </li>
                            </> :null 
                    }
                    {(props.isLoggedIn && !props.isAdmin) &&
                    <>
                        <li className="nav-item mt-1 mx-3">
                            <Link to='cart'><img src={require('../../images/cart.png')} height='30px' width='30px' alt='Cart'/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard" data-bs-target="#myModal" data-bs-toggle="modal">Home</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="/" data-bs-target="#myModal" data-bs-toggle="modal" onClick={(e)=>logout(e)}>Logout</Link>
                        </li>
                    </>
                    }
                    { !props.isLoggedIn &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" data-bs-target="#myModal" data-bs-toggle="modal">Login</Link>
                        </li>
                    }                
                </ul>
            </div>
        </div>
    </nav>
    </>
    )
}

export default Navbar
