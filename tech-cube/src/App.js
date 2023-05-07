import React from 'react';
import { Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import MainRoutes from './route/MainRoutes';
import CartPage from './Pages/CartPage';
import Navbar from './component/HomeComponent/Navbar';
import Footer from './component/HomeComponent/Footer';
import ProductPage from './Pages/ProductPage';
import { FilterSort } from './component/ProductComponent/FilterSort';
import './App.css';

function App() {
  return (
    <Box className='App'>

      <Navbar />
      <MainRoutes />
      <Footer />

      {/* <FilterSort /> */}
      {/* <ProductPage /> */}
    </Box>
  );
}

export default App;
