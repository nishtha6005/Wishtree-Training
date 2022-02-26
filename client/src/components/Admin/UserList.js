import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserList(props) {
    const [user, setUser] = useState([])
    const [status,setStatus]=useState()
    const [selectedId, setSelectedId]=useState(0)
    const navigate = useNavigate()

// Get All Users API
    const getUsers = ()=>{
        axios.get('http://localhost:8000/user/all')
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err=>{
                console.log(err.response.data)
            })
    }

    useEffect(() => {
        document.title = 'User List'
        getUsers()
    },[])

// Edit Button Handler for displaying dynamic input box
    const edit=(id,status)=>{
        setStatus(status)
        selectedId === id ? setSelectedId(0):setSelectedId(id)
    }

// Update User API (by email)
    const updateStatus = (mail) => {
        axios.put(`http://localhost:8000/user/update/${mail}`,{status})
        .then(result=>{
            setSelectedId(0)
            getUsers()
        })
        .catch(err=>{
			console.log(err.response.data)
		})
    }

// Delete User API (by email)
    const deleteHandler = (userEmail) => {
        let ans = window.confirm('Are you sure you want to delete ?');
        if (ans) {
            axios.delete(`http://localhost:8000/user/delete/${userEmail}`)
                .then(result => {
                    window.alert("Deleted Successfully !!")
                })
                .catch(err=>{
                    console.log(err.response.data)
                })
        }
    }
    return (
    <>
    <div className='row'>
        <div className='col-md-2 m-2'>
            <Link to='/admin/add-user' className='btn btn-outline-primary'>Add User</Link>
        </div>
        <div className='col-md-8'>
            <table className='table table-striped my-3'>
                <tbody>
                    <tr>
                        <th> Name</th>
                        <th> Email </th>
                        <th> Status </th>
                        <th> Admin </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                {user.map((item, index) => {
                    return (
                    <>
                        <tr key={index}>
                            <td>{item.fullname}</td>
                            <td>{item.email}</td>
                            <td>{item.status}</td>
                            <td>{item.isAdmin ? 'True' : 'False'}</td>
                            <td><button className="btn btn-outline-primary" onClick={() => edit(item._id,item.status)}>Edit</button></td>
                            <td><button className="btn btn-outline-danger" onClick={() => deleteHandler(item.email)}>Delete</button></td>
                        </tr>
                        { selectedId === item._id &&
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" placeholder="Enter status" required
                                    name='status' value={status} onChange={(e)=>setStatus(e.target.value)}/>
                                </td>
                                <td></td>
                                <td><button className="btn btn-outline-success" onClick={() => updateStatus(item.email)}>Save</button></td>
                                <td></td>
                            </tr>                                    
                        }
                    </>
                    )
                })}
                </tbody>
            </table>
        </div>
        <div className='col-md-2'></div>
    </div>
    </>
    )
}

export default UserList
