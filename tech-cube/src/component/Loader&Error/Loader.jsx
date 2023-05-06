import { Box, Flex, Spinner } from '@chakra-ui/react'
import React from 'react';

const Loader = () => {
    return (
        <Flex pt={'80px'} justifyContent={'center'}>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Flex>
    )
}

export default Loader;