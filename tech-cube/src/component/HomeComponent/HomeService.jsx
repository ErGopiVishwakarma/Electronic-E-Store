import { Box, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const data =[
    {image:'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png'},
    {image:'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png'},
    {image:'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png'}

]

const HomeService = () => {
    return (
        <Flex direction={'column'} gap='50px' p="3%">
            <Heading>
                Services To Help Shop
            </Heading>
            <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} gap="20px">
            {
                data.map(el=>(
                    <Flex direction={'column'} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} borderBottomRadius={'20px'} bg="red.50" >
                    <Stack mt='6' spacing='3' p="30px">
                        <Heading size='md'>Frequently Asked Questions</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                    </Stack>
                    <Box bgImage={el.image} w='100%' h='250px' className='homecard' >
                    </Box>
                </Flex>
                ))
            }
             
            </Grid>
        </Flex>
    )
}

export default HomeService