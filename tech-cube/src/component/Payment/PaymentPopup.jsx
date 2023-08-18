<<<<<<< HEAD
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image,
    Heading,
  } from '@chakra-ui/react'

  import success from '../../Assets/success.png'
import { NavLink } from 'react-router-dom';


function PaymentPopup({children,val}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} bg="blackAlpha.900" isDisabled={val} colorScheme='white' w="200px">{children}</Button>
  
        <Modal isOpen={isOpen}>
         
          <ModalContent display={'flex'} justifyContent={'center'} alignItems={'center'}>       
            <ModalBody flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
             <Image src={success} />
             <Heading fontSize="20px">Your Order Placed Successfully</Heading>
            </ModalBody>  
            <ModalFooter>
              <NavLink to='/'>
              <Button colorScheme='blue' mr={3} w="100px" onClick={onClose}>
                Ok
              </Button>
              </NavLink>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

=======
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image,
    Heading,
  } from '@chakra-ui/react'

  import success from '../../Assets/success.png'
import { NavLink } from 'react-router-dom';


function PaymentPopup({children,val}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen} bg="blackAlpha.900" isDisabled={val} colorScheme='white' w="200px">{children}</Button>
  
        <Modal isOpen={isOpen}>
         
          <ModalContent display={'flex'} justifyContent={'center'} alignItems={'center'}>       
            <ModalBody flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
             <Image src={success} />
             <Heading fontSize="20px">Your Order Placed Successfully</Heading>
            </ModalBody>  
            <ModalFooter>
              <NavLink to='/'>
              <Button colorScheme='blue' mr={3} w="100px" onClick={onClose}>
                Ok
              </Button>
              </NavLink>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

>>>>>>> 0b96a5fc907bded82facbd27f754a029d6d4b2cb
  export default PaymentPopup;