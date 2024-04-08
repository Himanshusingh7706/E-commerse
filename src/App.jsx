import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'
import Login from './components/Login'
import Signup from './components/Signup'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])

  const auth = localStorage.getItem("auth");
  const [isAuth, setIsAuth] = useState(auth ? auth : false)
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} isAuth={isAuth} />} />
          <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} isAuth={isAuth} />} />
          <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Router>
    </>
  )
}

export default App