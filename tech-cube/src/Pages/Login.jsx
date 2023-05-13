import React, { useEffect, useState } from 'react';
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
import Footer from '../component/HomeComponent/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const dispatch = useDispatch();
  // const auth = useSelector(store => store.authReducer.isAuth);
  const loader = useSelector(store => store.authReducer.isLoading);
  // const data = useSelector(store => store.authReducer.users);
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = await axios('https://viridian-confusion-henley.glitch.me/user').then(res => res.data);

    let block = false;
    const blockData = await axios.get('https://viridian-confusion-henley.glitch.me/blacklist').then(res => res.data)
    if (blockData.length > 0) {
      blockData.forEach(el => {
        if (el.email === email) {
          block = true;
        }
      })
    }
    if(block){
      toast({
        title: 'sorry',
        description: "this email id has been blacklisted, you can not use this email",
        status: 'warning',
        duration: 5000,
        position: 'top',
        isClosable: true,
      })
      return;
    }

    if (!email || !password) {
      toast({
        title: 'failed',
        description: "all filled are required",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
      return;
    }
    const newData = data.find(el => el.email === email);
    // console.log(newData, data)
    if (newData) {
      if (newData.password === password) {
        toast({
          title: 'Log in Successful.',
          description: "Redirecting to Home Page.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top'
        })
        localStorage.setItem('userId', JSON.stringify(newData.id))
        localStorage.setItem('auth', JSON.stringify(true));
        localStorage.setItem('user', JSON.stringify(newData));
        setTimeout(() => {
          navigate('/');
        }, 3000)
        return;
      } else {
        toast({
          title: 'Login Failed!!',
          description: "Password didn't match",
          status: 'warning',
          duration: 3000,
          isClosable: true,
          position: 'top'
        })
        return;
      }
    } else {
      toast({
        title: 'Wrong credentials',
        description: "Make Sure you are registered.",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
      return;
    }

  }


  return (
    loader ? <Loader /> :
    <>
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
      <Footer />
      </>
  )
}

export default Login;