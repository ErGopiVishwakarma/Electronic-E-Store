
import { Box, Button, Center, Flex, Grid, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaGrinHearts, FaHeart, FaHeartBroken, FaHeartbeat, FaKissWinkHeart } from "react-icons/fa";
const imageArr = [
  { image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61eb4ad4af6e75689_macbook%2013-min.png',text:'APPLE A715-42G-R2NE l', price:500, description:'Key Features 39.6cm (15.6\")' },
  { image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png',text:'wireless_headphone' , price:300, description:'Organic Cotton, fairtrade certified'},
  { image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png',text:'Infinix SMART 7', price:5900 , description:'4 GB RAM | 64 GB ROM'},
  { image: 'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74b76916e072f2466_watch-min.png',text:'Wave Select Smartwatch' , price:800, description:'1.78\" AMOLED Display'}
]

const BestDeal = () => {

  const text = useColorModeValue('light','dark')
  const textColor = text==='dark'?'gray.100':'blackAlpha.900'

  return (
    <Box mt="20px">
      <Flex direction={'column'} px="3%" gap="50px">
      <Center>
      <Heading>
          Today's Best Deal For You
        </Heading>
      </Center>
        <Grid templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)' }} gap="20px" >

          {
            imageArr.map((el,ind) => (
              <Flex key={ind} direction={'column'} pos={'relative'} borderRadius={'12px'} >
                <Box p="20px" bg="red.50" boxSizing='borderBox'>
                  <Box className='bestdeal'>
                    <Image src={el.image} />
                  </Box>
                </Box>
                <Stack px="5px">
                  <Flex justifyContent={'space-between'} color={text==='dark'?'white':'blackAlpha.900'}>
                    <Text fontWeight={'bold'} fontSize={'18px'} color={textColor}>{el.text}</Text>
                    <Text fontWeight={'bold'} color={textColor} fontSize={'18px'}>₹{el.price}</Text>
                  </Flex>
                  <Text fontSize={'14px'} color={textColor}>{el.description}</Text>
                  <Flex>
                    <Text color={'green'} fontSize={'19px'}>&#9733;</Text>
                    <Text color={'green'} fontSize={'19px'}>&#9733;</Text>
                    <Text color={'green'} fontSize={'19px'}>&#9733;</Text>
                    <Text color={'green'} fontSize={'19px'}>&#9733;</Text>
                    <Text color={'green'} fontSize={'19px'}>&#9733;</Text>
                  </Flex>
                  <Button variant={'unstyled'} border={'1px solid black'} w="120px" borderRadius={'40px'}>Add To Cart</Button>
                </Stack>
                <Box p="10px" bg='white' borderRadius={'50%'} pos={'absolute'} right={'11px'} top="15px" _hover={{ bg: 'pink' }} >
                  <Image src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9df775b939f51a0b22f6d_Icon.svg" w='20px' />
                </Box>
              </Flex>
            ))
          }
        </Grid>
      </Flex>
    </Box>
  )
}

export default BestDeal