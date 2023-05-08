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


function UserProfile({ name, children }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const user ={
        image:'',
        name:'Gopi Vishwakarma'
    }
    return (
        <>
            <Button onClick={onOpen} w="100%" textAlign={'start'} variant={'unstyled'}>{children}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                {/* <ModalOverlay /> */}
                <ModalContent>
                    <ModalHeader textAlign={'center'}>Gopi Vishwakarma</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'} justifyContent={'center'}>
                            <Flex direction={'column'} justifyContent={'center'}>
                            <Avatar src={user.image} h="150px" w="150px" name={user.name} size={'lg'} />
                            <Text fontSize="20px">gopi@gmail.com</Text>
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