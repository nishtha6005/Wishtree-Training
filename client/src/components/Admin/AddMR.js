import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddMarterialReceipt() {
    const [product, setProduct] = useState({
        productId: '', price: '', quantity: '', mrDate: '', mrNo: '', supplier: ''
    })
    const [price,setPrice]=useState()
    const [masterProduct, setMasterProduct] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'MR Inward'
        axios.get("http://localhost:8000/product/all")
            .then(res => {
                setMasterProduct(res.data.products)
            })
            .catch(err=>{
                console.log(err.response.data)
            })
    }, [])

    const handleChange = (e) => {
        let { name, value } = e.target
        console.log(name, value)
        console.log(e)
        if (name==='productId')
        {
                console.log(masterProduct)

                masterProduct.filter(item=>{
                    
                    if (item._id===value)
                    {console.log(item.price)
                    setPrice(item.price)}
                })          
        }
        
        setProduct({ ...product, [name]: value })
    }

    const resetMR = () => {
        setProduct({})
    }

    const addMR = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/mr/add/', 
        {mrDate:product.mrDate,mrNo:product.mrNo,supplier:product.supplier,productId:product.productId,quantity:product.quantity,price:price})
        .then(res => {
            if (res.data.success === true) {
                window.alert("MR Added")
                navigate('/admin/material-receipt')
            }
        })
        .catch(err=>{
			console.log(err.response.data)
		})
    }

    return (
        <>
        <div className='row'>
            <div className='col-md-2 m-2'></div>
            <div className='col-md-8 text-center m-3'>
                <h4> Material Receipt</h4>
                <form method='post' onSubmit={(e) => addMR(e)}>
                    <div className="input-group mb-3">
                        <input type='datetime-local' className="form-control m-3" name='mrDate' value={product.mrDate}
                            onChange={(e) => handleChange(e)} />
                        <input type="number" className="form-control m-3" name='mrNo' placeholder='Enter Mr No' required
                            value={product.mrNo} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-control' name='supplier' placeholder='Enter Supplier' required
                            value={product.supplier} onChange={(e) => handleChange(e)} />
                    </div><br />
                    <table className='table table-stripped'>
                        <tbody>
                            <tr>
                                <th> Product</th>
                                <th> Price </th>
                                <th> Quantity</th>
                                <th> Amount </th>
                            </tr>
                            <tr>
                                <td>
                                    <select className="form-select" value={product.productId} name='productId' required onChange={(e)=>handleChange(e)}>
                                        <option value='select'> Select Product Name</option>
                                    { masterProduct.map((item,index)=>{
                                        return(
                                            <option key={item._id} value={item._id}> {item.productName}</option>
                                        )
                                    })}                        
                                    </select>
                                </td>
                                <td>
                                    <input type="number" className="form-control" placeholder="Product price" name='price' required
                                        value={price} onChange={(e) => handleChange(e)} readOnly/>
                                </td>
                                <td>
                                    <input type="number" className="form-control" placeholder="Product quantity" name='quantity' required
                                        value={product.quantity} onChange={(e) => handleChange(e)} />
                                </td>
                                <td>
                                    <input type="number" className="form-control" placeholder="Product quantity" name='amount'
                                        value={product.quantity * price} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button type="submit" className="btn btn-success btn-block mx-3" >Submit</button>
                                </td>
                                <td>
                                    <button type="reset" className="btn btn-danger btn-block mx-3" onClick={resetMR}>Cancel</button>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <div className='col-md-2'></div>
        </div>
        </>
    )
}

export default AddMarterialReceipt
