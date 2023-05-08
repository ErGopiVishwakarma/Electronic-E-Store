import { Flex, Center, Box, Heading, Image, Text, Button, Avatar } from '@chakra-ui/react'
import { adminPageData } from './Users'

const Admin = () => {
    return (
        <Flex direction={'column'} bg='white' borderRadius={'10px'}>
            <Flex justify={'space-between'} px={{ base: '7px', md: '20px', lg: '50px' }} alignItems={'center'} py="8px">
                <Text fontSize={'20px'} fontWeight={'bolder'}>Total Admin - 5</Text>
                <Button>Add Admin</Button>
            </Flex>
            <Box w="98%" h={{ base: "100vh", md: '100vh', lg: '450px' }} direction={'column'} overflowY={'scroll'} >

                {
                    adminPageData?.map((el,ind) => (
                        <Flex key={ind} direction={{ base: 'column', md: 'row' }} justify="space-between" alignItems={'center'} px={{ base: '7px', md: '20px', lg: '50px' }} py="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
                            <Flex w="100%" justifyContent={'space-between'} pr={{ base: '0px', md: '30px', lg: '100px' }} alignItems={'center'}>
                                <Avatar src={el.image} w='70px' h='70px' borderRadius={'50%'} size="sm" name={el.name} />
                                <Text>gopi vihswakarma</Text>
                                <Button display={{ base: 'block', md: 'none' }} varient="unstyle">show detail</Button>
                                <Text display={{ base: 'none', md: 'block' }}>g@gmail.com</Text>
                                <Text display={{ base: 'none', md: 'block' }}>g1234567</Text>
                            </Flex>
                            <Flex gap={{ base: '30px', md: '30px', lg: '50px' }} display={{ base: 'none', md: 'flex' }} >
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </Flex>
                        </Flex>
                    ))
                }
            </Box>
        </Flex>

    )
}

export default Admin