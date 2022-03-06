import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {useState} from 'react'
import './App.css';
import Login from './login';
import Category from './category';
import Question from './question';

function App() {
  const [currentUser, setCurrentUser]=useState('')

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login user={setCurrentUser}/>}/>
        <Route path='/category' element={<Category currentUser={currentUser}/>}/>
        <Route path='/test' element={<Question currentUser={currentUser}/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
