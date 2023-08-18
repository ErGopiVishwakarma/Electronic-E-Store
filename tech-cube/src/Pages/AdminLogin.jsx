<<<<<<< HEAD
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/HomeComponent/Footer';

const AdminLogin = () => {
    const toast = useToast()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      },[])

    const handleSubmit = async(e) => {
        e.preventDefault()
        let data = await axios('https://viridian-confusion-henley.glitch.me/admin').then(res=>res.data)
    
        if(!email || !password){
            toast({
                title: 'failed',
                description: "all filled are required",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
              return;
        }
       const newData = data.find(el=>el.email === email)
      
       if(newData){
        if(newData.password === password){
            toast({
            title: 'successfully login',
            description: "Redirecting to admin page",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position:'top'
          })
          localStorage.setItem('adminProfile',JSON.stringify(newData))
          localStorage.setItem('adminAuth',JSON.stringify(true))
          setTimeout(()=>{
            navigate('/admin')
          },3000)
          return;
        }else{
            toast({
                title: 'failed',
                description: "password didn't match",
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
              return;
        }
       }else{
        toast({
            title: 'wrong credential',
            description: "please check your email or password",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position:'top'
          })
          return;
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
            <Stack spacing={8} mx={'auto'} maxW={{base:'full',md:'lg'}} py={12} px={{base:2,md:6}}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Admin Login</Heading>
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
                </Box>
            </Stack>
        </Flex>
    )
}

=======
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/HomeComponent/Footer';

const AdminLogin = () => {
    const toast = useToast()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      },[])

    const handleSubmit = async(e) => {
        e.preventDefault()
        let data = await axios('https://viridian-confusion-henley.glitch.me/admin').then(res=>res.data)
    
        if(!email || !password){
            toast({
                title: 'failed',
                description: "all filled are required",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
              return;
        }
       const newData = data.find(el=>el.email === email)
      
       if(newData){
        if(newData.password === password){
            toast({
            title: 'successfully login',
            description: "Redirecting to admin page",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position:'top'
          })
          localStorage.setItem('adminProfile',JSON.stringify(newData))
          localStorage.setItem('adminAuth',JSON.stringify(true))
          setTimeout(()=>{
            navigate('/admin')
          },3000)
          return;
        }else{
            toast({
                title: 'failed',
                description: "password didn't match",
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
              return;
        }
       }else{
        toast({
            title: 'wrong credential',
            description: "please check your email or password",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position:'top'
          })
          return;
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
            <Stack spacing={8} mx={'auto'} maxW={{base:'full',md:'lg'}} py={12} px={{base:2,md:6}}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Admin Login</Heading>
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
                </Box>
            </Stack>
        </Flex>
    )
}

>>>>>>> 0b96a5fc907bded82facbd27f754a029d6d4b2cb
export default AdminLogin