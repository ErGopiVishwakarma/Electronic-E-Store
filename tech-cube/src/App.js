import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import MainRoutes from './route/MainRoutes';
import CartPage from './Pages/CartPage';

function App() {
  return (
    <Box>
    
      <CartPage />
      {/* <ColorModeSwitcher /> */}
      <MainRoutes />
    </Box>
  );
}

export default App;
