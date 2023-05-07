import { Box, Button, Center, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import home from '../Assets/home.png'
import '../Css/Home.css'
import { shopCategory } from '../component/HomeComponent/navComponent/NavItem'
import HomeService from '../component/HomeComponent/HomeService'
import BestDeal from '../component/HomeComponent/BestDeal'

const HomePage = () => {
  return (
    <Box pt="70px">
      {/* Top Main Image Section here  */}
      <Box w="100%">
        <Box position={'relative'} w="100%" h='100vh' bgImg={home} bgRepeat={'no-repeat'} bgSize={'cover'} bgPosition={'center'} display={{ base: 'none', md: 'none', lg: 'block' }}>
         <Flex pos={'absolute'} left={'50px'} top={'150px'} direction={'column'} gap="20px">
         <Heading fontSize={'50px'}>Shopping With tech-cube</Heading>
          <Heading>New Experience</Heading>
          <Heading fontSize={'40px'} letterSpacing={'5px'}>GREAT PRICE</Heading>
          <Text fontSize='20px'>save now 20% off on tech-cube</Text>
          <Button variant={'outline'} borderRadius={'20px'} border={'1px solid black'} w='200px'>shop now</Button>
         </Flex>
        </Box>
        <Image src="https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/slider/next-home-banner-1.png" w="100%" display={{ base: 'block', md: 'block', lg: 'none' }} h={{ base: '250px', md: '400px', lg: 'none' }} />
      </Box>

      {/* New Arrival Product section  */}
      <Flex p="3%" gap="50px" direction="column">
        <Center>
          <Heading>New Arrival</Heading>
        </Center>
        <Grid templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(3,1fr)'}} gap="20px">
          <Box boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} pos={'relative'}>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kIB4ONipe7nG3CJJjB6QebgQhCNSDD-b4YcRXOTttQ3iv2uIdpmVI3M4W0xR-UMrXeA&usqp=CAU" h='250px' w="100%" />
            <Button pos={'absolute'} bottom={'10px'} left={'10px'} variant={'outline'} borderRadius={'20px'} border={'1px solid black'}>shop now</Button>
          </Box>
          <Box boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} pos={'relative'}>
            <Image src="https://static.toiimg.com/thumb/msid-86426964,imgsize-179956,width-400,resizemode-4/86426964.jpg" h='250px' w="100%" />
            <Button pos={'absolute'} bottom={'10px'} left={'10px'} variant={'outline'} borderRadius={'20px'} border={'1px solid black'}>shop now</Button>
          </Box>
          <Box bg="pink.100" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} pos={'relative'}>
            <Image src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/noise_headphones-sixteen_nine.jpg?VersionId=amFtz49XbxVTka6sh9mBB07SG4PxhbFh" h='250px' w="100%" />
            <Button pos={'absolute'} bottom={'10px'} left={'10px'} variant={'outline'} borderRadius={'20px'} border={'1px solid black'}>shop now</Button>
          </Box>
        </Grid>
      </Flex>
      {/* Best deal section  */}
      <BestDeal />

      {/* something expensive product section  */}
      <Flex px={{base:'3%',md:'3%',lg:'3%'}} gap="20px" direction={{base:'column',md:'row'}}>
        <Box pos={'relative'} w={{base:'100%',md:'41.5%'}}>
          <Image src="https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/advertisement/adv-image-1.png" w='100%' />
          <Flex pos={'absolute'} right={'20px'} top={'20px'} direction={'column'} gap="5px">
            <Heading fontSize={'25px'}>Up to</Heading>
            <Heading fontSize={'25px'} pl={'30px'}>70%</Heading>
            <Heading fontSize={'25px'} pl="50px">Off</Heading>
          </Flex>
        </Box>
        <Box pos={'relative'} w={{base:'100%',md:"59%"}}>
          <Image src="https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/advertisement/adv-image-2.png" w='100%' />
          <Flex pos={'absolute'} right={'10px'} top={'20px'} direction={'column'} gap="10px">
            <Heading fontSize='22px'>Headphone</Heading>
            <Heading fontSize='22px'>Premium sound</Heading>
            <Text>Starting from: $245.00</Text>
            <Button w="120px" variant={'outline'} borderRadius={'20px'} border={'1px solid black'}>shop now</Button>
          </Flex>
        </Box>
      </Flex>
      
      {/* all services section here which is provided by the company  */}
      <HomeService />
      <Heading>Tech-cube</Heading>
    </Box>
  )
}

export default HomePage