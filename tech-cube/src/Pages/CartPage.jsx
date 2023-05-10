
import { AspectRatio, Badge, Box, Button, Center, Divider, Flex, Heading, Image, Input, InputGroup, Text, } from '@chakra-ui/react';

import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, getCartServerdata, } from '../redux/CartReducer/action';
import CartItem from '../component/CartComponet/CartItem';

import { Link } from 'react-router-dom';
import emptyCartGif from '../Assets/emptyCartImg2.gif';
import { SearchContext } from '../context/SearchContextProvider';
import ProductPage from './ProductPage';








//----------------------------------------------------------------------------------------------------------------------------
const CartPage = () => {
  const dispatch = useDispatch();
  const { status } = useContext(SearchContext);
  const [promo, setPromo] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(false);
  let [totalPrice, setTotalPrice] = useState(0);

  let { cart } = useSelector(store => store.cartReducer);
  const promoCode = 'GETFIRSTBUY10';

  // let totalPrice = 0;
  // let val = 0;
  cart.forEach((cartItem) => {
    totalPrice += cartItem.price * cartItem.quantity;
  })

  useEffect(() => {
    dispatch(getCartServerdata());
    dispatch(getCartData());
    setTotalPrice(totalPrice-totalPrice*0.1)
  }, [appliedPromo]);

  const handlePromoCode = () => {
    if (promo === promoCode) {
      setAppliedPromo(true);
      // setTotalPrice(totalPrice -= totalPrice * 0.1);
    }
  }
  const cartData = useSelector(store => store.cartReducer.cart);



  return (
    status ? <ProductPage /> :
      <Box justifyContent={{base:'center',md:'center',lg:'flex'}} mb={'130px'} display={"flex"} flexDirection={{ base: 'column', sm: cart.length>0 && "row", md: "column", lg: cart.length>0 && 'row' }}  paddingTop={"20px"} p={'3%'}>

        <Flex width={{base:'100%',sm:'90%',md: '100%'}} justifyContent={'center'} direction={'column'} mt={{base:'50px',md:''}} >
          <Center fontWeight={'bold'} fontSize={'24px'}>Your Cart</Center>
          <Divider />
          {cart.length > 0 ? (

            <CartList />

          ) : (
            <Flex direction='column' justifyContent='center' >
            
            <Image src={emptyCartGif} />
           <Center> <Heading fontSize={'25px'} pt="40px">Your Cart Is Empty</Heading></Center>
            </Flex>
            
            /* <AspectRatio h={'80vh'} ratio={[1 / 1,4/3,16/9,20/10]}><Image h={'100%'} minW={'full'}  src={emptyCartGif} alt='empty cart' /></AspectRatio> */
          )}
        </Flex>
        <Box display={cartData.length === 0 ? 'none' : 'block'} width={{ base: "100%", sm: '100%', md: '90%', lg: 'sm', xl: 'lg' }} m="auto" pt={"50px"}>
          <Box className='order_summary'>
            <Text fontWeight={"bold"} color={"gray.500"}>Enter Promo Code</Text>
            <InputGroup>
              <Input value={promo} onChange={(e) => setPromo(e.target.value)} borderRadius={"none"} width={"60%"} type='text' placeholder='Promo Code' />
              <Button onClick={handlePromoCode} bgColor={"blackAlpha.900"} color={"white"} _hover={'none'} borderRadius={"none"} width={"40%"} >Submit</Button>
            </InputGroup>

          </Box>

          {appliedPromo && <Box  color={'gray.600'} mt={'20px'} w={'100%'} display={'flex'} justifyContent={'space-between'}><Text fontSize="25px">Promocode</Text><Badge colorScheme='green'>{promoCode} applied</Badge></Box>}

          <Box display={"flex"} justifyContent={"space-between"} margin={"20px"}>
            <Text color={"gray.600"}>Subtotal</Text>
            <Text color={"gray.600"}>₹ {totalPrice}</Text>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} margin={"20px"}>
            <Text color={"gray.600"}>Discount</Text>
            <Text color={"gray.600"}>-₹ {totalPrice > 0 ? '150' : 0}</Text>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} margin={"20px"}>
            <Text color={"gray.600"}>Tax</Text>
            <Text color={"gray.600"}>18% GSt</Text>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"} margin={"20px"}>
            <Text color={"gray.600"}>Estimate Total</Text>
            <Text color={"gray.600"}>₹ {totalPrice > 0 ? (totalPrice + totalPrice * 0.18 - 150).toFixed(2) : 0}</Text>
          </Box>

          <Link to="/checkout"><Button _hover={'gray.500'} display={'block'} margin={"auto"} width={"100%"} bgColor={"blackAlpha.900"} color={"white"}>Checkout</Button>
          </Link>
        </Box>

      </Box>
  );
};
export default CartPage;// nothing here yet


//----------------------------------------------------------------------------------------------------------------------

// cart list data shoing here
export const CartList = () => {

  const { cart } = useSelector(store => store.cartReducer);





  return (

    <Box maxH={'400px'} overflowY={'scroll'} className="cart-list-container"  >

      {cart.length > 0 && cart.map((el) => {
        return <CartItem key={el.id} {...el} />
      })}

    </Box>
  );
};






