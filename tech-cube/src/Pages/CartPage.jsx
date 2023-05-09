
import { Box, Button, Center, Divider, Heading, Image, Input, InputGroup, Text, } from '@chakra-ui/react';

import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, getCartServerdata, } from '../redux/CartReducer/action';
import CartItem from '../component/CartComponet/CartItem';

import { Link } from 'react-router-dom';
import emptyCartGif from '../Assets/empty-cart.gif';
import { SearchContext } from '../context/SearchContextProvider';
import ProductPage from './ProductPage';







//----------------------------------------------------------------------------------------------------------------------------
const CartPage = () => {
  const dispatch = useDispatch();
  const {status} = useContext(SearchContext);

  let { cart } = useSelector(store => store.cartReducer);

  let totalPrice = 0;
  cart.forEach((cartItem) => {
    totalPrice += +cartItem.price * +cartItem.quantity;
  })

  useEffect(() => {
    dispatch(getCartServerdata());
    dispatch(getCartData());
  }, []);
  return (
   status ? <ProductPage/> :
    <Box display={"flex"} flexDirection={{ base: 'column', sm: "row", md: "column", lg: 'row' }} paddingTop={"90px"} px={'3%'}>

      <Box width={{ base: "full", sm: 'sm', md: '2xl', lg: '4xl' }} >
        <Center fontWeight={'bold'} fontSize={'24px'}>My Cart</Center>
        <Divider />
        {cart.length > 0 ? (

          <CartList />

        ) : (
          <div className="empty-cart"><Image minW={'full'} src={emptyCartGif} alt='empty cart' /></div>
        )}
      </Box>
      <Box width={{ base: "full", sm: 'sm', md: 'sm', lg: 'sm', xl: 'lg' }} margin={"4px"} padding={"20px"}>
        <Box className='order_summ' >
          <Text fontWeight={"bold"} color={"gray.500"}>Enter Promo Code</Text>
          <InputGroup>
            <Input borderRadius={"none"} width={"60%"} type='text' placeholder='Promo Code' />
            <Button bgColor={"blackAlpha.900"} color={"white"} borderRadius={"none"} width={"40%"} >Submit</Button>
          </InputGroup>

        </Box>
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
          <Text color={"gray.600"}>18%GSt</Text>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} margin={"20px"}>
          <Text color={"gray.600"}>Estimate Total</Text>
          <Text color={"gray.600"}>₹ {totalPrice > 0 ? totalPrice + totalPrice * 0.18 - 150 : 0}</Text>
        </Box>

        <Link to="/checkout"><Button display={'block'} margin={"auto"} borderRadius={"none"} width={"100%"} bgColor={"blackAlpha.900"} color={"white"}>Chekout</Button>
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






