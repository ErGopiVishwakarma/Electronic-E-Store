import { Flex, Center, Box, Heading, Image, Text, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from '../../redux/Admin/action'

export const adminPageData = [
    { image: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' },
    { image: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' },
    { image: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' },
    { image: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' },
    { image: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' },
    { image: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' }
]

const Users = () => {
const dispatch = useDispatch()
const userData= useSelector(store=>store.adminReducer.userProfile)

useEffect(()=>{
    dispatch(getUser())
},[])

console.log(userData)

    return (
        <Flex direction={'column'} bg='white' borderRadius={'10px'}>
            <Flex justify={'space-between'} px={{ base: '7px', md: '20px', lg: '50px' }} alignItems={'center'} py="8px">
                <Text fontSize={'20px'} fontWeight={'bolder'}>Total users - 5</Text>
                <Button>Add Users</Button>
            </Flex>
            <Box w="98%" h={{ base: "100vh", md: '100vh', lg: '450px' }} direction={'column'} overflow={'scroll'} >

                {
                    userData?.map((el,ind) => (
                        <Flex key={ind} direction={{ base: 'column', md: 'row' }} justify="space-between" alignItems={'center'} px={{ base: '7px', md: '20px', lg: '50px' }} py="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
                            <Flex w="100%" justifyContent={'space-between'} pr={{ base: '0px', md: '30px', lg: '100px' }} alignItems={'center'}>
                                <Image src={el.image} w='70px' h='70px' borderRadius={'50%'} />
                                <Text>{el.name}</Text>
                                <Button display={{ base: 'block', md: 'none' }}>show detail</Button>
                                <Text display={{ base: 'none', md: 'block' }}>{el.email}</Text>
                                <Text display={{ base: 'none', md: 'block' }}>{el.password}</Text>
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

export default Users