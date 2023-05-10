
import React, { ReactNode, useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Input,
  useToast,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';

import SidebarContent from '../component/Admin/SidebarContent';
import AdminBody from '../component/Admin/AdminBody';
import UserProfile from '../component/Admin/UserModal';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/techcube.png'


 const LinkItems= [
  { name: 'Dashboard', icon: FiHome },
  { name: 'Admin Profile', icon: FiTrendingUp },
  { name: 'User Profile', icon: FiCompass },
  { name: 'All Product', icon: FiStar },
  { name: 'Home', icon: FiSettings },
];
export default function AdminPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (

    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} pos="relative" zIndex={999}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'none', lg:'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
       >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />

      {/* here is all pages of body  */}
      <Box ml={{ base: 0, md: 0 ,lg:60}} p={{base:'2',md:'3',lg:'4'}}>
         <AdminBody />
      </Box>
    </Box>
  );

}


const MobileNav = ({ onOpen, ...rest }) => {
  let toast = useToast()
  let navigate = useNavigate()
  let adminProfile = JSON.parse(localStorage.getItem('adminProfile')) || {}
  const adminAuth = () => {
    localStorage.setItem('adminAuth',JSON.stringify(false))
    toast({
      title: 'successfully logOut',
      description: "Redirecting to login page",
      status: 'success',
      duration: 2000,
      isClosable: true,
      position:'top'
    })
    setTimeout(()=>{
      navigate('/adminlogin')
    },2000)
  }
  return (
    <Flex 
    ml={{ base: 0, md: 0,lg:60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={'blackAlpha.900'}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'space-between' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'block',lg:'none' }}
        onClick={onOpen}
        variant="unstyled"
        color={'white'}
        aria-label="open menu"
        icon={<FiMenu />}
      />
       <Flex display={{base:'none',md:'none',lg:'block'}}>
       <Input w="300px" placeholder='search' color="white" variant={'outline'}/>
       </Flex> 
      <Text
        display={{ base: 'flex', md: 'block' ,lg:'none'}}
        fontSize="2xl"
        fontFamily="monospace"
        color="white"
        fontWeight="bold">
        <Image src={logo} w="120px" />
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    adminProfile.pic
                  }
                  name={adminProfile.name}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  color='white'
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{adminProfile.name}</Text>
                  <Text fontSize="xs" color='white'>
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <UserProfile data={adminProfile}>
                  Profile
                </UserProfile>
              </MenuItem>
              <MenuItem onClick={adminAuth}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

