import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ProductList() {
    const [product, setProduct] = useState([])
    const [selectedId, setSelectedId] = useState(0)
    const [price, setPrice] = useState()
    const [quantity, setQuantity]=useState()
    const [status,setStatus]=useState(false)
    

// Get All Products API
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

    useEffect(() => {
        document.title = 'Product List'
        getProducts()               
    }, [])

    
// Edit Button Handler for displaying dynamic input box
    const edit = (id, productPrice,productStatus) => {
        setPrice(productPrice)
        setStatus(productStatus)
        selectedId === id ? setSelectedId(0) : setSelectedId(id)
    }

// Update Product API (by product-id)
    const updateProducts = (id) => {
        axios.put(`http://localhost:8000/product/update/${id}`,{price,status})
        .then(result=>{
            setSelectedId(0)
            getProducts()
        })
        .catch(err=>{
			console.log(err.response.data)
		})
    }

// Delete Product API (by product-id)
    const deleteHandler = (productId) => {
        let ans = window.confirm("Are you sure you want to delete ?")
        if (ans) {
            axios.delete(`http://localhost:8000/product/delete/${productId}`)
                .then(result => {
                    window.alert("Deleted Successfully !!")
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
            <Link to='/admin/add-product' className='btn btn-outline-primary'>Add Product</Link>
        </div>
        <div className='col-md-8'>
            <table className='table table-striped my-3'>
                <tbody>
                    <tr>
                        <th> Product</th>
                        <th> Description </th>
                        <th> Price </th>
                        <th>Status</th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                {product.map((item, index) => {
                    return (
                    <>
                        <tr key={index}>
                            <td>{item.productName}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td><input type="checkbox" checked={item.status} onChange={()=>{}}/></td>
                            <td><button className="btn btn-primary" onClick={() => edit(item._id,item.price,item.status)}>Edit</button></td>
                            <td><button className="btn btn-danger" onClick={() => deleteHandler(item._id)}>Delete</button></td>
                        </tr>
                        {selectedId === item._id &&
                            <tr key={item._id}>
                                <td></td>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" placeholder="Enter price" required
                                    name='price' onChange={(e)=>setPrice(e.target.value)} value={price}/>
                                </td>
                                <td>
                                <div className="form-group">
                                    <input type="checkbox" className="m-3" 
                                    name='status' onChange={(e)=>setStatus(e.target.checked)}  checked={status} />
                                </div>
                                </td>
                                <td><button className="btn btn-outline-success" onClick={() => updateProducts(item._id)}>Save</button></td>
                                <td></td>
                            </tr>
                        }
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

export default ProductList
