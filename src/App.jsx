import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Productdetails from './Pages/ProductDetails';
import RegisterUser from './Pages/RegisterUser';
import Checkout from './Pages/Checkout';
import PoolCheckout from './Pages/PoolCheckout';

import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Photos from './Data/Photos';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import SearchPage from './Pages/SearchPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App(props) {
  

  return (
    <>
   
  <BrowserRouter>
  <Navbar/>
  <div className="pt-16">
  <Routes> 
    <Route path="/"  element={<Home Photos={Photos}/>}/>
    <Route path="/login" element={< Login />}/>
    <Route path="/product/:id" element={<Productdetails Photos={Photos}/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/searchpage" element={<SearchPage/>}/>
    <Route path="/register" element ={<RegisterUser/>}/>
    <Route path="/checkout/:id" element={<Checkout Photos={Photos}/>}/>
    <Route path="/checkout2" element ={<PoolCheckout/>}/>
  </Routes>
  </div>
  <ToastContainer />
  </BrowserRouter>
   </>
  

  );
}

export default App;
