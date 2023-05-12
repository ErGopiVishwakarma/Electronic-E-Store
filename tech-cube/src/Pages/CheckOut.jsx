import { Box, Flex, Heading, Image, Text, Button, Divider, Alert, AlertIcon, Input, InputGroup, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import orderSummaryImg from '../Assets/orderSummaryImg.avif';
import { useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
import { getAddress, postAddress, showData } from '../redux/CheckoutReducer/action';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, useNavigate, NavLink } from 'react-router-dom';
import { getCartServerdata } from '../redux/CartReducer/action';


const CheckOut = () => {
  const text = useColorModeValue('dark', 'light');
  const dispatch = useDispatch();
  const navigate= useNavigate()
  // const data = useSelector(store => store.checkoutReducer.data);
  const ref = useRef()
  const user = useSelector(store => store.checkoutReducer.userData);
  let data = useSelector(store => store.cartReducer.cart);
  
  const [toggle, setToggle] = useState(false);
  let id = JSON.parse(localStorage.getItem('userId')) || '';
 
  const toast = useToast();

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', city: '', pincode: '', state: '', mobile: ''
  })

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  useEffect(() => {
    if (id !== '') {
      dispatch(getAddress(id));
    }
  }, [])

  const handleEdit = () => {
    setToggle(!toggle);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.pincode || !formData.state || !formData.mobile) {
      toast({
        title: 'Failed',
        description: "All fields are Required",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
      return;
    }

    dispatch(postAddress(id, formData));
    setToggle(!toggle);
  }


  return (
    <Flex id='app' justifyContent={'center'} direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row', '2xl': 'row' }} w={'90%'} m={'20px auto'} gap={'20px'}>
      <Box w={{ base: '100%', sm: '100%', md: '100%', lg: '65%', xl: '65%', '2xl': '65%' }} m={'100px 0 0px 0'}>
        <Box overflowY={'scroll'} maxHeight={'400px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p={'20px'} borderRadius={'10px'}>
          <Heading as={'h2'} fontSize={'23px'}>Review form And Shipping</Heading>
          {data.length === 0 ? <Alert m={'20px 0'} p={'30px'} status='warning'>
            <AlertIcon ml={'240px'} />
            No items here.
          </Alert> :
            data.map(el => {
              return <Flex alignItems={'center'} mt={'30px'} justifyContent={'space-between'}>
                <Image w={'150px'} src={el.image[0]} alt='product' />
                <Box>
                  <Heading as='h3' size={'md'}>{el.title.substring(0, 15)}...</Heading>
                  <Text>{el.category}</Text>
                </Box>
                <Box>
                  <Heading as='h3' size={'md'}>₹ {el.price}</Heading>
                  <Text>Discount : {el.discount}%</Text>
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
              onClick={handleEdit}
              display={toggle && 'none'}
              css={css`
                &:hover {
                color: white;
                background-color: black;
              }
             `}
            >
              {!toggle ? 'Edit Address' : 'Add Address'}
            </Button>
          </Flex>
          {!toggle &&
            <Box>
              <Flex mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>First Name</Heading>
                <Text ml={'50px'} color={'gray'}>{user.firstName}</Text>
              </Flex>
              <Flex mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>Last Name</Heading>
                <Text ml={'50px'} color={'gray'}>{user.lastName}</Text>
              </Flex>
              <Flex mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>Address</Heading>
                <Text ml={'50px'} color={'gray'}>{user.address}</Text>
              </Flex>
              <Flex mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>City</Heading>
                <Text ml={'50px'} color={'gray'}>{user.city}</Text>
              </Flex>
              <Flex mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>Pincode</Heading>
                <Text ml={'50px'} color={'gray'}>{user.pincode}</Text>
              </Flex>
              <Flex mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>State</Heading>
                <Text ml={'50px'} color={'gray'}>{user.state}</Text>
              </Flex>
              <Flex mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>Mobile</Heading>
                <Text ml={'50px'} color={'gray'}>{user.mobile}</Text>
              </Flex>
              <Flex mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>Email</Heading>
                <Text ml={'50px'} color={'gray'}>{user.email}</Text>
              </Flex>
            </Box>
          }

          {toggle &&
            <Box>
              <Flex alignItems={'center'} justifyContent={'space-between'} mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>First Name</Heading>
                <Input w={'70%'} name='firstName' value={formData.firstName} onChange={handleChange} color={'gray'} type='text' />
              </Flex>
              <Flex alignItems={'center'} justifyContent={'space-between'} mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>Last Name</Heading>
                <Input w={'70%'} name='lastName' value={formData.lastName} onChange={handleChange} color={'gray'} type='text' />
              </Flex>
              <Flex alignItems={'center'} justifyContent={'space-between'} mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>Address</Heading>
                <Input w={'70%'} name='address' value={formData.address} onChange={handleChange} color={'gray'} type='text' />
              </Flex>
              <Flex alignItems={'center'} justifyContent={'space-between'} mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>City</Heading>
                <Input w={'70%'} name='city' value={formData.city} onChange={handleChange} color={'gray'} type='text' />
              </Flex>
              <Flex alignItems={'center'} justifyContent={'space-between'} mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>Pincode</Heading>
                <Input w={'70%'} name='pincode' value={formData.pincode} onChange={handleChange} color={'gray'} type='text' />
              </Flex>
              <Flex alignItems={'center'} justifyContent={'space-between'} mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>State</Heading>
                <Input w={'70%'} name='state' value={formData.state} onChange={handleChange} color={'gray'} type='text' />
              </Flex>
              <Flex alignItems={'center'} justifyContent={'space-between'} mb={'15px'}>
                <Heading as={'h3'} fontSize={'17px'}>Mobile</Heading>
                <Input w={'70%'} name='mobile' value={formData.mobile} onChange={handleChange} color={'gray'} type='number' />
              </Flex>
              <Flex justifyContent={'flex-end'}>
                <Button onClick={handleSubmit} _hover={'none'} bg={'black'} color={'white'}>Save Address</Button>
              </Flex>
            </Box>
          }
        </Box>
      </Box>
      <CheckoutPrice text = {text}/>
 
    </Flex>
  )
}

export default CheckOut;


export const CheckoutPrice = ({text}) => {
  const navigate = useNavigate();

  const [promoCodeStatus, setPromoCodeStatus] = useState('');
  const data = JSON.parse(localStorage.getItem('cart')) || [];
  let cartPrice = 0;
  const promo = JSON.parse(localStorage.getItem('promo')) || ''

   data.forEach(el => {
     cartPrice += el.price * el.quantity;
   })

   useEffect(() => {
     if(promo){
      setPromoCodeStatus(true);
     }
     else{
      setPromoCodeStatus(false);
     }
   }, [])

   return <Box mt={{ base: '10px', sm: '10px', md: '10px', lg: '100px', xl: '100px', '2xl': '100px' }} w={{ base: '100%', sm: '100%', md: '100%', lg: '35%', xl: '35%', '2xl': '35%' }} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p={'20px'} h={'550px'} borderRadius={'10px'}>
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
       <Text>Coupon: {promoCodeStatus ? 'GETFIRSTBUY10' : ''}</Text>
       <Text>-₹ {promoCodeStatus ? (cartPrice*0.1).toFixed(2) : 0}</Text>
     </Flex>
   </Box>
   <Box m={'10px 0'} h={'3px'} color={'black'}>
     <Divider orientation='horizontal'></Divider>
   </Box>
   <Box lineHeight={'35px'}>
     <Flex justifyContent={'space-between'}>
       <Text>Subtotal</Text>
       <Text>₹ {(cartPrice)}</Text>
     </Flex>
     <Flex justifyContent={'space-between'}>
       <Text>Shipping</Text>
       <Text>{cartPrice > 500 ? 'FREE' : cartPrice === 0 ? `₹ ${0}` : `₹ ${40}`}</Text>
     </Flex>
     <Flex justifyContent={'space-between'}>
       <Text>Tax 18%</Text>
       <Text>₹ {(cartPrice*0.18).toFixed(2)}</Text>
     </Flex>
   </Box>
   <Box m={'10px 0'} h={'3px'} color={'gray.600'}>
     <Divider orientation='horizontal'></Divider>
   </Box>
   <Box>
     <Flex justifyContent={'space-between'}>
       <Heading size={'md'}>Total</Heading>
       <Heading size={'md'}>₹ {promoCodeStatus ? (cartPrice + cartPrice*0.18 - cartPrice*0.1).toFixed(2) : (cartPrice + cartPrice*0.18).toFixed(2)}</Heading>
     </Flex>
   </Box>
   <Box m={'10px 0'} h={'3px'} color={'gray.600'}>
     <Divider orientation='horizontal'></Divider>
   </Box>
   <Button onClick={() => navigate('/payment')} _hover={{ bg: 'gray.700' }} w={'100%'} bg={text === 'dark' ? 'black' : 'white'} color={text === 'dark' ? 'white' : 'black'}>Proceed to Payment</Button>
 </Box>
}