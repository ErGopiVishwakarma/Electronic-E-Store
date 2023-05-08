import { Box, Button, Center, } from '@chakra-ui/react';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, } from '../redux/CartReducer/action';
import CartItem from '../component/CartComponet/CartItem';
  let data=[{"color":["black","silver","green","pink"],"image":["https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1668756103","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/616b4ead-bbd9-4a16-aeab-8d331a16f697_600x.png?v=1642405569","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ivory-white_600x.png?v=1639466536","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_600x.png?v=1642405569"],"tag_badge":"60 Hours Playback","title":"Airdopes 131","price":999,"discount":67,"mrp":2990,"rating":4.8,"category":"wireless_earbuds","id":2,"description":"Up to 60HRS Playback 13mm drivers IWP Technology","brand":"BOAT","quantity":5,"review":1363},{"color":["black","white","blue"],"image":["https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3_743027d7-94ca-43e1-9c04-72ad6483c226_700x.png?v=1669055392","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_614c0321-f235-4765-b157-a8727f7e4aae_700x.png?v=1669055570","https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_0b38e5a7-0427-413d-b804-342451f18cca_700x.png?v=1669055570"],"tag_badge":"50 Hours Playback","title":"Airdopes Atom 81","price":999,"discount":71,"mrp":3490,"rating":5,"category":"wireless_earbuds","id":3,"description":"Up to 50HRS Playback ENx™ Technology ASAP Fast Charge ","brand":"BOAT","quantity":4,"review":48903}]




//----------------------------------------------------------------------------------------------------------------------------
const CartPage = () => {
  const dispatch = useDispatch();
  // const { cart } = useSelector(store => store.cartReducer);
  localStorage.setItem('cart',JSON.stringify(data))
  let cart =JSON.parse(localStorage.getItem('cart')) || []
    let totalPrice = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
    })

  useEffect(() => {
    dispatch(getCartData());
  },[]);
  return (
    <Box pt="70%"
      display={'flex'}
      flexDir={{ base: 'column', sm: 'column' ,md: 'row'}}
      justifyContent={'space-between'}
    >
      {cart?.length > 0 ? (<>
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
    <Box className="cart-list-container"  width={"80%"}>
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


