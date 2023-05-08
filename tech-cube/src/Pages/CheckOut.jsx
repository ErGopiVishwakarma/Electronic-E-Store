import { Box, Flex, Heading, Image, Text, Button, Divider, Alert, AlertIcon } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import orderSummaryImg from '../Assets/orderSummaryImg.avif';
import { useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import { showData } from '../redux/CheckoutReducer/action';
import { useDispatch, useSelector } from 'react-redux';

const CheckOut = () => {
  const text = useColorModeValue('dark', 'light');
  const dispatch = useDispatch();
  const data = useSelector(store => store.checkoutReducer.data);
  const auth = useSelector(store => store.authReducer.isAuth);

  useEffect(() => {
    dispatch(showData);
  }, [])

  return (
    <Flex id='app' justifyContent={'center'} direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }} w={'90%'} m={'20px auto'} gap={'20px'}>
      <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '65%', xl: '65%', '2xl': '65%' }} m={'100px 0 0px 0'}>
        <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p={'20px'} borderRadius={'10px'}>
          <Heading as={'h2'} fontSize={'23px'}>Review form And Shipping</Heading>
          {data.length === 0 ? <Alert m={'20px 0'} p={'30px'} status='warning'>
            <AlertIcon ml={'240px'}/>
            No items here.
          </Alert> :
            data.map(el => {
              return <Flex mt={'30px'} justifyContent={'space-between'}>
                <Image w={'200px'} src={el.image[0]} alt='product' />
                <Box>
                  <Heading as='h3' size={'md'}>{el.title}</Heading>
                  <Text>{el.category}</Text>
                </Box>
                <Box>
                  <Heading as='h3' size={'md'}>₹ {el.price}</Heading>
                  <Text>Discount : {el.discount}</Text>
                </Box>
              </Flex>
            })}
        </Box>
        <Box m={'30px 0 0px 0'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p={'20px'} borderRadius={'10px'}>
          <Flex mb={'17px'} justifyContent={'space-between'}>
            <Heading as={'h2'} fontSize={'23px'}>Delivery Information</Heading>
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
            <Flex mb={'15px'}>
              <Heading as={'h3'} fontSize={'17px'}>Name</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'15px'}>
              <Heading as={'h3'} fontSize={'17px'}>Address</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'15px'}>
              <Heading as={'h3'} fontSize={'17px'}>City</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'15px'}>
              <Heading as={'h3'} fontSize={'17px'}>Pincode</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'15px'}>
              <Heading as={'h3'} fontSize={'17px'}>State</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'15px'}>
              <Heading as={'h3'} fontSize={'17px'}>Mobile</Heading>
              <Text color={'gray'}></Text>
            </Flex>
            <Flex mb={'15px'}>
              <Heading as={'h3'} fontSize={'17px'}>Email</Heading>
              <Text color={'gray'}></Text>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box mt={{ base: '10px', sm: '10px', md: '10px', lg: '100px', xl: '100px', '2xl': '100px' }} w={{ base: '100%', sm: '100%', md: '100%', lg: '35%', xl: '35%', '2xl': '35%' }} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p={'20px'} borderRadius={'10px'}>
        <Flex justifyContent={'center'}>
          <Image w={'250px'} src={orderSummaryImg} alt='orderSummaryImg' />
        </Flex>
        <Heading textAlign={'center'} as={'h2'} fontSize={'23px'}>Order Summary</Heading>
        <Box mt={'20px'} lineHeight={'35px'}>
          <Flex justifyContent={'space-between'}>
            <Text>4 Months Subscription</Text>
            <Text>₹ 499</Text>
          </Flex>
          <Flex justifyContent={'space-between'}>
            <Text>Coupon: {data.length === 0 ? '' : 'GETFIRSTBUY10'}</Text>
            <Text>-₹ {data.length === 0 ? 0 : 40}</Text>
          </Flex>
        </Box>
        <Box m={'10px 0'} h={'3px'} color={'black'}>
          <Divider orientation='horizontal'></Divider>
        </Box>
        <Box lineHeight={'35px'}>
          <Flex justifyContent={'space-between'}>
            <Text>Subtotal</Text>
            <Text>₹ {data.length === 0 ? 0 : 100}</Text>
          </Flex>
          <Flex justifyContent={'space-between'}>
            <Text>Shipping</Text>
            <Text>FREE</Text>
          </Flex>
          <Flex justifyContent={'space-between'}>
            <Text>Estimated Tax</Text>
            <Text>₹ {data.length === 0 ? 0 : 20}</Text>
          </Flex>
        </Box>
        <Box m={'10px 0'} h={'3px'} color={'gray.600'}>
          <Divider orientation='horizontal'></Divider>
        </Box>
        <Box>
          <Flex justifyContent={'space-between'}>
            <Heading size={'md'}>Total</Heading>
              <Heading size={'md'}>₹ {data.length === 0 ? 0 : 100}</Heading>
          </Flex>
        </Box>
        <Box m={'10px 0'} h={'3px'} color={'gray.600'}>
          <Divider orientation='horizontal'></Divider>
        </Box>
        <Button _hover={'none'} w={'100%'} bg={text === 'dark' ? 'black' : 'white'} color={text === 'dark' ? 'white' : 'black'}>Proceed to Payment</Button>
      </Box>
    </Flex>
  )
}

export default CheckOut