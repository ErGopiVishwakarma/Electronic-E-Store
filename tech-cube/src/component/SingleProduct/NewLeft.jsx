import { Box, Flex, HStack, Text, flexbox } from '@chakra-ui/react';
import React, { useState } from 'react';

// const image = [
//   'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_600x.png?v=1668599490',
//   'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI_1f060ff5-cbbf-43f3-b673-41e4aacc7d79_700x.jpg?v=1657869596',
//   'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI-1_2_d9489be8-8f88-4832-991d-28b012711719_700x.jpg?v=1655369215',
//   'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI-2_5f7d05ca-6358-4ff8-899f-c6720e201a72_700x.jpg?v=1655369215',
//   'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI-3_25e4be39-aa68-4c07-94de-75afabaeef11_700x.jpg?v=1655369215',
// ];

const NewLeft = (props) => {

  const [index, setIndex] = useState(0);
  const {spData}=props
  const {image}=spData

  // console.log("today is day-4 ")
  
  
  return (
    <Box
      display={'flex'}
      margin={['5%', '5%', '10%', '10%']}
      alignItems={'center'}
    >
      <Box
        height={'100%'}
        maxWidth={'16.7%'}
        className="multiple-small-div"
        backgroundColor={'gray.500'}
        gap={'%'}
        display="grid"
        bg="gray.100"
        justifyContent="space-around"
      >
        {image?.map((el, i) => {
          return (
            <Box
              onMouseEnter={() => {
                setIndex(i);
              }}
              className="sub-img-1"
            >
              {' '}
              <img src={el} alt="dthr" />
            </Box>
          );
        })}
      </Box>



      <Box
        borderRightRadius={'md'}
        overflow={'hidden'}
        className="big-img-div"
        bg={'gray.300'}
        borderBottom={'2px'}
      >


        <Box>
          <img src={image && image[index]} alt="" width="100%" />
        </Box>
      </Box>
    </Box>
  );
};

export default NewLeft;
