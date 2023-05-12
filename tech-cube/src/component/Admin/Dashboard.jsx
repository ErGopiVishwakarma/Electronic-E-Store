
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import dashLogo from '../../Assets/dashboard.png'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getAllData, getAllDataFromBlacklist } from '../../redux/Admin/action'

const Dashboard = () => {
  const [user, setUser] = useState('')
  const product = useSelector(store => store.adminReducer.allProductData)
  let count = product.length
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllData())
  }, [])

  useEffect(()=>{
  dispatch(getAllDataFromBlacklist())
  },[])

  useEffect(() => {
    axios('https://viridian-confusion-henley.glitch.me/user').then(res => setUser(res.data.length))
  }, [])
  return (
    <Flex direction={'column'} css={css`&:
    {
   minHight:'100vh',
   width:'100%'
 }
`} >
      <Flex justifyContent={{ base: 'center', md: 'flex-start' }} gap={{base:'10px',md:'50px'}} direction={{ base: 'column', md: 'row' }} alignItems={'center'}>
        <Flex gap ={{base:'60px',md:'5px'}} alignItems={'center'} justifyContent={'center'} h='120px' w={{ base: '90%', md: '200px' }} bg='orange.400' direction={{ base: 'row', md: 'column' }} color={'white'} borderRadius={'40px'} >
          <Heading fontSize={'25px'}>Total User</Heading>
          <Heading fontSize={'25px'}>{user}</Heading>
        </Flex>
        <Flex gap ={{base:'60px',md:'5px'}} alignItems={'center'} justifyContent={'center'} h='120px' w={{ base: '90%', md: '200px' }} bg='green.400' direction={{ base: 'row', md: 'column' }} color={'white'} borderRadius={'40px'} >
          <Heading fontSize={'25px'}>Total Product</Heading>
          <Heading fontSize={'25px'}>{count}</Heading>
        </Flex>
        <Flex gap ={{base:'60px',md:'5px'}} alignItems={'center'} justifyContent={'center'} h='120px' w={{ base: '90%', md: '200px' }} bg='blackAlpha.900' direction={{ base: 'row', md: 'column' }} color={'white'} borderRadius={'40px'} >
          <Heading fontSize={'25px'}>Total Sale</Heading>
          <Heading fontSize={'25px'}>0</Heading>
        </Flex>
      </Flex>
      <Box>
        <Image src={dashLogo} w="100%" h={{base:'350px',md:'500px',lg:'auto'}} mt={{base:'30px',md:'30px',lg:'5px'}} />
      </Box>
    </Flex>
  )
}

export default Dashboard