import React, {useState} from 'react'
import {Link }from 'react-router-dom';

function Client() {
    const ClientData = [
        {id:1,clientName:'C1'},
        {id:2,clientName:'C2'},
        {id:3,clientName:'C3'},
        {id:4,clientName:'C4'}
        ];

    const [cdata] = useState(ClientData);

  return (
    <>  
        <h1 className='text-center m-3'>Clients List</h1>
        <table className='table table-striped text-center'>
            <tbody>
                <tr>
                    <th> Client Id</th>
                    <th> Client Name </th>
                    <th> Select </th>
                </tr>
            
            {
                cdata.map(item=>{
                    return (
                        <tr key={item.id}>
                            <td> {item.id} </td>
                            <td> {item.clientName} </td>
                            <td> <Link to={`/clients/${item.id}/${item.clientName}`}> Select</Link> </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
      
    </>
  )
}

export default Client
