import React from 'react'
import {Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery'
import Register from './pages/Register';
import Login from './pages/Login';
import CategoryProducts from "./pages/CategoryProducts";
import Footer from './components/Footer'
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from './pages/AdminProducts';
import AdminOrders from "./pages/AdminOrders";
const App = () => {
  const location=useLocation()
  const isAdminPage = location.pathname.startsWith('/admin')
  
  return (
    <>
    {!isAdminPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/delivery" element={<Delivery />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/categories/:category" element={<CategoryProducts />}/>
        
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="products" element={<AdminProducts />}/>
          <Route path="orders" element={<AdminOrders />}/>
        </Route>

      </Routes>
      {!isAdminPage && <Footer/>}

    </>
  )
}

export default App
