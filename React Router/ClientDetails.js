import React from 'react'
import {useParams} from 'react-router-dom'

function ClientDetails() {
    const {clientid, clientname} = useParams();
    
  return (
    <>
    <h1 className='text-center m-4'> Selected Client Details </h1>
    <h3 className='text-center'> Client Id : {clientid}</h3>
    <h3 className='text-center'> Client Name : {clientname}</h3>
      
    </>
  )
}

export default ClientDetails;
