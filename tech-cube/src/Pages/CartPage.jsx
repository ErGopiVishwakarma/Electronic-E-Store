import { Box, Image, Text } from '@chakra-ui/react';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, } from '../redux/CartReducer/action';
import CartItem from '../component/CartComponet/CartItem';      


export let updateTriggers; // is for making changes on localStorage

//----------------------------------------------------------------------------------------------------------------------------
const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store.cartReducer);

  useEffect(() => {
    dispatch(getCartData());
  },[]);
  return (
    <Box
      display={'flex'}
      flexDir={{ base: 'column', sm: 'row' }}
      justifyContent={'space-between'}
    >
      {cart.length > 0 ? (
        <CartList />
      ) : (
        <div className="empty-cart">No data found plese buy some product</div>
      )}

      <div className="payment-summery">
        <OrderSummery />
      </div>
    </Box>
  );
};
export default CartPage;// nothing here yet

//--------------------------------------------------------------------------------------------------------------------

// cart list data shoing here
export const CartList = () => {

  const { cart } = useSelector(store => store.cartReducer);

  
  return (
    <div className="cart-list-container">
      {cart.map(cartItem => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
    </div>
  );
};


//order summery

export const OrderSummery = () => {
  const { cart } = useSelector(store => store.cartReducer);
    let totalPrice = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
    });
    return (
      <Box border={"1px solid red"} minW={{base:"full",md:"md",lg:"lg"}}>
       <h4>Products</h4>
       <Box display={'flex'} flexWrap={'wrap'}> {cart.map((el) =>{
        return <Image maxW={'50px'} key={el.id} src={el.image[0]} alt={el.title}/>
       })}</Box>

       <h4>Price  : {totalPrice}</h4>
       <Text>Gst: 18%</Text>
       <h3>Grant Total : {totalPrice+totalPrice*0.18}</h3>
      
      </Box>
    );
  

};


