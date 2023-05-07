import { Box, Button, Center, } from '@chakra-ui/react';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, } from '../redux/CartReducer/action';
import CartItem from '../component/CartComponet/CartItem';
  




//----------------------------------------------------------------------------------------------------------------------------
const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store.cartReducer);

    let totalPrice = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
    })

  useEffect(() => {
    dispatch(getCartData());
  },[]);
  return (
    <Box marginTop={"30px"}
    px={'3%'}
      display={'flex'}
      flexDir={{ base: 'column', sm: 'column' ,md: 'row'}}
      justifyContent={'space-between'}  
    >
      {cart.length > 0 ? (<>
        <CartList />


        <div className="payment-summery">
     
        </div>
        </>
      ) : (
        <div className="empty-cart">No data found plese buy some product</div>
      )}

     
    </Box>
  );
};
export default CartPage;// nothing here yet

//--------------------------------------------------------------------------------------------------------------------

// cart list data shoing here
export const CartList = () => {

  const { cart } = useSelector(store => store.cartReducer);

  


  
  return (
    <Box className="cart-list-container"  width={"80%"} margin={"auto"}>
    {cart.length > 0 && cart.map((el)=>{
            return <CartItem  key={el.id} {...el}  />
          })}
     
    </Box>
  );
};


//order summery

// export const OrderSummery = () => {
//   const { cart } = useSelector(store => store.cartReducer);
//     let totalPrice = 0;
//     cart.forEach((cartItem) => {
//       totalPrice += cartItem.price * cartItem.quantity;
//     });
//     return (
//       <Center>
     
//       </Center>
  
//     );
  

// };


