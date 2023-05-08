import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useMediaQuery, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter
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


  const handleAddQty = () => {
    const upDatedData = cart.map((el) => {
      return el.id === id ? { ...el, quantity: el.quantity + 1 } : el;
    })

    dispatch(updateCartFn(upDatedData));
    setQty(prev => prev + 1);
  };

  const handleSubQty = () => {
    const upDatedData = cart.map((el) => {
      return el.id === id ? { ...el, quantity: el.quantity - 1 } : el;
    })

    dispatch(updateCartFn(upDatedData));
    setQty(prev => prev - 1);
  };

  const handleDeleteQty = () => {
    const upDatedData = cart.filter((el) => {
      return el.id !== id
    })

    dispatch(updateCartFn(upDatedData));
  };





  return isLargerThan800 ? (

    <TableContainer>
      <Table variant="simple">
        <TableCaption>Grand Total Price : {totalPrice}</TableCaption>
        <Thead>
          <Tr>

            <Th>Image</Th>
            <Th>Title</Th>
            <Th>Price</Th>
            <Th>Quan.</Th>
            <Th>Total</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        {cart.length > 0 &&
          cart.map((item,ind) => {
            return (
              <Tbody>
                <Tr>

                  <Td>
                    <img src={item.image}
                      width={"100px"}
                      alt={item.title}
                    />
                  </Td>
                  <Td>{item.title}</Td>
                  <Td>{item.price}</Td>
                  <Td>{item.quantity}</Td>
                  <Td>{Number(item.quantity) * Number(item.price)}</Td>
                  <Td>
                    <Button onClick={onOpen}>Edit</Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>{item.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                          <Text>Total Price :{item.price * qty}</Text>
                          <Text>Quantity :{qty}</Text>
                          <Button display={quantity >= 5 && 'none'} onClick={handleAddQty}> +   </Button>
                          <Button display={quantity === 1 && 'none'} onClick={handleSubQty}>   - </Button>

                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Save
                          </Button>
                          <Button variant={'outline'} color={'red.300'} onClick={handleDeleteQty}>Delete</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
      </Table>
    </TableContainer>
  ) : (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      borderBottom={'2px solid gray'}
      borderRadius={"10px"}
    >
      <Flex flex={1}>
        <Image maxH={"250px"} alt={'Login Image'} objectFit={'cover'} src={image} />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} maxW={{ md: 'sm' }}>
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


  )
}