import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProductPage from '../Pages/ProductPage'
import SingleProduct from '../Pages/SingleProduct'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import CartPage from '../Pages/CartPage'
import CheckOut from '../Pages/CheckOut'
import PaymentPage from '../Pages/PaymentPage'
import ErrorPage from '../Pages/ErrorPage'
import AdminPage from '../Pages/AdminPage'
import Private from './Private'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/product/id' element={<SingleProduct />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/cart' element={
        <Private>
          <CartPage />
        </Private>
      } />
      <Route path='/checkout' element={
        <Private>
          <CheckOut />
        </Private>
      } />
      <Route path='/payment' element={
        <Private>
          <PaymentPage />
        </Private>
      } />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default MainRoutes;