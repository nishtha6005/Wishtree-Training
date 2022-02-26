import axios from 'axios'
import React, {useEffect,useState} from 'react'

function OrdersList() {
    const [orders,setOrders]=useState([])
    const [product,setProduct]=useState([])

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
        document.title = 'Orders List'
        axios.get("http://localhost:8000/orders/get")
        .then(res=>{
            setOrders(res.data.orders)
        })
        getProducts()
    },[])

  return (
    <>
    <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
            <table className='table table-striped my-3'>
                <tbody>
                    <tr>
                        <th> Order Id </th>
                        <th> User Id </th>
                        <th> Address </th>
                        <th> Mobile No </th>
                        <th> Product Name </th>
                        <th>Quantity</th>
                        <th> Amount </th>
                        <th> Date Time </th>
                    </tr>
                {orders.map(item=>{
                    console.log(item)
                    return(
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.user}</td>
                            <td>{item.address}</td>
                            <td>{item.mobileNo}</td>
                            <td>
                                {item.products.map((proId)=>{
                                    return(
                                        <>
                                            {product.map(pro=>{
                                                if (pro._id === proId){
                                                    return (
                                                        <p>{pro.productName}</p>
                                                    )
                                                }
                                            })}
                                        </>
                                    )
                                })}
                            </td>
                            <td>
                                {item.quantity.map(quant=>{
                                    return (
                                        <p>{quant}</p>
                                    )
                                })}
                            </td>
                            <td>&#8377;{item.totalAmount}</td>
                            <td>{item.orderDate}</td>
                        </tr>
                    )
                })}
                    
                </tbody>
            </table>
        </div>
        <div className='col-md-1'></div>
    </div>
    </>
  )
}

export default OrdersList
