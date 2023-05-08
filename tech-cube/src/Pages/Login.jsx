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
import { NavLink, useNavigate } from 'react-router-dom';
import { loginData } from '../redux/Authentication/action';
import Loader from '../component/Loader&Error/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const dispatch = useDispatch();
  const auth = useSelector(store => store.authReducer.isAuth);
  const loader = useSelector(store => store.authReducer.isLoading);
  const data = useSelector(store => store.authReducer.users);
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

    dispatch(loginData);

    const userData = data.find(el => el.email === email);
    if (userData) {
      if (userData.password !== password) {
        toast({
          title: 'Login Failed.',
          description: "Please enter correct password.",
          status: 'error',
          duration: 4000,
          position: 'top',
          isClosable: true,
        })
        return;
      }
      else {
        localStorage.setItem('userId', JSON.stringify(userData.id));
        localStorage.setItem('auth', JSON.stringify(auth));
        toast({
          title: 'Login Successful.',
          description: "Welcome Back.",
          status: 'success',
          duration: 4000,
          position: 'top',
          isClosable: true,
        })

        setTimeout(() => {
          navigate('/');
        }, 4000)
        return;
      }

    }
    else {
      toast({
        title: 'Wrong Credentials.',
        description: "Please make sure you are registered.",
        status: 'error',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return;
    }

  }


  return (
    loader ? <Loader /> :
      <Flex
        minH={'100vh'}
        align={'center'}
        pt={'60px'}
        justify={'center'}
        direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your Account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
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
                    bg={'black'}
                    color={'white'}
                    type='submit'
                    _hover={{
                      bg: 'gray.700',
                    }}>
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </form>
            <Flex w='90%' mt='20px' justifyContent='center'>
              <Text>New here?</Text>
              <NavLink style={{ marginLeft: '10px', color: '#4299e1', textDecoration: 'underline' }} to='/signup'>Sign Up</NavLink>
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