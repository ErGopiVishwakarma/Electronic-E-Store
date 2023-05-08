
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import dashLogo from '../../Assets/dashboard.png'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Dashboard = () => {
  const [user, setUser] = useState('')
  const product = useSelector(store => store.adminReducer.allProductData)
  let count = product.length
  useEffect(() => {
    axios('http://localhost:8080/user').then(res => setUser(res.data.length))
  }, [])
  return (
    <Flex direction={'column'} css={css`&:
    {
   minHight:'100vh',
   width:'100%'
 }
`} >
      <Flex justifyContent='flex-start' gap='50px'>
        <Flex alignItems={'center'} justifyContent={'center'} h='120px' w='200px' bg='orange.400' direction={'column'} color={'white'} borderRadius={'40px'} >
          <Heading fontSize={'25px'}>Total User</Heading>
          <Heading fontSize={'25px'}>{user}</Heading>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'center'} h='120px' w='200px' bg='green.400' direction={'column'} color={'white'} borderRadius={'40px'} >
          <Heading fontSize={'25px'}>Total Product</Heading>
          <Heading fontSize={'25px'}>{count}</Heading>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'center'} h='120px' w='200px' bg='blackAlpha.900' direction={'column'} color={'white'} borderRadius={'40px'} >
          <Heading fontSize={'25px'}>Total Sale</Heading>
          <Heading fontSize={'25px'}>0</Heading>
        </Flex>
      </Flex>
      <Box>
        <Image src={dashLogo} w="100%"  />
      </Box>
    </Flex>
  )
}

export default Dashboard