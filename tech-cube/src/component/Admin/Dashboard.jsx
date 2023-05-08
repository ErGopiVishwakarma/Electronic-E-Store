
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import dashLogo from '../../Assets/dashboard.png'

const Dashboard = () => {
  return (
    <Flex  direction={'column'}  >
        <Flex justifyContent='flex-start' gap='50px'>
          <Flex alignItems={'center'} justifyContent={'center'} h='120px' w='200px' bg='orange.400' direction={'column'} color={'white'} borderRadius={'40px'} >
              <Heading fontSize={'25px'}>Total Users</Heading>
              <Heading fontSize={'25px'}>150</Heading>
          </Flex>
          <Flex alignItems={'center'} justifyContent={'center'} h='120px' w='200px' bg='green.400' direction={'column'} color={'white'} borderRadius={'40px'} >
              <Heading fontSize={'25px'}>Total Product</Heading>
              <Heading fontSize={'25px'}>150</Heading>
          </Flex>
          <Flex alignItems={'center'} justifyContent={'center'} h='120px' w='200px' bg='blackAlpha.900' direction={'column'} color={'white'} borderRadius={'40px'} >
              <Heading fontSize={'25px'}>Total Users</Heading>
              <Heading fontSize={'25px'}>150</Heading>
          </Flex>
        </Flex>
        <Image src={dashLogo} />
    </Flex>
  )
}

export default Dashboard