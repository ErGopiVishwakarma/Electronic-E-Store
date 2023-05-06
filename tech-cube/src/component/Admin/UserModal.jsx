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
} from '@chakra-ui/react'


function UserProfile({ name, children }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                            <Image src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" h="150px" w="150px" />
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