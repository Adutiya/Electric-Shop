import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Productdetails from './Pages/ProductDetails';
import RegisterUser from './Pages/RegisterUser';

import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Photos from './Data/Photos';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import SearchPage from './Pages/SearchPage';
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
  </Routes>
  </div>
  </BrowserRouter>
   </>
  

  );
}

export default App;
