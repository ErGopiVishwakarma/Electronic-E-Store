import { Box, Flex, Grid, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import home from '../Assets/home.png'
import '../Css/Home.css'
import { shopCategory } from '../component/HomeComponent/navComponent/NavItem'
import HomeService from '../component/HomeComponent/HomeService'
import BestDeal from '../component/HomeComponent/BestDeal'

const HomePage = () => {
  return (
    <Box pt="70px">
      <Box w="100%">
        <Box position={'relative'} w="100%" h='100vh' bgImg={home} bgRepeat={'no-repeat'} bgSize={'cover'} bgPosition={'center'} display={{base:'none',md:'none',lg:'block'}}>
        </Box>
        <Image src="https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/slider/next-home-banner-1.png" w="100%" display={{base:'block',md:'block',lg:'none'}} />
</Box>
      <BestDeal />
      <HomeService />
    </Box>
  )
}

export default HomePage