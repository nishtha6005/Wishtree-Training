import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddUser() {
    const [user,setUser]=useState({
        fullname:'',email:'',password:'',confirmPassword:''
    })
    const [errors,setErrors]=useState({})
    
    const navigate=useNavigate()

    useEffect(()=>{
        document.title = 'Add User'
    },[])

    const handleChange=(e)=>{
        let {name,value}=e.target
        setUser({...user,[name]:value})
        setErrors({
            ...errors,[name]:validate(name,value)
        })
    }

    const validate=(field,value)=>{
        if(field==='fullname' && !/^[A-Za-z\s]+$/.test(value))
        {
            return "Name can have only alphabets"
        }
        if (field==='email' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.toLowerCase()))
        {
            return "Enter Valid Email"
        }
        if(field === 'password' && value.length <6)
        {
            return "Minimum password length should be 6 caharaters "
        }
        if(field==='password' && !/^([a-zA-Z])+[0-9]+/.test(value))
        {
            return "Password must have alphabets and digits"
        }
        if(field==='confirmPassword' && user.password != value)
        {
            return "Password did not match"
        }

    }

// Add User API 
    const addUser = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/user/add",user)
        .then(result=>{
            window.alert("User Added ")
            navigate('/admin')
        })
        .catch(err=>{
			console.log(err.response.data)
		})  
    }
    
    return (
        <>
        <div className='box-model '>
            <h2>Add User</h2>
            <form  method="POST" onSubmit={(e)=>addUser(e)}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter your name"  name='fullname' required
                    value={user.fullname} onChange={(e)=>handleChange(e)}/>
                    <strong className='text-danger'>{errors.fullname}</strong>
                </div>  <br />
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" name='email' required
                    value={user.email} onChange={(e)=>handleChange(e)}/>
                    <strong className='text-danger'>{errors.email}</strong>
                </div>  <br />
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password" name='password' required
                    value={user.password} onChange={(e)=>handleChange(e)}/>
                    <strong className='text-danger'>{errors.password}</strong>
                </div>  <br />
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Confirm password" name='confirmPassword' required
                    value={user.confirmPassword} onChange={(e)=>handleChange(e)} />
                    <strong className='text-danger'>{errors.confirmPassword}</strong>
                </div>  <br />
                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-block mx-4">Add</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddUser
