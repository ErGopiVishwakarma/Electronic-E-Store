import React from 'react';
import { Box } from '@chakra-ui/react';
import MainRoutes from './route/MainRoutes';
import Navbar from './component/HomeComponent/Navbar';
import Footer from './component/HomeComponent/Footer';
import './App.css';
import PaymentPopup from './component/Payment/PaymentPopup';


function App() {
  return (


    <Box className='App'>
      <Navbar />
      <MainRoutes />
      <Footer />
    </Box>
  );
}

export default App;
