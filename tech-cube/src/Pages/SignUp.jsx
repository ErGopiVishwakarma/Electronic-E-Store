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
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/Authentication/action';
import { RESET } from '../redux/Authentication/actionType';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState(0);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  // const isRegister = useSelector(store => store.authReducer.isRegistered);

  const handleSubmit = async(e) => {
    e.preventDefault();


    if (!firstName || !lastName || !email || !password || !mobile) {
      toast({
        title: 'Failed.',
        description: "All fields are required.",
        status: 'warning',
        duration: 4000,
        position: 'top',
        isClosable: true,
      })
      return
    }

    let userData = {
      firstName,
      lastName,
      email,
      password,
      mobile

    }
// from here to till 

let check = false
const data = await axios.get('http://localhost:8080/user').then(res=>res.data)
 if(data.length > 0){
  data.forEach(el=>{
    if (el.email === userData.email) {
         check = true
      }
 })
}else{
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

if(!check){
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

    // till here  gopi vishwakarma 

  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
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
              <HStack>
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
              </HStack>
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
    </Flex>
  );
}