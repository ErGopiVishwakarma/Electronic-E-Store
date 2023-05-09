import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Grid,
  InputGroup,
  Input,
  InputRightElement,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import { IconContext } from 'react-icons';
import { FaHome, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';

import { NavLink, useNavigate } from 'react-router-dom';
import logo1 from '../../Assets/techCubeLogo.png';

import { NAV_ITEMS } from './navComponent/NavItem';
import logo from '../../Assets/techcube.png';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { useContext, useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from '../../redux/Product/actionType';
import axios from 'axios';
import { SearchContext } from '../../context/SearchContextProvider';
import { getCartServerdata } from '../../redux/CartReducer/action';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const text = useColorModeValue('dark', 'light')
  const textColor = text === 'dark' ? 'gray.100' : 'blackAlpha.900'

  const [open, setOpen] = useState(false);
  const auth = JSON.parse(localStorage.getItem('auth')) || '';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, setStatus } = useContext(SearchContext);
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const cartData = useSelector(store => store.cartReducer.cart);
  
  const openFun = () => {
    setOpen(true)
  }
  const closeFun = () => {
    setOpen(false)
  }

  useEffect(() => {
    dispatch(getCartServerdata());
  }, [])

  const handleSearch = val => {
    if (val) {
      setStatus(true);
    }
    dispatch({ type: PRODUCT_REQUEST })
    axios
      .get(`http://localhost:8080/products?q=${val}`)
      .then(res => {
        console.log(res);
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: PRODUCT_FAILURE });
      });
  };

  const handleDebounce = val => {
    if (id) clearTimeout(id);
    var id = setTimeout(() => {
      handleSearch(val);
      // console.log(val)
    }, 1500);
  };

  const handleLogout = () => {
    localStorage.setItem('auth', JSON.stringify(false));
    navigate('/login');
  }

  return (
    <Box
      bg="white"
      pos={'fixed'}
      top={'0px'}
      w="100%"
      zIndex={99}
      borderBottom={'1px solid white'}
      boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
    >

      <Flex
        pos={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'70px'}
        py={{ base: 2 }}
        px={{ base: 4, md: 6 }}
        direction={{ base: 'row-reverse', md: 'row' }}
        justifyContent={{ base: 'space-between' }}
        align={'center'}
      >
        <Flex
          gap={{ base: '20px', md: '50px', lg: '' }}
          flex={{ base: 1, md: 'auto' }}
          alignItems={'center'}
          ml={{ base: -2 }}
          justify={{ base: 'flex-end', md: 'flex-start' }}
          display={{ base: 'flex', md: 'flex', lg: 'none' }}
        >
          <ColorModeSwitcher display={{ base: 'block', md: 'none' }} />
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          <Box display={{ base: 'none', md: 'block' }}>
            <Box onClick={openFun}>
              <SearchIcon fontSize={'25px'} />
            </Box>
          </Box>
        </Flex>

        <Flex
          flex={{ base: 1 }}
          justifyContent={{ base: 'start', md: 'start' }}
          mr="80px"
        >
          {/* logo section here  */}
          <NavLink to="/">
            <Image src={logo} w="120px" />
          </NavLink>

          <Flex
            display={{ base: 'none', md: 'none', lg: 'block' }}
            ml={10}
            alignItems={'center'}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        {/* search input  */}
        <InputGroup
          w="300px"
          mr="100px"
          borderRadius={'30px'}
          display={{ base: 'none', md: 'none', lg: 'block' }}
        >
          <Input pr="4.5rem" placeholder="search" onChange={(e) => handleDebounce(e.target.value)} />
          <InputRightElement width="4.5rem">
            <SearchIcon />
          </InputRightElement>
        </InputGroup>

        {/* user account and cart button of navbar  */}
        <Flex
          alignItems={'center'}
          gap={{ md: '40px' }}
          display={{ base: 'none', md: 'flex' }}
          justifyContent={'space-evenly'}
        >

          <Menu>
            <MenuButton>
              {/* {auth ? user.firstName : <FaUser size={'20px'} />} */}
              {auth ? <Flex direction={'column'}><Avatar w={'35px'} h={'35px'} src={user.image} name={`${user.firstName} ${user.lastName}`} /></Flex> : <FaUser size={'20px'} />}
            </MenuButton>
            <MenuList>
              {auth ? <MenuItem>Hello {user.firstName} {user.lastName}</MenuItem> :
                <NavLink to='/signup'><MenuItem>{'login / signup'}</MenuItem></NavLink>
              }
              <MenuItem>
                <UserProfile data={user}>User Profile</UserProfile>
              </MenuItem>
              <MenuItem isDisabled={!auth} onClick={handleLogout}>LogOut</MenuItem>
              <NavLink to='/admin'> <MenuItem>Admin</MenuItem></NavLink>

            </MenuList>
          </Menu>
          <Box position={'relative'}>
            {cartData.length > 0 &&
              <Flex
                w={'22px'}
                h={'22px'}
                borderRadius={'50%'}
                position={'absolute'} 
                bottom={'6px'}
                left={'13px'}
                bg={text === 'dark' ? 'black' : 'white'}
                color={text === 'dark' ? 'white' : 'black'}
                justifyContent={'center'}
                alignItems={'center'}
              >{cartData.length}</Flex>
              }
            <NavLink to="/cart">
              <FaShoppingBag size={'22px'} />
            </NavLink>
          </Box>
          <ColorModeSwitcher />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity pos="relative" zIndex={99}>
        <MobileNav />
      </Collapse>
      <Flex
        position={'fixed'}
        h="40px"
        w="100%"
        bottom={0}
        display={{ base: 'block', md: 'none', lg: 'none' }}
        bg={textColor}
        py="6px"
        borderRadius={'10px'}
        boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
      >
        <IconContext.Provider value={{ size: '25px' }}>
          <Flex justifyContent={'space-around'}>
            <NavLink to="/">
              <FaHome />
            </NavLink>
            <Box onClick={openFun}>
              <FaSearch />
            </Box>
            <NavLink to="/account">
              <FaUser />
            </NavLink>
            <NavLink to="/cart">
              <FaShoppingBag />
            </NavLink>
          </Flex>
        </IconContext.Provider>
      </Flex>
      <Box pos={'absolute'} w="100%" zIndex={999} top={0} display={{ base: open ? 'block' : 'none', md: open ? 'block' : 'none', lg: 'none' }} >
        <InputGroup size='md' >
          <Input
            fontSize={'18px'}
            h="60px"
            bg="white"
            color="black"
            placeholder='search....'
          />
          <InputRightElement width='4.5rem' >
            <CloseIcon color="black" mt='20px' cursor={'pointer'} onClick={() => closeFun()} />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex direction={'row'} gap={4} alignItems={'center'}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger display='flex' align='center'>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'15px'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}{navItem.children ? <ChevronDownIcon w={5} h={5} /> : ''}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                w="auto"
              >
                <Grid templateColumns={'repeat(2,1fr)'} gap="30px" p="10px">
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.image} {...child} />
                  ))}
                </Grid>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Flex>
  );
};

const DesktopSubNav = ({ image, href, subLabel }) => {
  const text = useColorModeValue('light', 'dark')
  const textColor = text === 'dark' ? 'gray.100' : 'blackAlpha.900'
  return (
    <NavLink
      to="/products"
      role={'group'}
      display={'block'}
      rounded={'md'}
      _hover={{ bg: 'pink.50' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Flex gap="20px" pr="100px" alignItems={'center'}>
          <Image src={image} w="70px" h="70px" />
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Flex>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={textColor} w={6} h={6} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </NavLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      w="100%"
      mt="10px"
      borderRadius={'20px'}
      pos={'absolute'}
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      zIndex={99}
      display={{ md: 'block', lg: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        gap="10px"
        as={Link}
        href={href ?? '#'}
        justifyContent={'center'}
        alignItems={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: '0!important' }}
        alignItems="center"
      >
        <VStack textAlign={'center'} spacing={'10px'} mt={2} pl={4}>
          {children &&
            children.map(child => (
              <NavLink to="/product" style={{ textAlign: 'center' }}>
                <Flex justifyContent={'center'}>
                  <Flex
                    gap="10px"
                    alignItems={'center'}
                    w={{ base: '250px', md: '320px' }}
                    bg="pink"
                  >
                    <Image src={child.image} w="60px" />
                    <Text fontSize={'sm'}>{child.subLabel}</Text>
                  </Flex>
                </Flex>
              </NavLink>
            ))}
        </VStack>
      </Collapse>
    </Stack>
  );
};
