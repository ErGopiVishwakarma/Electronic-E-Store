import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react'
import React from 'react';
import { css } from '@emotion/react';

const CheckOut = () => {
  return (
    <Flex w={'90%'} m={'auto'}>
      <Box w={'60%'} m={'100px 0 30px 0'}>
        <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p={'20px'} borderRadius={'10px'}>
          <Heading as={'h2'} size={'lg'}>Review form And Shipping</Heading>
          <Flex mt={'30px'} justifyContent={'space-between'}>
            <Image src='' alt='product' />
            <Box>
              <Heading as='h3' size={'md'}>abcd</Heading>
              <Text>abcd</Text>
            </Box>
            <Box>
              <Heading as='h3' size={'md'}>$</Heading>
              <Text>Discount : </Text>
            </Box>
          </Flex>
        </Box>
        <Box m={'30px 0'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p={'20px'} borderRadius={'10px'}>
          <Flex mb={'20px'} justifyContent={'space-between'}>
            <Heading as={'h2'} size={'lg'}>Delivery Information</Heading>
            <Button
              borderRadius={'20px'}
              variant={'outline'}
              css={css`
                &:hover {
                color: white;
                background-color: black;
              }
             `}
            >
              Edit Details
            </Button>
          </Flex>
          <Box>
            <Flex mb={'10px'}>
              <Heading as={'h3'} size={'md'}>Name</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'10px'}>
              <Heading as={'h3'} size={'md'}>Address</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'10px'}>
              <Heading as={'h3'} size={'md'}>City</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'10px'}>
              <Heading as={'h3'} size={'md'}>Pincode</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'10px'}>
              <Heading as={'h3'} size={'md'}>State</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'10px'}>
              <Heading as={'h3'} size={'md'}>Mobile</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'10px'}>
              <Heading as={'h3'} size={'md'}>Email</Heading>
              <Text color={'gray'}></Text>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box>
        
      </Box>
    </Flex>
  )
}

export default CheckOut