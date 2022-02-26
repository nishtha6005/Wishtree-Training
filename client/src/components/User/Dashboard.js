import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Dashboard(props) {
  const [products, setProducts] = useState([])
  const [cartProduct, setCartProduct]=useState({
    user:'',product:''
  })
  const [disable,setDisable]=useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [mr,setMR]=useState([])
  const [search,setSearch]=useState()
  const [errMsg, setErrMsg]=useState('')

  const getProducts=()=>{
    axios.get('http://localhost:8000/product/all').then((res) => {
      setProducts(res.data.products)
    }).catch(err => {
      console.log(err);
    })
  }
  
  useEffect(() => {
    document.title = 'Home'
    getProducts()

    axios.get("http://localhost:8000/mr/get/")
        .then(res=>{
            setMR(res.data.mrList)
        })
        // const timer = setTimeout(() => {
        //   setShowAlert(false);
        // }, 3000);
        // return () => clearTimeout(timer);

  })

  const addToCart=(product)=>{
    let user = props.loggedUser
    console.log(user,product)
    axios.post(`http://localhost:8000/cart/add/${props.loggedUser}`,{user,product})
    .then(result=>{
      if(result.data.message ==='Item already added to cart')
      window.alert("Item already added to cart")
      else
      window.alert("Item added to cart")
    }
    )
    .catch(err=>{
      console.log(err)
    })
  }

  // const searchHandler=e=>{
  //   console.log(e.target.value)
    // axios.get(`http://localhost:8000/product/search?productName=${e.target.value}`)
    // .then(res=>{
    //     console.log(res.data.search)
    //     setProducts(res.data.search)
    // })
    // .catch(err=>{
    //     console.log(err)

    // })
// }

  return (
    <>
    <div className='row'>
        {/* {showAlert === true&& 
            <div class="alert alert-danger alert-dismissible" role="alert">
                {errMsg}
            </div>
        } */}
        <h2 className='text-center'>{props.isLoggedIn && `Welcome ${props.username}` }</h2>
        {/* <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
        <div className="d-flex">
              <input className="form-control me-2" placeholder="Search" onChange={(e)=>searchHandler(e)}/>
              <button className="btn btn-outline-primary" >Search</button> 
          </div>
        </div>
        <div className='col-md-4'></div>
        </div> */}
        
    <div className='col-md-2'>
    </div>
   
    { products.map((item, index) => {
        return (
            <div className='col-md-3' key={index}>
                <div className="card " style={{width: "300px", height:"330px",margin:"30px"}}>
                    <div className="card-body">
                        <img src={require('../../images/product.jpg')} className="card-img" alt="Product" height="150px"/>
                        <h5 className="card-title text-center mt-2">{item.productName}</h5>
                        <h4 className="card-text text-center">{item.description}</h4>
                        <h6 className="card-text text-center text-danger"> Stock : &#160;
                            {
                                mr.filter(current=>{
                                    return current.productId==item._id
                                })
                                .reduce((sum,item2)=>{
                                    return sum+=item2.quantity
                                },0)
                                                             
                            }
                        </h6>                                          
                        <h4 className="card-text" style={{display: "inline-block", float: "right"}}><strong>&#8377;{ item.price }</strong></h4>
                        <input type='submit' className="btn btn-primary " onClick={()=>addToCart(item._id)}  value="Add to cart" disabled={disable} />
                    </div>
                </div>
            </div>
            )
          })
        }
    <div className='col-md-1'></div>
    </div>
    </>
  )
}

export default Dashboard
