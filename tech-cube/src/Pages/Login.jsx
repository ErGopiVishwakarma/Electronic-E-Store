import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Image,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import loginImg from '../Assets/loginImg.avif';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESSFUL } from '../redux/Authentication/actionType';
import { useNavigate } from 'react-router-dom';
import { loginData } from '../redux/Authentication/action';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const dispatch = useDispatch();
  const auth = useSelector(store => store.authReducer.isAuth);
  const loader = useSelector(store => store.authReducer.isLoading);
  const error = useSelector(store => store.authReducer.isError);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: 'Login Failed.',
        description: "All fields are required.",
        status: 'warning',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return;
    }

    const userObj = {
      email,
      password
    }

  dispatch(loginData); 

  if (auth === true) {
    navigate('/');
    toast({
      title: 'Login Successful.',
      description: "Welcome Back.",
      status: 'success',
      duration: 4000,
      position: 'top',
      isClosable: true,
    })
  }
  else {
    toast({
      title: 'Login Failed.',
      description: "Wrong Credentials.",
      status: 'error',
      duration: 4000,
      position: 'top',
      isClosable: true,
    })
  }

}


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      pt={'60px'}
      justify={'center'}
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your Account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  type='submit'
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
          <Flex w='90%' mt='20px' justifyContent='center'>
            <Text>New here?</Text>
            <Link ml='10px' color='blue.400' href='./signup'>Sign Up</Link>
          </Flex>
        </Box>
      </Stack>
      <Box m={'20px auto'} w={{ base: '90%', sm: '75%', md: '75%', lg: '50%', xl: '50%', '2xl': '50%' }}>
        <Image w={'95%'} borderRadius={'10px'} h={'500px'} src={loginImg} alt='loginImg' />
      </Box>
    </Flex>
  )
}

export default Login;