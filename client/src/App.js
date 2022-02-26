import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Dashboard from './components/User/Dashboard';
import Login from './components/Common/Login'
import Signup from './components/User/Signup';
import AddProduct from './components/Admin/AddProduct';
import ProductList from './components/Admin/ProductList';
import Cart from './components/Common/Cart';
import AddMarterialReceipt from './components/Admin/AddMR';
import MRList from './components/Admin/MRList';
import OrdersList from './components/Admin/OrdersList';
import UserList from './components/Admin/UserList';
import AddUser from './components/Admin/AddUser';
import Home from './components/Common/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [currentUsername, setCurrentUsername]=useState('')

  return (
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} loggedIn={setIsLoggedIn} admin={setIsAdmin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard isLoggedIn={isLoggedIn} loggedUser={loggedUser} username={currentUsername}/>}/>
      <Route path='/login' element={<Login loggedIn={setIsLoggedIn} user={setLoggedUser} admin={setIsAdmin} username={setCurrentUsername}/>}/>
      <Route path='/registration' element ={<Signup/>}/>
      <Route path='/cart' element={<Cart loggedUser={loggedUser}/>}/>
      <Route path='/admin' element={<OrdersList/>}/>
      <Route path='/admin/products' element={<ProductList/>}/>
      <Route path='/admin/add-product' element={<AddProduct/>}/>
      <Route path='/admin/users' element={<UserList/>}/>
      <Route path='/admin/add-user' element={<AddUser/>}/>
      <Route path='/admin/material-receipt/' element={<MRList/>}/>
      <Route path='/admin/material-receipt/add' element={<AddMarterialReceipt/>}/>
      
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
