import { Avatar, Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import EditProduct from './EditProduct'
import DeleteData from './DeleteProduct'


const ProductDetail = ({ children, child }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen}>{children}</Button>

            <Modal isOpen={isOpen} onClose={onClose} mt='20px'>
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction={'column'} alignItems={'center'}>
                            <Avatar src={child.image[0]} name="error" w='120px' h='120px' />
                            <Flex direction={'column'} gap="5px">
                                <Text fontWeight={'bold'}>title: {child.title.substring(0, 18)}..</Text>
                                <Text fontWeight={'bold'}>description: {child.description.substring(0, 20)}..</Text>
                                <Text fontWeight={'bold'}>price: ₹ {child.price}</Text>
                                <Flex gap='10px'>
                                    <Text fontWeight={'bold'}>color:</Text>
                                    <Box borderRadius={'50%'} w='20px' h='20px' bg={child.color[0]}></Box>
                                </Flex>
                                <Text fontWeight={'bold'}>brand: {child.brand}</Text>
                            </Flex>
                        </Flex>
                    </ModalBody>
                    <Flex justifyContent={'flex-end'} gap="15px">
                        <EditProduct id={child.id}>Edit</EditProduct>
                        <DeleteData id={child.id}>Delete</DeleteData>
                    </Flex>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProductDetail