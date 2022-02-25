import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Cart(props) {
	const [address,setAddress]=useState({
		address:'',mobileNo:''
	})
	const [errors,setErrors]=useState({})
	const navigate = useNavigate()
	const [cart,setCart]=useState([])
	const [product,setProduct]=useState([])
	const tax=105
	const shipping=100
	
	const getCart=()=>{
		axios.get(`http://localhost:8000/cart/${props.loggedUser}`)
		.then(res=>{
			setCart(res.data.cart)
			console.log(res.data.cart)
		})
		.catch(err=>{
			console.log(err.response.data)
		})
	}

	const getProducts=()=>{
		axios.get('http://localhost:8000/product/all')
		.then(result=>{
			setProduct(result.data.products)
		})
		.catch(err=>{
			console.log(err.response.data)
		})
	}

	useEffect(() => {
		document.title = 'Cart'
		getCart()
		getProducts()
		
	},[])
	
	const increaseQty=(quantity,cartId)=>{
		console.log('increased')
		axios.put(`http://localhost:8000/cart/${cartId}`,{quantity:quantity+1})
		.then(res=>{
			console.log(res.data.cart)
			getCart()
		})
		.catch(err=>{
			console.log(err.response.data)
		})
	}

	const decreaseQty=(quantity,cartId)=>{
		console.log('decreased')
		if (quantity ===1)
		{
			return ;
		}
		axios.put(`http://localhost:8000/cart/${cartId}`,{quantity:quantity-1})
		.then(res=>{
			console.log(res.data.cart)
			getCart()
		})
		.catch(err=>{
			console.log(err.response.data)
		})
	}

	const changeHandler=(e)=>{
		let {name,value}=e.target
		setAddress({...address,[name]:value})
		setErrors({
            ...errors,[name]:validate(name,value)
        })
	}

	const validate=(field,value)=>{
        if(field==='address' && value.trim()==='')
        {
            return "Address can not be empty"
        }
        if (field==='mobileNo' && !/^[6-9][0-9]{9}$/.test(value.toLowerCase()))
        {
            return "Enter Valid Mobile No"
        }
    }
	
	const removeFromCart=(cartId)=>{
		let ans = window.confirm("Are you sure you want to delete ?")
		if (ans)
		{
		axios.delete(`http://localhost:8000/cart/remove/${cartId}`)
		.then(result=>{
			console.log(result)
			getCart()
		})
		.catch(err=>{
			console.log(err.response.data)
		})
	}
	}

	const getTotal =()=>{
		let x = getAmount()
		if (x===0)
		return 0
		else
		return x+tax+shipping
	}

	const getAmount = ()=>{
		let amount =0
		product.map(pro=>{
			cart.map(item=>{
				if(pro._id === item.product)
				return amount+=(pro.price*item.quantity)
			})
		})
		return amount
	}

	const emptyCart=()=>{
		axios.delete(`http://localhost:8000/cart/empty/${props.loggedUser}`)
			.then(res=>{
				console.log("Cart Empty")
			})
			.catch(err=>{
				console.log(err.response.data)
			})
	}

	const placeOrder = (e) => {
		e.preventDefault();
		let totalAmount=getTotal()
		let user=props.loggedUser
		let products = []
		let quantity =[]
		cart.forEach(item=>{
			console.log(item.product,item.quantity)
			products.push(item.product)
			quantity.push(item.quantity)
		})
		axios.post("http://localhost:8000/orders/add",{user,address:address.address,mobileNo:parseInt(address.mobileNo),totalAmount,products,quantity})
		.then(res=>{
			emptyCart()
			window.alert("Your Order has been placed")
			navigate('/dashboard')
		})
		.catch(err=>{
			console.log(err.response.data)
		})
	}

	return (
		<>
			<div className="row">
				<div className="col-lg-12">
					<div className="box-element">
						<div className="cart-row">
							<div style={{ flex: 1 }}><strong>Product</strong></div>
							<div style={{ flex: 1 }}><strong>Price</strong></div>
							<div style={{ flex: 1 }}><strong>Quantity</strong></div>
							<div style={{ flex: 1 }}><strong>Delete</strong></div>
						</div>
					{cart.map((item,index)=>{
						return (
							<div className="cart-row">
								{ product.map(pro=>{
									return(
										pro._id === item.product &&
										(
										<>         
											<div style={{ flex: 1 }}><strong>{pro.productName}</strong></div>
											<div style={{ flex: 1 }}><strong>&#8377;{pro.price}</strong></div>                       
										</>
										)
									)
								})}
							<div style={{ flex: 1 }}>
								<strong className="quantity" >{item.quantity}</strong>
								<div className="quantity">
									<img className="chg-quantity" src={require('../../images/arrow-up.png')} onClick={()=>increaseQty(item.quantity,item._id)}/>
									<img className="chg-quantity" src={require('../../images/arrow-down.png')} onClick={()=>decreaseQty(item.quantity,item._id)}/>
								</div>
							</div>
							<div style={{ flex: 1 }}><button className='btn btn-danger' onClick={()=>removeFromCart(item._id)}>Delete</button></div>
						</div>
						)
					})}
						
					</div>
				</div>
			</div>
			<div className='row m-3 text-right'>
				<div className='col-md-5 text-right my-5 mx-4'>
					<h5 className='text-right'>Order Amount: <strong>&#8377;{getAmount()}</strong></h5>
					<h5 className='text-right ms-5'>Sales Tax: <strong>&#8377;{getAmount() === 0 ? 0 : tax}</strong></h5>
					<h5 className='text-right me-5'>Shipping Charges:<strong>&#8377;{getAmount() === 0 ? 0 : shipping}</strong></h5>
					<br />
					<h2>Total:<strong>&#8377; {getTotal()}</strong></h2>
				</div>
				<div className='col-md-5 my-4'>
					<h3 className='text-center'><strong>Shipping Details</strong> </h3><br />
					<form method="POST" onSubmit={placeOrder}>
						<div className="form-group">
							<textarea className="form-control" placeholder="Enter your address" name='address' required
								value={address.address} onChange={(e) =>changeHandler(e)} />
								<strong className='text-danger'>{errors.address}</strong>
						</div>  <br />
						<div className="form-group">
							<input type="tel" className="form-control" placeholder="Enter mobile no." name='mobileNo' required
								value={address.mobileNo} onChange={(e) => changeHandler(e)} />
								<strong className='text-danger'>{errors.mobileNo}</strong>
						</div>  <br />
						<div className="form-group text-center my-3">
							<button type="submit" className="btn btn-outline-primary btn-block mx-4"> Place Order </button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Cart
