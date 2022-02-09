import React, {useState} from 'react'

function ProductCrud() {
    const [productData, setProductData] = useState([])
    const [productCode, setProductCode] = useState(101)
    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory ] = useState('category')
    const [productStatus, setProductStatus] = useState(false)
    const [productStore, setProductStore] = useState('')
    const [showDelete, setShowDelete] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const addProduct = (e) =>{
        e.preventDefault();
        let temp=productData.find(value=>{
            console.log(value.productCode===productCode);
            if (value.productCode===productCode)
            {
                value.productName =productName;
                value.productCategory =productCategory;
                value.productStatus = productStatus;
                value.productStore = productStore;
            } 
            return value.productCode===productCode
        });
        if (temp === undefined)
            productData.push({productCode, productName, productCategory, productStatus, productStore});
        // console.log(productCode, productName, productCategory, productStatus, productStore);
        setProductCode(productData[productData.length-1].productCode + 1);
        setProductName('');
        setProductStatus(false);
        setProductCategory('category');
        setProductStore('');
    }

   const updateProduct = (rowIndex) =>{
       setProductCode(productData[rowIndex].productCode);
       setProductName(productData[rowIndex].productName);
       setProductCategory(productData[rowIndex].productCategory);
       setProductStatus(productData[rowIndex].productStatus);
       setProductStore(productData[rowIndex].productStore);
   }

   const deleteProduct =(rowIndex)=>{
        setSelectedIndex(rowIndex);
        setShowDelete(true);
    }

    const onDeleteYes =()=>{
        let x = productData.splice(selectedIndex,1)
        setProductData(productData)
        setShowDelete(false)
        console.log(productData.length)
        productData.length === 0 ? setProductCode(101) : 
        setProductCode(productData[productData.length - 1].productCode + 1)      
    }

    const onDeleteNo =()=>{
        setShowDelete(false)
    }

//    const deleteProduct=(rowIndex)=> {
//        let res = window.confirm("Are you sure you want to delete ? ");
//        if (res === true)
//         {
//             let x = productData.splice(rowIndex,1)
//             setProductData(productData)
//             productData.length === 0 ? setProductCode(101) : 
//         setProductCode(productData[productData.length - 1].productCode + 1)   
//         }

//    }

  return (
    <>
    {showDelete &&
      <div className=" m-1 p-2 text-center">
            <h1>Are you sure delete this record</h1>
            <button className='btn btn-danger px-3 m-1' onClick={onDeleteYes}>Yes</button>
            <button className='btn btn-secondary px-3 m-1' onClick={onDeleteNo} >No</button>
                </div> }
    <div className="row">
    <div className="col-md-4 ">
        <form method="Post" onSubmit={addProduct} >
            <div className="border border-secondary m-3 p-2 text-center">        
            <h3 > Add Product Details</h3>
                <div className="form-group m-3">
                    <input type='number' className="form-control" name='id' value={productCode} placeholder="Product Code"
                        onChange={(e)=>setProductCode(productCode)}/>
                </div>
                <div className="form-group m-3">
                    <input type="text" className="form-control" name="name" value={productName} placeholder="Product Name"
                        onChange={(e)=>setProductName(e.target.value)}/>
                </div>
                <div className='form-group  m-3'>
                    <select className="form-select" value={productCategory} onChange={(e)=>setProductCategory(e.target.value)}>
                        <option value='category'> Select Product Category</option>
                        <option value="electronics"> Electronics </option>
                        <option value="eletrical"> Electrical</option>
                    </select>
                </div>
                <div className="form-group">
                    <label >Status</label>
                    <input type="checkbox" className='m-2' id="status" name="status" checked={productStatus} value='status' 
                        onChange={(e)=>setProductStatus(e.target.checked)}/>
                </div>
                <div className="form-group">
                    <label><strong>Choose Store</strong></label>
                    <input type="radio" name="store"  className="m-2" value='Store1' checked={productStore==='Store1'} onChange={(e)=>setProductStore(e.target.value)}
                    /><span className="ml-5">Store 1 </span> 
                    <input type="radio" name="store" className="m-2" value='Store2' checked={productStore==='Store2'} onChange={(e)=>setProductStore(e.target.value)}
                    /><span className="ml-5">Store 2 </span> 
                </div>
                <button className="btn btn-success btn-lg my-3 mx-5 px-5 " type='submit'>
                      Submit</button>
                    </div>
                    </form>            
        </div>
        <div className="col-md-8 ">
            <table className="table table-bordered text-center table-striped m-3">
            <tbody>
                <tr>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Status</th>
                    <th>Store</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {productData.map((value,index) => {
                return (
                    <tr key={index}>
                        <td>{value.productCode}</td>
                        <td>{value.productName}</td>
                        <td>{value.productCategory}</td>
                        <td><input type="checkbox" checked={value.productStatus} onChange={()=>{}}/></td>
                        {/* <td>{value.productStatus ? 'Available' :'Not Available'}</td> */}
                        <td> {value.productStore} </td>
                        
                        <td><button className="btn btn-primary"
                            onClick={()=>updateProduct(index)}>Update</button></td>
                        <td><button className="btn btn-danger"
                            onClick={()=>deleteProduct(index)}>Delete</button></td>
                    </tr>
                )})

                }
            </tbody>
            </table>
        </div>
    </div>
      
    </>
  )
}

export default ProductCrud
