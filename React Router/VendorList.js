import React, {useState} from 'react'

function VendorList() {
    const vendorData = [
        {
          "id": 1,
          "vendorName": "V1",
          "contactNo": 9948378756
        },
        {
          "id": 2,
          "vendorName": "V2",
          "contactNo": 9948378756
        },
        {
          "id": 3,
          "vendorName": "V3",
          "contactNo": 9867564789
        },
        {
            "id": 4,
            "vendorName": "V4",
            "contactNo": 9948378756
          },
          {
            "id": 5,
            "vendorName": "V5",
            "contactNo": 9948378756
          },
          {
            "id": 6,
            "vendorName": "V6",
            "contactNo": 9867564789
          }
      ]

    const [vdata] = useState(vendorData)

  return (
    <>
    <h1 className='text-center m-3'>Clients List</h1>
    <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-6'>
            <table className='table table-striped text-center'>
                <tbody>
                    <tr>
                        <th> Client Id</th>
                        <th> Client Name </th>
                        <th> Contact No </th>
                    </tr>
                { vdata.map(item=>{
                    return (
                        <tr key={item.id}>
                            <td> {item.id} </td>
                            <td> {item.vendorName} </td>
                            <td> {item.contactNo} </td>                            
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
        <div className='col-md-4'></div>
    </div>
        
      
    </>
  )
}

export default VendorList
