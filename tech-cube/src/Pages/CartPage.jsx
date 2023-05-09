
import { Badge, Box, Button, Center, Divider, Flex, Heading, Image, Input, InputGroup, Text, } from '@chakra-ui/react';

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
  }, []);

  const handlePromoCode = () => {
    if (promo === promoCode) {
      setAppliedPromo(true);
      setTotalPrice(totalPrice -= totalPrice * 0.1);
    }
  }

  return (
    status ? <ProductPage /> :
      <Box mb={'130px'} display={"flex"} flexDirection={{ base: 'column', sm: "row", md: "column", lg: 'row' }} paddingTop={"90px"} px={'3%'}>

        <Box width={{ base: "full", sm: 'sm', md: '2xl', lg: '4xl' }} >
          <Center fontWeight={'bold'} fontSize={'24px'}>My Cart</Center>
          <Divider />
          {cart.length > 0 ? (

            <CartList />

          ) : (
            <Box h={'80vh'} className="empty-cart"><Image h={'100%'} minW={'full'} src={emptyCartGif} alt='empty cart' /></Box>
          )}
        </Box>
        <Box display={totalPrice === 0 ? 'none' : 'block'} width={{ base: "full", sm: 'sm', md: 'sm', lg: 'sm', xl: 'lg' }} margin={"4px"} padding={"20px"}>
          <Box className='order_summ' >
            <Text fontWeight={"bold"} color={"gray.500"}>Enter Promo Code</Text>
            <InputGroup>
              <Input value={promo} onChange={(e) => setPromo(e.target.value)} borderRadius={"none"} width={"60%"} type='text' placeholder='Promo Code' />
              <Button onClick={handlePromoCode} bgColor={"blackAlpha.900"} color={"white"} _hover={'none'} borderRadius={"none"} width={"40%"} >Submit</Button>
            </InputGroup>

          </Box>

          {appliedPromo && <Box color={'gray.600'} m={'20px'} w={'100%'} display={'flex'} justifyContent={'space-between'}><Text>Promocode</Text><Badge colorScheme='green'>{promoCode} applied</Badge></Box>}

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






