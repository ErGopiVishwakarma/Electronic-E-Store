import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { singleProductfunc } from '../redux/Product/action';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import { singleProductfunc } from '../redux/Product/action';
import NewLeft from '../component/SingleProduct/NewLeft';
import NewRight from '../component/SingleProduct/NewRight';
import { extendTheme } from '@chakra-ui/react';
import Footer from '../component/HomeComponent/Footer';


// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

 

  console.log('id at single page', id);
  // const data=useSelector((store)=> store.productReducer.data)
  // const singleData=data.find((singleData)=>singleData.id === parseInt(id));

  const spData = useSelector(store => store.productReducer.data);

  console.log('data at single Page ', spData);

  useEffect(() => {
    dispatch(singleProductfunc(id));
  }, []);

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  return (
       <>
            <Box
      display={['block', 'block', 'block', 'flex']}
      width={'100%'}
      paddingTop={'50px'}
    >
      <Box width={['100%']}>
        <NewLeft spData={spData} />
      </Box>

      <div
        style={{
          width: '5px',
          height: 'full',
          backgroundColor: 'black',
          margin: '5% 0 5% 0',
          opacity: '40%',
        }}
      />

      <Box width={['100%']}>
        {' '}
        <NewRight spData={spData} />
      </Box>
  
    </Box>
    <Footer />
       </>
  );
};

export default SingleProduct;
