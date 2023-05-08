import { Flex, Center, Box, Heading, Image, Text, Button, Avatar } from '@chakra-ui/react'
import { adminPageData } from './Users'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Admin = () => {
   const [admin,setAdmin] = useState([])
    useEffect(()=>{
        axios('http://localhost:8080/admin').then(res => setAdmin(res.data))
    },[])


    return (
        <Flex direction={'column'} bg='white' borderRadius={'10px'}>
            <Flex justify={'flex-end'} px={{ base: '7px', md: '20px', lg: '50px' }} alignItems={'center'} py="15px">
                <Text fontSize={'20px'} fontWeight={'bolder'}>Total Admin - {admin.length}</Text>
            </Flex>
            <Box w="98%" h={{ base: "100vh", md: '100vh', lg: '450px' }} direction={'column'} overflowY={'scroll'} >

                {
                    admin?.map((el,ind) => (
                        <Flex key={ind} direction={{ base: 'column', md: 'row' }} justify="space-between" alignItems={'center'} px={{ base: '7px', md: '20px', lg: '50px' }} py="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
                            <Flex w="100%" justifyContent={'space-between'} pr={{ base: '0px', md: '30px', lg: '100px' }} alignItems={'center'}>
                                <Avatar src={el.pic} w='70px' h='70px' borderRadius={'50%'} size="sm" name={el.name} />
                                <Text>{el.name}</Text>
                                <Button display={{ base: 'block', md: 'none' }} varient="unstyle">show detail</Button>
                                <Text display={{ base: 'none', md: 'block' }}>{el.email}</Text>
                                <Text display={{ base: 'none', md: 'block' }}>{el.password}</Text>
                                <Text display={{ base: 'none', md: 'block' }}>{el.mobile}</Text>
                            </Flex>
                            {/* <Flex gap={{ base: '30px', md: '30px', lg: '50px' }} display={{ base: 'none', md: 'flex' }} >
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </Flex> */}
                        </Flex>
                    ))
                }
            </Box>
        </Flex>

    )
}

export default Admin