import { Box, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const HomeService = () => {
    return (
        <Flex direction={'column'} gap='50px' p="3%">
            <Heading>
                Services To Help Shop
            </Heading>
            <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} gap="20px">
                <Flex direction={'column'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} borderBottomRadius={'20px'} bg="red.50" >
                    <Stack mt='6' spacing='3' p="30px">
                        <Heading size='md'>Frequently Asked Questions</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                    </Stack>
                    <Box bgImage="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png" w='100%' h='250px' className='homecard' >
                    </Box>
                </Flex>
                <Flex direction={'column'}>
                    <Stack mt='6' spacing='3' p="30px">
                        <Heading size='md'>Online Payment Process</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                    </Stack>
                    <Box bgImage="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png" w='100%' h='250px' className='homecard' >
                    </Box>
                </Flex>
                <Flex direction={'column'}>
                    <Stack mt='6' spacing='3' p="30px">
                        <Heading size='md'>Home Delivery Options</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                    </Stack>
                    <Box bgImage="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png" w='100%' h='250px' className='homecard' >
                    </Box>
                </Flex>
            </Grid>
        </Flex>
    )
}

export default HomeService