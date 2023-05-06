import {
    Button,
    Flex,
    Heading,
    Stack,
    Image,
    Text,
    Box,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartFn } from '../../redux/CartReducer/action';
  
  export default function CartItem({
      id,
      title,
      brand,
      image,
      price,
      color,
      quantity,
    }) {


   const [qty, setQty] = useState(quantity);
   const dispatch = useDispatch();
     const { cart } = useSelector(store => store.cartReducer);

const [edit,togEdit]=useState(false)
const handleEdit=()=>{
togEdit(!edit);
}



const handleAddQty = () => {
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
      <Stack
        direction={{ base: 'column', md: 'row' }}
        borderBottom={'2px solid gray'}
        borderRadius={"10px"}
      >
        <Flex flex={1}>
          <Image maxH={"250px"} alt={'Login Image'} objectFit={'cover'} src={image} />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} maxW={{base:"full",lg:'md'}}>
            <Heading fontSize={'2xl'}>{title}</Heading>
            <Heading color={'orange.400'} fontSize={'xl'}>
              {brand}
            </Heading>
            <Box
              display={!edit ? 'flex' : 'none'}
              alignItems={'center'}
              flexWrap={'wrap'}
              gap={'40px'}
            >
              <Text>Color: {color[0]}</Text>
              <Text>Qty: {qty}</Text>
              <Text>Price:${price}</Text>
              <Text>Total:$ {price * quantity}</Text>
              <Button onClick={handleEdit}>Edit</Button>
            </Box>

            <Box
              display={edit ? 'flex' : 'none'}
              alignItems={'center'}
              flexWrap={'wrap'}
              gap={'40px'}
            >
              <Text>Quantity: {quantity}</Text>
              <Button isDisabled={quantity >= 5} onClick={handleAddQty}>
                +
              </Button>
              <Button display={quantity === 1 && 'none'} onClick={handleSubQty}>
                -
              </Button>
              <Button
                bgColor={'red.200'}
                display={quantity > 1 && 'none'}
                onClick={handleDeleteQty}
              >
                Delete
              </Button>
              <Button
                display={quantity === 1 && 'none'}
                bgColor={'green.200'}
                onClick={handleEdit}
              >
                Save
              </Button>
            </Box>
          </Stack>
        </Flex>
      </Stack>
    );
  }