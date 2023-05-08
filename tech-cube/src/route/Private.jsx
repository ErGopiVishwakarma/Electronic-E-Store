import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Pages/Login';

const Private = ({children}) => {
   const auth = JSON.parse(localStorage.getItem('auth')) || '';

   return auth ? children : <Login/>;
}

export default Private;