import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [uname, setUName] = useState("")
    const [pwd, setPwd] = useState("")
    const [msg, setMsg]= useState("")
    const [user, setUser]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/User").then(response=>{
            console.log(response.data)
            setUser(response.data)
        })
    })

    const login=(e)=>{
        e.preventDefault();
        user.find(item=>{
            if (item.username == uname && item.password == pwd)
            navigate('/dashboard');
            else
            setMsg("Invalid Credentials")
        })
        setUName("");
        setPwd("");
    }

    return (
    <>
    <div className="row">
    <div className="col-md-4 "></div>
        <div className="col-md-4 m-4">
            <form method='Post' onSubmit={login} >
                <div className="border border-secondary m-3 p-2 text-center">
                    <h3 > Login</h3>
                    <div className="form-group m-3">
                        <input type='text' className="form-control" name='username' value={uname} 
                            placeholder="Enter Username" onChange={(e)=>setUName(e.target.value)}/>
                    </div>
                    <div className="form-group m-3">
                        <input type="password" className="form-control" name="password" value={pwd} 
                        placeholder="Enter Password" onChange={(e)=>setPwd(e.target.value)}/>
                    </div>
                    <div>
                        <h4 className='text-danger text-center'>{msg}</h4>
                    </div>
                    <button className="btn btn-success btn-lg my-3 mx-5 px-5 " type='submit'>Login</button>
                </div>
            </form>            
        </div>
    <div className="col-md-4 "></div>
    </div>  
    </>
    )
}

export default Login
