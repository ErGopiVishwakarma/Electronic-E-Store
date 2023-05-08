import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Box,

  Image, useMediaQuery, useDisclosure, Divider, Select

} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartFn } from '../../redux/CartReducer/action';

import { ChevronDownIcon, DeleteIcon } from '@chakra-ui/icons';



export default function CartItem({
  id,
  title,
  brand,
  image,
  price,
  color,
  quantity,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan800] = useMediaQuery('(min-width: 874px)')
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch();
  const { cart } = useSelector(store => store.cartReducer);

  const [edit, togEdit] = useState(false)
  const handleEdit = () => {
    togEdit(!edit);
  }


  let totalPrice = 0;
  cart.forEach((cartItem) => {
    totalPrice += cartItem.price * cartItem.quantity;
  }); // this for shoing total price



  const handleQuantity = (e) => {

    const upDatedData = cart.map((el) => {
      return el.id === id ? { ...el, quantity: +e.target.value } : el;
    })

    dispatch(updateCartFn(upDatedData));
    setQty(+e.target.value);
  };


  const handleDeleteQty = () => {
    const upDatedData = cart.filter((el) => {
      return el.id !== id
    })

    dispatch(updateCartFn(upDatedData));
  };





  return (


    <Box width={{ base: "full", sm: 'full', md: '2xl', lg: '2xl', xl: '2xl', '2xl': '4xl' }} >

      <Box display={'flex'} flexDirection={{ base: "column", md: "row" }} justifyContent={"space-between"} gap={'20px'}>

        <Image width={{ base: "full", sm: 'full', md: '100px', lg: '150px', xl: '200px' }} src={image} alt={title} />
        <Box className='TitleColorBrand' display={'flex'} flexDirection={'column'} justifyContent={'center'}>
          <Text fontWeight={'bold'} fontSize={'20px'}>{title}</Text>
          <Flex gap={'10px'}><Text>Color : </Text><Box height={'20px'} w={'20px'} borderRadius={'50%'} bgColor={color[0]}></Box></Flex>
          <Text fontWeight={'bold'} color={'orange.400'}>Brand: {brand}</Text>
        </Box>

        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={'20px'} alignItems={'center'}>
        {/* <Box className='EatchPrice' display={'flex'} flexDirection={'column'} justifyContent={'center'}> */}
      
      <Text fontWeight={'bold'} fontSize={'15px'}>$ {price}</Text>


      <Select placeholder={quantity} onChange={handleQuantity} w={{ base: '100px', }}>
        <option value='1'> 1</option>
        <option value='2'> 2</option>
        <option value='3'> 3</option>
        <option value='4'> 4</option>
        <option value='5'> 5</option>
      </Select>


   
      <Button onClick={handleDeleteQty}><DeleteIcon fontSize={"20px"} color={'red.500'} /></Button>
  
        </Box>
        
      </Box>

      <Box className='actions' display={'flex'} flexDirection={{ base: "column", md: "row" }} justifyContent={"flex-end"} alignItems={"center"}>


        <Button variant="outline" color={'teal'} border={'none'}>move to wishlist</Button>
        <Button variant="outline" border={'none'}>save for letter</Button>
      </Box>
      <Divider />
      <Divider />
    </Box>




  )
}