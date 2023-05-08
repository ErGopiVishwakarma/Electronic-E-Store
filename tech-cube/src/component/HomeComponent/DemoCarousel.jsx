import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Heading, Box, Image, Container, Stack, Text } from '@chakra-ui/react';

const DemoCarousel = () => {
    return <Carousel autoPlay infiniteLoop  interval={3000} showStatus={false} showThumbs={false} showArrows={false} >
        <Box w='full' >
            <Image src='https://opc.webdigify.com/OPC01/OPC001_electro/image/cache/catalog/Main-banner-2-1903x674.jpg' w="100%" h="300px" />           
        </Box>
        <Box w='full' >
            <Image src='https://opc.webdigify.com/OPC01/OPC001_electro/image/cache/catalog/Main-banner-1-1903x674.jpg' w="100%" h="300px" />           
        </Box>
        <Box w='full' > 
            <Image src='https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/slider/next-home-banner-1.png' w="100%" h="300px"  objectFit={'cover'}/>          
        </Box>
        <Box w='full'>
            <Image src='https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/slider/next-home-banner-2.png' w="100%" h="300px" objectFit={'cover'} />            
        </Box>

    </Carousel>
}

export default DemoCarousel;