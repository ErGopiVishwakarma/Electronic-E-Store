import { Box, Button, Center, Flex, Grid, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'
import home from '../Assets/home.png'
import '../Css/Home.css'
import { shopCategory } from '../component/HomeComponent/navComponent/NavItem'
import HomeService from '../component/HomeComponent/HomeService'
import BestDeal from '../component/HomeComponent/BestDeal'
import NewArrival from '../component/HomeComponent/NewArrival'
import DemoCarousel from '../component/HomeComponent/DemoCarousel'
import { SearchContext } from '../context/SearchContextProvider'
import { ProductCard } from '../component/ProductComponent/ProductCard'
import ProductPage from './ProductPage'

const HomePage = () => {
  const text = useColorModeValue('light','dark')
  const textColor = text==='dark'?'gray.100':'blackAlpha.900'
  const {status} = useContext(SearchContext);

  return (
    status ? <ProductPage/> : 
    <Box pt="70px">
      {/* Top Main Image Section here  */}
      <Box w="100%">
        <Box position={'relative'} w="100%" h='100vh' bgImg={home} bgRepeat={'no-repeat'} bgSize={'cover'} bgPosition={'center'} display={{ base: 'none', md: 'none', lg: 'block' }}>
         <Flex pos={'absolute'} left={'50px'} top={'150px'} direction={'column'} gap="20px" color={'blackAlpha.900'}>
         <Heading fontSize={'50px'}>Shopping With tech-cube</Heading>
          <Heading>New Experience</Heading>
          <Heading fontSize={'40px'} letterSpacing={'5px'}>GREAT PRICE</Heading>
          <Text fontSize='20px'>save now 20% off on tech-cube</Text>
          <Button variant={'outline'} borderRadius={'20px'} border={'1px solid black'} w='200px' color={'blackAlpha.900'}>shop now</Button>
         </Flex>
        </Box>
       <Box w="100%" display={{ base: 'block', md: 'block', lg: 'none' }}  >
       <DemoCarousel />
       </Box>
        {/* <Image src="https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/slider/next-home-banner-1.png" /> */}
      </Box>

      {/* New Arrival Product section  */}
      <NewArrival />
      {/* Best deal section  */}
      <BestDeal />

      {/* something expensive product section  */}
      <Flex p={"3%"} gap="20px" direction={{base:'column',md:'row'}} mt="30px">
        <Box pos={'relative'} w={{base:'100%',md:'41.5%'}}>
          <Image src="https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/advertisement/adv-image-1.png" w='100%' />
          <Flex pos={'absolute'} right={'20px'} top={'20px'} direction={'column'} gap="5px" color='blackAlpha.900'>
            <Heading fontSize={'25px'}>Up to</Heading>
            <Heading fontSize={'25px'} pl={'30px'}>70%</Heading>
            <Heading fontSize={'25px'} pl="50px">Off</Heading>
          </Flex>
        </Box>
        <Box pos={'relative'} w={{base:'100%',md:"59%"}}>
          <Image src="https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/advertisement/adv-image-2.png" w='100%' />
          <Flex pos={'absolute'} right={'10px'} top={'20px'} direction={'column'} gap="10px" color={'blackAlpha.900'}>
            <Heading fontSize='25px'>Headphone</Heading>
            <Heading fontSize='25px'>Premium sound</Heading>
            <Text>Starting from: $245.00</Text>
            <Button w="120px" variant={'outline'} borderRadius={'20px'} border={'1px solid black'} color={'blackAlpha.900'}>shop now</Button>
          </Flex>
        </Box>
      </Flex>
      
      {/* all services section here which is provided by the company  */}
      <HomeService />
      <Heading p="3%">Tech-cube</Heading>
    </Box>
  )
}

export default HomePage