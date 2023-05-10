import { Flex , useColorModeValue,IconButton,Text,HStack, Input, Image} from "@chakra-ui/react";
import { FiMenu, FiBell, } from 'react-icons/fi';
import logo from '../..//Assets/techcube.png'

const AdminNav = ({ onOpen, ...rest }) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md:4 }}
        height="20"
        alignItems="center"
        bg={'blackAlpha.800'}
        borderBottomWidth="1px"
        borderBottomColor={'blackAlpha.900'}
        justifyContent={{ base: 'space-between', md: 'space-between' }}
        {...rest}>
             <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
    <Input w="300px" bg="white" placeholder="search" />
      <Text
        display={{ base: 'flex', md: 'flex' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        color={'white'}>
        <Image src={logo} w="120px" />
      </Text>
      </Flex>
    );
  };

  export default AdminNav
