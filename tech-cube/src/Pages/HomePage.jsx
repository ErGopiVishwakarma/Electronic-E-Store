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
      <Box  position={'relative'} w="100%" h='100vh' bgImg={home} bgRepeat={'no-repeat'} bgSize={'cover'} bgPosition={'center'}>
        <Image src={home} w="100%" />
      </Box>
      <Flex p="3%" direction={'column'} gap="50px">
        <Heading>Shop Our Top Category</Heading>
        <Grid templateColumns={{base:'repeat(2,1fr)',md:'repeat(3,1fr)',lg:'repeat(6,1fr)'}} gap="20px">
          {
            shopCategory.map((el, ind) => (
              <Box bgImage={el.image} className={el.class} >
                {/* <Heading color='white'>{el.name}</Heading> */}
              </Box>
            ))
          }
        </Grid>
      </Flex>
      <BestDeal />
      <HomeService />
    </Box>
  )
}

export default HomePage