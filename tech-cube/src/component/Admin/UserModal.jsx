import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Image,
    Text,
    Flex,
    Box,
    Avatar,
} from '@chakra-ui/react'


function UserProfile({ name, children, data }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} w="100%" textAlign={'start'} variant={'unstyled'}>{children}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                {/* <ModalOverlay /> */}
                <ModalContent>
                    <ModalHeader textAlign={'center'}>{data.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'} justifyContent={'center'}>
                            <Flex direction={'column'} justifyContent={'center'}>
                            <Avatar src={data.pic} h="150px" w="150px" />
                            <Text fontSize="20px">{data.email}</Text>
                            </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UserProfile