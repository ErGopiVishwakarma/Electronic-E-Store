import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import SingleProduct from '../Pages/SingleProduct';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import CartPage from '../Pages/CartPage';
import CheckOut from '../Pages/CheckOut';
import ErrorPage from '../Pages/ErrorPage';
import AdminPage from '../Pages/AdminPage';
import Private from './Private';
import ProductPage from '../Pages/ProductPage';
import AdminLogin from '../Pages/AdminLogin';
import PaymentGateway from '../component/Payment/PaymentGateway';
import AdminContext from '../component/Admin/AdminContext';
import PaymentDetail from '../component/Payment/PaymentDetail';
import PaymentPopup from '../component/Payment/PaymentPopup';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/cart"
        element={
          <Private>
            <CartPage />
          </Private>
        }
      />
      <Route
        path="/checkout"
        element={
          <Private>
            <CheckOut />
          </Private>
        }
      />
      <Route
        path="/payment"
        element={
          <Private>
            <PaymentGateway  />
          </Private>
        }
      />
      <Route path='/paymentpopup' element={<PaymentPopup />} />
      <Route path='/paymentdetail' element={<PaymentDetail />} />
      <Route path="/admin" element={<AdminContext><AdminPage /></AdminContext>} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRoutes;
