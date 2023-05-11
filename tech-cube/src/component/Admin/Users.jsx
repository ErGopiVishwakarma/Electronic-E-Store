import { Flex, Center, Box, Heading, Image, Text, Button, Avatar } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserFromBlacklist, getAllDataFromBlacklist, postUserToBlacklist } from '../../redux/Admin/action'

const Users = () => {
    const [user, setUser] = useState([])
    const dispatch = useDispatch()
    const blackData = useSelector(store => store.adminReducer.blacklist)
    console.log(blackData)

    useEffect(() => {
        axios('https://viridian-confusion-henley.glitch.me/user').then(res => setUser(res.data))
    }, [])

    const blockUser = (data) => {
        dispatch(postUserToBlacklist(data)).then(res => dispatch(getAllDataFromBlacklist()))
    }

    const delUser = (id) => {
        dispatch(deleteUserFromBlacklist(id)).then(res => dispatch(getAllDataFromBlacklist()))
    }


    return (
        <Flex direction={'column'} bg='white' borderRadius={'10px'}>
            <Flex justify={'flex-end'} px={{ base: '7px', md: '20px', lg: '50px' }} alignItems={'center'} py="15px">
                <Text fontSize={'20px'} fontWeight={'bolder'}>Total users - {user.length}</Text>
            </Flex>
            <Box w="98%" h={{ base: "100vh", md: '100vh', lg: '450px' }} direction={'column'} overflow={'scroll'} >

                {
                    user?.map((el, ind) => (
                        <Flex key={ind} direction={{ base: 'column', md: 'row' }} justify="space-between" alignItems={'center'} px={{ base: '7px', md: '20px', lg: '50px' }} py="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
                            <Flex w="100%" justifyContent={'space-between'} pr={{ base: '0px', md: '30px', lg: '100px' }} alignItems={'center'}>
                                <Avatar src={el.pic} w='70px' h='70px' borderRadius={'50%'} name={`${el.firstName} ${el.lastName}`} />
                                <Text>{`${el.firstName} ${el.lastName}`}</Text>
                                <Button display={{ base: 'block', md: 'none' }}>show detail</Button>
                                <Text display={{ base: 'none', md: 'block' }}>{el.email.substring(0, 20)}</Text>
                                <Text display={{ base: 'none', md: 'block' }}>{el.password}</Text>
                            </Flex>
                            <Flex gap={{ base: '30px', md: '30px', lg: '50px' }} display={{ base: 'none', md: 'flex' }} >
                                {
                                    blackData.length > 0 ?

                                        blackData?.map(elem => elem.email === el.email ? <Button bg="red.400" colorScheme='black' onClick={() => delUser(elem.id)}>Unblock User</Button> : <Button bg="green.400" colorScheme='black' onClick={() => blockUser(el)}>Block User</Button>)
                                        :
                                        <Button bg="green.400" colorScheme='black' onClick={() => blockUser(el)}>Block User</Button>}
                            </Flex>

                        </Flex>
                    ))
                }
            </Box>
        </Flex>

    )
}

export default Users