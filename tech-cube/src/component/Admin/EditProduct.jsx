
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
    Box,
    Center,
    Flex,
    Input,
    FormLabel,

} from '@chakra-ui/react'
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { editProducts, getAllData } from '../../redux/Admin/action'

function EditProduct({ id , children }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    const dispatch = useDispatch()
    const storeData = useSelector(store=>store.adminReducer.allProductData)
  
    const [data, setData] = useState('')


    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        dispatch(editProducts(id, data))
            .then((res) => {
                dispatch(getAllData())
                alert('product updated successfully..')
            })
    }

    useEffect(() => {
        let findData = storeData.find(el=>el.id === id)
        setData(findData)

    },[])




    return (
        <>

            <Button w="80px" onClick={onOpen} bg="orange.300" colorScheme='black'>
                {children}
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight={'bolder'} w='full'>Edit Product</ModalHeader>
                    <ModalBody>
                        <Flex direction={'column'} gap='8px'>
                            <Flex direction={'column'}>
                                <FormLabel fontWeight="bold">title</FormLabel>
                                <Input onChange={handleChange} name="title" value={data.title} />
                            </Flex>
                            <Flex direction={'column'}>
                                <FormLabel fontWeight="bold">Image</FormLabel>
                                <Input onChange={handleChange} name="image" value={data.image} />
                            </Flex>
                            <Flex gap='15px'>
                                <Flex direction={'column'}>
                                    <FormLabel fontWeight="bold">category</FormLabel>
                                    <Input onChange={handleChange} name="category" value={data.category} />
                                </Flex>
                                <Flex direction={'column'}>
                                    <FormLabel fontWeight="bold">color</FormLabel>
                                    <Input onChange={handleChange} name="color" value={data.color} />
                                </Flex>
                            </Flex>
                            <Flex direction={'column'}>
                                <FormLabel fontWeight="bold">description</FormLabel>
                                <Input onChange={handleChange} name="description" value={data.description} />
                            </Flex>
                            <Flex gap='15px'>
                                <Flex direction={'column'}>
                                    <FormLabel fontWeight="bold">price</FormLabel>
                                    <Input onChange={handleChange} name="price" value={data.price} />
                                </Flex>
                                <Flex direction={'column'}>
                                    <FormLabel fontWeight="bold">brand</FormLabel>
                                    <Input onChange={handleChange} name="brand" value={data.brand} />
                                </Flex>
                            </Flex>
                            <Flex gap='15px'>
                               
                            </Flex>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Flex justifyContent={'flex-end'} w='100%'>
                            <Button varient='unstyled' mr={3} onClick={onClose}>
                                cancel
                            </Button>
                            <Button  onClick={(e)=>{                            
                            handleEdit(e)
                            onClose()
                            }}  varient='outline'>update</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default memo(EditProduct)


