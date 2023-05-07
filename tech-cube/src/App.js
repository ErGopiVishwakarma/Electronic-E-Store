import React from 'react';
import {
  Box
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import MainRoutes from './route/MainRoutes';


import Navbar from './component/HomeComponent/Navbar';
import Footer from './component/HomeComponent/Footer';
import { Multistep } from './Pages/AddressPage';


function App() {
  return (
    <Box>

<Multistep />
      <Navbar />
      
      <MainRoutes />
      <Footer />

    </Box>
  );
}

export default App;
