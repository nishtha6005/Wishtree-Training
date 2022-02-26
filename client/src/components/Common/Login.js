import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login(props) {
    const [credentials,setCredentials]=useState({
        email:'',password:''
    })
    const [showAlert, setShowAlert] = useState(false)
    const [errors,setErrors]=useState('')
    const navigate=useNavigate()

    useEffect(()=>{
        document.title = 'Login'
        const timer = setTimeout(() => {
            setShowAlert(false);
          }, 3000);
          return () => clearTimeout(timer);
    })

    const handleChange=e=>{
        let {name,value}=e.target
        setCredentials({...credentials,[name]:value})
    }

    const loginHandler=(e)=>{
        e.preventDefault();
        console.log(credentials)
        axios.post(`http://localhost:8000/auth/login`,credentials)
        .then(res=>{
            console.log(res.data.user,res.data.user[0].fullname)
            console.log(res.data.message)
            if (res.data.message === 'Admin')
            {
                props.loggedIn(true);
                props.user(res.data.user[0]._id)
                props.admin(true)
                navigate('/admin')
            }
            else if (res.data.message === 'User')
            {
                props.loggedIn(true);
                props.user(res.data.user[0]._id)
                props.username(res.data.user[0].fullname)
                props.admin(false)
                navigate('/dashboard')
            }            
        })
        .catch(err=>
            {
                setShowAlert(true)
                setErrors("Authentication unsuccessfull ")
                setCredentials({email:'',password:''})
                throw err.response.data.error == 'Unauthenticated user'
            })
        .catch(err=>{
            setShowAlert(true)
            setErrors("Unauthenticated user")
            setCredentials({email:'',password:''})
        })
    }
    
    return (
        <>
            <div className='box-model' >
                {showAlert===true && 
                    <div class="alert alert-danger alert-dismissible" role="alert">
                    {errors}
                    </div>
                }
                
                <h2>Login</h2><br />
                <form  method="post" >
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter email " name='email' 
                        value={credentials.email} onChange={(e)=>handleChange(e)} />                        
                    </div><br/>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Enter password" name='password' 
                        value={credentials.password} onChange={(e)=>handleChange(e)}/>
                    </div><br/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-block " onClick={(e)=>loginHandler(e)}>Login</button> <br/><br/>
                        <Link to="/registration">Don't have an account? Create Account</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
