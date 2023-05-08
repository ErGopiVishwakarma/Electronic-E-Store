
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
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { editProducts, getAllData } from '../../redux/Admin/action'

function EditProduct({ id , children }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    const dispatch = useDispatch()
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
            .then(() => {
                dispatch(getAllData())
            })
    }

    const singledata = (id) => {
        axios.get(`https://real-lime-bandicoot-robe.cyclic.app/products/${id}`)
            .then((res) => setData(res.data))
    }

    useEffect(() => {
        singledata(id)

    }, [])




    return (
        <>

            <Button w="80px" onClick={onOpen} bg="orange.300" colorScheme='black'>
                {children}
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <Center><ModalHeader w='100%'>Product</ModalHeader></Center>
                    <ModalBody>
                        <Flex direction={'column'} gap='8px'>
                            <Flex direction={'column'}>
                                <FormLabel fontWeight="bold">title</FormLabel>
                                <Input onChange={handleChange} name="title" value={data.title} />
                            </Flex>
                            <Flex direction={'column'}>
                                <label>Image</label>
                                <Input onChange={handleChange} name="image" value={data.image} />
                            </Flex>
                            <Flex gap='15px'>
                                <Flex direction={'column'}>
                                    <label>category</label>
                                    <Input onChange={handleChange} name="category" value={data.category} />
                                </Flex>
                                <Flex direction={'column'}>
                                    <label>color</label>
                                    <Input onChange={handleChange} name="color" value={data.color} />
                                </Flex>
                            </Flex>
                            <Flex direction={'column'}>
                                <label>description</label>
                                <Input onChange={handleChange} name="description" value={data.description} />
                            </Flex>
                            <Flex gap='15px'>
                                <Flex direction={'column'}>
                                    <label>price</label>
                                    <Input onChange={handleChange} name="price" value={data.price} />
                                </Flex>
                            </Flex>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Flex justifyContent={'flex-end'} w='100%'>
                            <Button varient='unstyled' mr={3} onClick={onClose}>
                                cancel
                            </Button>
                            <Button onClick={handleEdit}  varient='outline'>update</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditProduct