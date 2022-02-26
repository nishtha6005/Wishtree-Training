import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function AddProduct() {
    const [product,setProduct]=useState({
        productName:'',description:'',price:'',status:false
    })
    const [errors,setErrors]=useState({})
    
    const navigate = useNavigate()

    const handleChange=(e)=>{
        let {name,value,checked}=e.target
        console.log(name,value)
        if (name === 'status')
            setProduct({...product,[name]:checked})
        else
            setProduct({...product,[name]:value})

        setErrors({
            ...errors,[name]:validate(name,value)
        })
    }

    const validate=(field,value)=>{
        if(field==='productName' && value.trim()==='')
        {
            return " Product Name cannot be empty"
        }
        if(field==='description' && value.trim()==='')
        {
            return " Description cannot be empty"
        }
        if(field==='price' && !/^[0-9]+$/.test(value))
        {
            return " Enter Valid Pirce"
        }

    }

    const resetProduct=()=>{
        setProduct({})
    }

    useEffect(() => {
        document.title = 'Add Product'
    }, [])

    const addProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/product/add",product)
        .then(result=>{
            console.log(result)
            window.alert("Product Added ")
            navigate('/admin/products')
        })
        .catch(err=>{
			console.log(err.response.data)
		})
    }
   
    return (
        <>
        <div className='box-model '>
            <h2>Add Product</h2>
            <form method='post' >
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Product name" name='productName'
                        value={product.productName} onChange={(e)=>handleChange(e)} />
                        <strong className='text-danger'>{errors.productName}</strong>
                </div><br/>
                <div className="form-group">
                    <textarea type="email" className="form-control" placeholder="Description" name='description' required
                        value={product.description} onChange={(e)=>handleChange(e)}></textarea>
                        <strong className='text-danger'>{errors.description}</strong>
               </div> <br />
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Price" name='price' required
                        value={product.price} onChange={(e)=>handleChange(e)} />
                        <strong className='text-danger'>{errors.price}</strong>
                </div>  <br />
                <div className="form-group">
                    <label >Status</label>
                    <input type="checkbox" className='mx-2 mb-4 ' name="status" checked={product.status} value='status' required
                        onChange={(e)=>handleChange(e)} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-block mx-3" onClick={(e)=>addProduct(e)}>Add Product</button>
                    <button type="reset" className="btn btn-danger btn-block mx-3" onClick={resetProduct}> Cancel </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddProduct
