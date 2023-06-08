
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/Authentication/action';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import signupImg from '../Assets/signupImg.jpg';
import Loader from '../component/Loader&Error/Loader';
import { NavLink } from 'react-router-dom';
import Footer from '../component/HomeComponent/Footer';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const toast = useToast();

  const isRegister = useSelector(store => store.authReducer.isRegistered);
  const loader = useSelector(store => store.authReducer.isLoading);
  const error = useSelector(store => store.authReducer.isError);

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  const handleSubmit = async(e) => {
    e.preventDefault();

    let userData = {
      firstName,
      lastName,
      email,
      password,
      mobile
    }

    let block = false;
    const blockData = await axios.get('https://viridian-confusion-henley.glitch.me/blacklist').then(res => res.data)
    if (blockData.length > 0) {
      blockData.forEach(el => {
        if (el.email === userData.email) {
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

    if (!firstName || !lastName || !email || !password || !mobile) {
      toast({
        title: 'Registration Failed.',
        description: "All fields are required.",
        status: 'warning',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return;
    }

    if (mobile.toString().length !== 10) {
      toast({
        title: 'Correct details Required!',
        description: "Please fill valid mobile number!",
        status: 'warning',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return;
    }

    let check = false;
    const data = await axios.get('http://localhost:8080/user').then(res => res.data)
    if (data.length > 0) {
      data.forEach(el => {
        if (el.email === userData.email) {
          check = true;
        }
      })
    } else {
      dispatch(signup(userData));
      toast({
        title: 'User Registered Successfully.',
        description: "Please log in to continue.",
        status: 'success',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return
    }

    if (!check) {
      dispatch(signup(userData))
      toast({
        title: 'User Registered Successfully.',
        description: "Please log in to continue.",
        status: 'success',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return
    }

    (check && toast({
      title: 'User already registered.',
      description: "Please log in to continue.",
      status: 'error',
      duration: 4000,
      position: 'top',
      isClosable: true,
    }))
    return;

  }
  

  return (
  
    loader ? <Loader/> :
    <>
    <Flex
      minH={'100vh'}
      align={'center'}
      pt={'50px'}
      justify={'center'}
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}
      >
      <Stack w={{base : '95%', sm : '95%', md : '95%', lg : '50%', xl : '50%', '2xl' : '50%'}} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Create your Account
          </Heading>
          <Heading fontSize={'lg'} color={'gray.500'}>
            Join Tech Cube Family
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <Box>
                <FormControl id="firstName">
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormControl>
              </Box>

              <FormControl id="mobile">
                <FormLabel>Mobile Number</FormLabel>
                <Input type="number" value={mobile} onChange={(e) => setMobile(+e.target.value)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'black'}
                  type='submit'
                  color={'white'}
                  _hover={{
                    bg: 'gray.700',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <NavLink style={{marginLeft : '5px', color : '#4299e1', textDecoration : 'underline'}} to='/login'>Login</NavLink>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
      <Box  w={{base : '95%', sm : '95%', md : '95%', lg : '50%', xl : '50%', '2xl' : '50%'}} p={'20px'}>
        <Image w={'100%'} mr={'20px'} borderRadius={'10px'} src={signupImg} alt='signupImg' />
      </Box>
    </Flex>
    <Footer />
  </>
  
  );

}

