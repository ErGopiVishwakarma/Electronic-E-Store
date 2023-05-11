import { Box, Image, Button, useColorModeValue, Link } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import errorImg from '../Assets/errorImg.webp';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const text = useColorModeValue('dark', 'light');
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  return (
    <Box w={'50%'} m={'80px auto 20px auto'}>
      <Image w={'100%'} src={errorImg} alt='errorImage' />
      <Box textAlign={'center'}>
        <Button _hover={'none'} bg={text === 'dark' ? 'black' : 'white'} color={text === 'dark' ? 'white' : 'black'}><Link href={'./'}>Back to Home</Link></Button>
      </Box>
    </Box>
  )
}

export default ErrorPage