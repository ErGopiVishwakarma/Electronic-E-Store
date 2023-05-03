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

function App() {
  return (
    <Box>
      <ColorModeSwitcher />
      <MainRoutes />
    </Box>
  );
}

export default App;
