import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function MRList() {
    const [mr,setMR] = useState([])
    const [product,setProduct]= useState([])
// Get All MRs API
    const getMR=()=>{
        axios.get("http://localhost:8000/mr/get/")
        .then(res=>{
            console.log(res)
            setMR(res.data.mrList)
        })
        .catch(err=>{
			console.log(err.response.data)
		})
    }

    const getProducts=()=>{
        axios.get('http://localhost:8000/product/all')
        .then((res) => {
            console.log(res.data);
            setProduct(res.data.products)
        })
        .catch(err=>{
			console.log(err.response.data)
		})
    }

    useEffect(()=>{
        document.title = 'MR List'
        getMR()
        getProducts()
    },[])

// Delete MR API (by mr-id)
    const deleteHandler = (mrId) => {
        let ans = window.confirm("Are you sure you want to delete ?")
        if (ans) 
        {
            axios.delete(`http://localhost:8000/mr/delete/${mrId}`)
                .then(result => {
                    window.alert("Deleted Successfully !!")
                    getMR()
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
            <Link to='/admin/material-receipt/add' className='btn btn-outline-primary'>Add MR</Link>
        </div>
        <div className='col-md-8'>
            <table className='table table-striped my-3'>
                <tbody>
                    <tr>
                        <th>MR No</th>
                        <th>MR Date </th>
                        <th>Supplier </th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Delete </th>
                    </tr>
                {mr.map((item, index) => {
                    return (
                    <>
                        <tr key={index}>
                            <td>{item.mrNo}</td>
                            <td>{item.mrDate}</td>
                            <td>{item.supplier}</td>
                    {product.map((item2,index2)=>{
                        return(
                            item2._id === item.productId&&
                            (
                                <>
                                    <td>{item2.productName}</td>
                                </>
                            )
                        )
                    })}
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity*item.price}</td>
                            {/* <td><button className="btn btn-primary" onClick={() => edit(item._id,item.price,item.quantity)}>Edit</button></td> */}
                            <td><button className="btn btn-danger" onClick={() => deleteHandler(item._id)}>Delete</button></td>
                        </tr>  
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

export default MRList
