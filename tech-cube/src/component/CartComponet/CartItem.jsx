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

const [edit,togEdit]=useState(false)
const handleEdit=()=>{
togEdit(!edit);
}


let totalPrice = 0;
cart.forEach((cartItem) => {
  totalPrice += cartItem.price * cartItem.quantity;
}); // this for shoing total price


const handleQuantity = (e) => {
  
    const upDatedData=cart.map((el)=>{
      return el.id===id?{...el,quantity:+e.target.value}:el;
    })
  
    dispatch(updateCartFn(upDatedData));
      setQty(+e.target.value);
    };
  
    
    const handleDeleteQty = () => {
      const upDatedData=cart.filter((el)=>{
        return el.id!==id
      })
    
      dispatch(updateCartFn(upDatedData));
    };
  




    return (
    

<Box  width={{base:"full",sm:'full',md:'sm' ,lg:'lg',xl:'2xl'}} marginTop={'20px'}  marginBottom={'20px'}>

<Box  display={'flex'} flexDirection={{base:"column",md:"row"}} justifyContent={"space-between"}  gap={'20px'}>

  <Image width={{base:"100vw",sm:'100vw',md:'120px' ,lg:'150px',xl:'200px'}} src={image} alt={title} />
  <Box className='TitleColorBrand'>
    <Text fontWeight={'bold'} fontSize={'20px'}>{title}</Text>
    <Text>Color:{color}</Text>
    <Text fontWeight={'bold'} color={'orange.400'}>Brand: {brand}</Text>
    </Box>
  <Box className='EatchPrice'><Text fontWeight={'bold'} fontSize={'16px'}>Each</Text>
  <Text fontWeight={'bold'} fontSize={'15px'}>$ {price}</Text>
  </Box>
  <Box className='Quentity'><Text fontWeight={'bold'} fontSize={'16px'}>Quantity</Text>
  <Select placeholder={quantity}  onChange={handleQuantity}>
  <option value='1'> 1</option>
  <option value='2'> 2</option>
  <option value='3'> 3</option>
  <option value='4'> 4</option>
  <option value='5'> 5</option>
</Select>
 
  </Box>
  <Box className='Total'><Text fontWeight={'bold'}>Delete</Text>
  <DeleteIcon fontSize={"20px"} color={'red.500'} onClick={handleDeleteQty}/>
  </Box>
</Box>

<Box className='actions' display={'flex'} flexDirection={{base:"column",md:"row"}} justifyContent={"space-between"} alignItems={"center"}>


  <Button  variant="outline"  border={'none'}>Move to Wishlist</Button>
  <Button  variant="outline" border={'none'}>Save For Letter</Button>
</Box>
<Divider />
<Divider/>
</Box>


 


    )
  }