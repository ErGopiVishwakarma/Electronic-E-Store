import { Box, Flex, Grid, Spinner } from '@chakra-ui/react'
import React from 'react';

const Loader = () => {
    return (
        <Grid placeItems={'center'} h={'100vh'} pt={'80px'}>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Grid>
    )
}

export default Loader;