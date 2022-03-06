import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login(props){
    const [credentials,setCredentials]=useState({
        user:'',password:''
    })
    const navigate = useNavigate()
    const handleChange=e=>{
        let {name,value}=e.target
        setCredentials({...credentials,[name]:value})
    }

    const loginHandler=(e)=>{
        e.preventDefault();
        console.log(credentials)
        axios.post("http://localhost:4000/user/login",credentials)
        .then(res=>{
            console.log(res.data[0]._id)
            if (res.data !== 'Invalid Credentials')
            {
                props.user(res.data[0]._id)
                navigate('/category')
            }
            else{
                alert(res.data)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <>
            <div className='box-model' >                
                <h2>Login</h2><br />
                <form  method="post" >
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter email " name='user' 
                        value={credentials.email} onChange={(e)=>handleChange(e)} />                        
                    </div><br/>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Enter password" name='password' 
                        value={credentials.password} onChange={(e)=>handleChange(e)}/>
                    </div><br/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block" onClick={(e)=>loginHandler(e)}>Login</button> <br/><br/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login