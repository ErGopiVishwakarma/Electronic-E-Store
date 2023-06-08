

import { Box, Button, Center, Flex, Grid, Heading, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import ArrivalSetData from './ArrivalSetData'

const data = [
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kIB4ONipe7nG3CJJjB6QebgQhCNSDD-b4YcRXOTttQ3iv2uIdpmVI3M4W0xR-UMrXeA&usqp=CAU", id: 66 },
    { image: "https://static.toiimg.com/thumb/msid-86426964,imgsize-179956,width-400,resizemode-4/86426964.jpg", id: 129 },
    { image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/noise_headphones-sixteen_nine.jpg?VersionId=amFtz49XbxVTka6sh9mBB07SG4PxhbFh", id: '' }
]

const NewArrival = () => {

    const speaker = () => {
        let obj = {
            "speaker": 'wireless_speaker',
        }

    }
    return (
        <Flex p="3%" gap="50px" direction="column" mt="20px">
            <Center>
                <Heading fontSize={{base:'25px',md:'32px'}}>New Arrival</Heading>
            </Center>
            <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} gap="20px">
                {
                    data.map(el => (
                        <Box boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} pos={'relative'}>
                            <Image src={el.image} h='250px' w="100%" />
                            <NavLink to={`/products/${el.id}`}><Button color="blackAlpha.900" pos={'absolute'} bottom={'10px'} left={'10px'} variant={'outline'} borderRadius={'20px'} border={'1px solid black'} onClick={() => speaker()}>shop now</Button></NavLink>
                        </Box>
                    ))
                }
            </Grid>
        </Flex>
    )
}

export default NewArrival