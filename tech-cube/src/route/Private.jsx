import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Pages/Login';

const Private = ({children}) => {
   const auth = useSelector(store => store.authReducer.isAuth);
   return auth ? children : <Login/>
}

export default Private;