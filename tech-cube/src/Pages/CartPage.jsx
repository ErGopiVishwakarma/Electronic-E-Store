import { Box, Button } from '@chakra-ui/react';

import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, updateCartFn } from '../redux/CartReducer/action';

export let updateTriggers; // is for making changes on localStorage

//----------------------------------------------------------------------------------------------------------------------------
const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store.cartReducer);

  useEffect(() => {
    dispatch(getCartData());
  }, []);
  return (
    <Box
      display={'flex'}
      flexDir={{ base: 'column', md: 'row' }}
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
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store.cartReducer);

  
  return (
    <div className="cart-list-container">
      {cart.map(cartItem => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
    </div>
  );
};

// -----------------------------------------------------------------------------------------------------------------------
//Cart Item Component

export const CartItem = ({
  id,
  title,
  brand,
  image,
  price,
  color,
  quantity,
}) => {
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store.cartReducer);
  const HandleAddQty = () => {
  const upDatedData=cart.map((el)=>{
    return el.id===id?{...el,quantity:el.quantity+1}:el;
  })

  dispatch(updateCartFn(upDatedData));
    setQty(prev => prev + 1);
  };

  const handleSubQty = () => {
    const upDatedData=cart.map((el)=>{
      return el.id===id?{...el,quantity:el.quantity-1}:el;
    })
  
    dispatch(updateCartFn(upDatedData));
    setQty(prev => prev - 1);
  };

  const handleDeleteQty = () => {
    const upDatedData=cart.filter((el)=>{
      return el.id!==id
    })
  
    dispatch(updateCartFn(upDatedData));
  };

  return (
    <div style={{ display: 'flex', border: '1px solid blue' }}>
      <img
        src={image}
        alt={title}
        style={{ width: '50px', height: '50px', display: 'inline' }}
      />
      <div>
        <div>
          <h4>
            {title}-{brand} - Color:{color}
          </h4>
          <p>Price:{price} </p>
          <h3>Total Price: {price * quantity}</h3>
        </div>
        <div>
          <Button
            className="Add-Qty"
            isDisabled={qty >= 5}
            onClick={HandleAddQty}
          >
            add
          </Button>
          Quantity:{qty}
          <Button
            className="Sub Qty"
            display={qty <= 1 && 'none'}
            isDisabled={qty === 1}
            onClick={handleSubQty}
          >
            remove
          </Button>
          <Button
            className="delete-Qty"
            colorScheme="red"
            display={qty >= 2 && 'none'}
            isDisabled={qty > 1}
            onClick={handleDeleteQty}
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  );
};

//--------------------------------------------------------------------------------------------------------------------------

//order summery

export const OrderSummery = () => {
  return <div>{/*update grantTotal*/}</div>;
};
