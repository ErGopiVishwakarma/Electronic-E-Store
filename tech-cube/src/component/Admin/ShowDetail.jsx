
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
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserFromBlacklist, getAllDataFromBlacklist, postUserToBlacklist } from '../../redux/Admin/action'

const ShowDetail = ({ children, child,fun }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const blackData = useSelector(store => store.adminReducer.blacklist)
    const blockUser = (data) => {
        dispatch(postUserToBlacklist(data)).then(res => {
            // setLength(1)
            dispatch(getAllDataFromBlacklist())
        }
        )
    }

    const delUser = (id) => {
        dispatch(deleteUserFromBlacklist(id)).then(res => {
            // setLength(1)
            dispatch(getAllDataFromBlacklist())
        }
        )
    }
    return (
        <>
            <Button onClick={onOpen}>{children}</Button>

            <Modal isOpen={isOpen} onClose={onClose} mt='20px'>
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction={'column'} alignItems={'center'}>
                            <Avatar src={child.pic} name={`${child.firstName} ${child.lastName}`} w='110px' h='110px' />
                            <Flex direction={'column'} gap="5px">
                                <Text fontWeight={'bold'}>Name: {`${child.firstName} ${child.lastName}`}</Text>
                                <Text fontWeight={'bold'}>Email: {child.email}</Text>
                                <Text fontWeight={'bold'}>Password: {child.password}</Text>
                            </Flex>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        {
                            blackData.length > 0 ?

                                fun(child) ? <Button bg="red.400" colorScheme='black' onClick={() => delUser(child.id)}>Unblock User</Button> : <Button bg="green.400" colorScheme='black' onClick={() => blockUser(child)}>Block User</Button>
                                : <Button bg="green.400" colorScheme='black' onClick={() => blockUser(child)}>Block User</Button>
                        }
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ShowDetail