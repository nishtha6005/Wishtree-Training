import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function ClientApiDetails() {
    const [clientData, setClientData] = useState([])
    const {clientid} = useParams();

    useEffect(()=>{
        axios.get("http://localhost:4000/Client").then(response=>{
            setClientData(response.data);
            
        });
    })
    
  return (
    <>
    <h1 className='text-center m-4'> Selected Client Details </h1>
    <hr/>
        { clientData.map(item=>{
            if (parseInt(item.id ) === parseInt(clientid))
                {
                    return (
                        <div className='text-center'>
                            <h4> Client Id - {item.id} </h4>
                            <h4> Client Name - {item.clientName}</h4> 
                            <h4> Phone No - {item.phoneNo} </h4>
                            <h4> Area - {item.area} </h4>
                       </div>
                    )
                }
            })
        }
    </>
  )
}

export default ClientApiDetails;