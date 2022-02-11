import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function ClientApi() {
    const [cData, setCData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/Client").then(response=>{
            setCData(response.data)
        });
    },[])

  return (
    <>
        <h1 className='text-center m-4'> Clients List  </h1>
        <table className='table table-striped text-center'>
            <tbody>
                <tr>
                    <th> Client Id</th>
                    <th> Client Name </th>
                    <th> Phone No </th>
                    <th> Area </th>
                    <th> Select </th>
                </tr>
            
            {                
                cData.map(item=>{
                    return (
                        <tr key={item.id}>
                            <td> {item.id} </td>
                            <td> {item.clientName} </td>
                            <td> {item.phoneNo} </td>
                            <td> {item.area} </td>
                            <td> <Link to={`/clients/${item.id}`}> Select</Link> </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
      
    </>
  )
}

export default ClientApi
