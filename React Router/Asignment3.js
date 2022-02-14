import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Asignment3() {
    const [cData, setCData] = useState([])
    const [selectedId, setSelectedId]=useState(0)

    useEffect(()=>{
        axios.get("http://localhost:4001/Client").then(response=>{
            setCData(response.data)
        });
    },[])

    const changeHandler=(id)=>{
        selectedId === id ? setSelectedId(0):setSelectedId(id)

    }

    return (
    <>
    <h1 className='text-center m-4'> Clients List  </h1>
    <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
            <table className='table table-striped table-bordered text-center'>
                <tbody>
                    <tr>
                        <th> Client Id</th>
                        <th> Client Name </th>
                        <th> Select </th>
                    </tr>
                { cData.map(item=>{
                    return (
                    <>
                    <tr key={item.id}>
                        <td> {item.id} </td>
                        <td> {item.clientName} </td>
                        <td> <button className='btn btn-outline-primary' 
                            onClick={(e)=> changeHandler(item.id)} > Select</button> </td>
                    </tr>
                    {selectedId === item.id &&
                        <tr className='bg-secondary' >
                            <td colSpan="3" className='text-white'>  <strong> Phone Number : </strong>  {item.phoneNo} 
                            <strong> Area : </strong>  {item.area} </td>
                        </tr>
                    }
                    </>
                    )})
                }
                </tbody>
            </table>
        </div>
        <div className='col-md-2'></div>
    </div>
    </>
    )
}

export default Asignment3
