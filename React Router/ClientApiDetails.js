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
    },[])
    
    return (
        <>
        <h1 className='text-center m-4'> Selected Client Details </h1>
        <hr/>
        { clientData.filter(item =>( item.id == clientid)).map( client=>{
            return (
                <div className='text-center' key={client.id}>
                    <h4> Client Id - {client.id} </h4>
                    <h4> Client Name - {client.clientName}</h4> 
                    <h4> Phone No - {client.phoneNo} </h4>
                    <h4> Area - {client.area} </h4>
                </div>
            )})        
        }
        </>
    )
}

export default ClientApiDetails;