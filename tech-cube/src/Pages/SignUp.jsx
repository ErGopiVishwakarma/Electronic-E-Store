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
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/Authentication/action';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import signupImg from '../Assets/signupImg.jpg';
import Loader from '../component/Loader&Error/Loader';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState(0);
  const dispatch = useDispatch();
  const toast = useToast();

  const isRegister = useSelector(store => store.authReducer.isRegistered);
  const loader = useSelector(store => store.authReducer.isLoading);
  const error = useSelector(store => store.authReducer.isError);

  const handleSubmit = async(e) => {
    e.preventDefault();

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

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

    }
    else {
      toast({
        title: 'Correct details Required!',
        description: "Please fill valid email!",
        status: 'warning',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return;
    }

    let userData = {
      firstName,
      lastName,
      email,
      password,
      mobile
    }

    let check = false;
    const data = await axios.get('http://localhost:8080/users').then(res => res.data)
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
    <Flex
      minH={'100vh'}
      align={'center'}
      pt={'50px'}
      justify={'center'}
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack w={'50%'} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
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
          bg={useColorModeValue('white', 'gray.700')}
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
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.500'}
                  type='submit'
                  color={'white'}
                  _hover={{
                    bg: 'blue.400',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'} href='./login'>Login</Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
      <Box w={'50%'} p={'20px'}>
        <Image w={'100%'} mr={'20px'} borderRadius={'10px'} src={signupImg} alt='signupImg' />
      </Box>
    </Flex>
  );

}
