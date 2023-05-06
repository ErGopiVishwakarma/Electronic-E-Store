import { Box, CloseButton, Flex, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react'
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
} from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Admin, Dash, Product, User } from '../../redux/Admin/actionType';


const SidebarContent = ({ onClose, ...rest }) => {
    const dispatch = useDispatch()

    const dashBoard = () => {
        dispatch({ type: Dash })
    }
    const adminRow = () => {
        dispatch({ type: Admin })
    }
    const userRow = () => {
        dispatch({ type: User })
    }
    const allProd = () => {
        dispatch({ type: Product })
    }

    const LinkItems = [
        { name: 'Dashboard', icon: FiHome, fun: dashBoard },
        { name: 'Admin Profile', icon: FiTrendingUp, fun: adminRow },
        { name: 'User Profile', icon: FiCompass, fun: userRow },
        { name: 'All Product', icon: FiStar, fun: allProd },
        // { name: 'Home', icon: FiSettings },
    ];
    return (
        <Box
            transition="3s ease"
            bg={'blackAlpha.900'}
            w={{ base: '100%', md: '100%', lg: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={'white'}>
                    Logo
                </Text>
                <CloseButton display={{ base: 'flex', md: 'flex', lg: 'none' }} color={'white'} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} fun={link.fun}>
                    {link.name}
                </NavItem>
            ))}
            <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} >
                <Flex align="center" color={'white'} p="4" borderRadius="lg" role="group" cursor="pointer" _hover={{
                    bg: 'blackAlpha.900',
                    color: 'white',}}>                   
                        <Icon mr="4" fontSize="16" _groupHover={{
                            color: 'white',
                        }}
                            as={FiHome}
                        />                  
                    Home
                </Flex>
            </Link>
        </Box>
    );
}

const NavItem = ({ icon, children, fun, ...rest }) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} onClick={() => fun()}>
            <Flex align="center" color={'white'} p="4" borderRadius="lg" role="group" cursor="pointer" _hover={{
                bg: 'blackAlpha.900',
                color: 'white',
            }}
                {...rest}>
                {icon && (
                    <Icon mr="4" fontSize="16" _groupHover={{
                        color: 'white',
                    }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

export default SidebarContent