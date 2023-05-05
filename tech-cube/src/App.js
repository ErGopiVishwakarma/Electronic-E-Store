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
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <Box>
      <ColorModeSwitcher />
      {/* <MainRoutes /> */}
      <ProductPage />
    </Box>
  );
}

export default App;
