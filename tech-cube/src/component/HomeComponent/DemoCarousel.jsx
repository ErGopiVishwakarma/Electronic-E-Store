import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Heading, Box, Image, Container, Stack, Text } from '@chakra-ui/react';
import oneImage from '../../Assets/one.png'
import twoImage from '../../Assets/two.png'
import threeImage from '../../Assets/three.png'
import fourImage from '../../Assets/four.png'


const DemoCarousel = () => {
    return <Carousel autoPlay infiniteLoop  interval={3000} showStatus={false} showThumbs={false} showArrows={false} >
        <Box w='full' >
            <Image src={oneImage} w="100%" h={{base:"300px",md:'400px'}} />           
        </Box>
        <Box w='full' >
            <Image src={twoImage} w="100%" h={{base:"300px",md:'400px'}} />           
        </Box>
        <Box w='full' > 
            <Image src={threeImage} w="100%" h={{base:"300px",md:'400px'}}  objectFit={'cover'}/>          
        </Box>
        <Box w='full'>
            <Image src={fourImage} w="100%" h={{base:"300px",md:'400px'}} objectFit={'cover'} />            
        </Box>

    </Carousel>
}

export default DemoCarousel;