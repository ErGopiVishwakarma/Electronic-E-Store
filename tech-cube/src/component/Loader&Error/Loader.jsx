import { Box, Flex, Grid, Spinner } from '@chakra-ui/react'
import React from 'react';

const Loader = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} h={'30vh'} pt={'80px'}>
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