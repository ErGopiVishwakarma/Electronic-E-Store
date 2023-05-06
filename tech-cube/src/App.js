import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import MainRoutes from './route/MainRoutes';
import CartPage from './Pages/CartPage';

import Navbar from './component/HomeComponent/Navbar';
import Footer from './component/HomeComponent/Footer';


function App() {
  return (
    <Box>


     
     

     
      <Navbar />

      <MainRoutes />
      <Footer />

    </Box>
  );
}

export default App;
