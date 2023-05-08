
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import SingleProduct from '../Pages/SingleProduct'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import CartPage from '../Pages/CartPage'
import CheckOut from '../Pages/CheckOut'
import PaymentPage from '../Pages/PaymentPage'
import ErrorPage from '../Pages/ErrorPage'
import AdminPage from '../Pages/AdminPage'
import Private from './Private'
import ProductPage from '../Pages/ProductPage'


const MainRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
=======

>>>>>>> 80ec62d13afe6fcc4fa029d15fa35d43e01db095
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
<<<<<<< HEAD
    </Routes>
  )
}
=======
>>>>>>> 80ec62d13afe6fcc4fa029d15fa35d43e01db095

    </Routes>
  );
};


export default MainRoutes;

