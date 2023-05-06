import { Flex , useColorModeValue,IconButton,Text,HStack, Input} from "@chakra-ui/react";
import { FiMenu, FiBell, } from 'react-icons/fi';

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
        Logo
      </Text>

      {/* <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          color={'white'}
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
      </HStack> */}
      </Flex>
    );
  };

  export default AdminNav
