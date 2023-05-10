import { Box, Flex, HStack, Image, Text, flexbox } from '@chakra-ui/react';
import React, { useState } from 'react';

const NewLeft = props => {
  const [index, setIndex] = useState(0);
  const { spData } = props;
  const { image } = spData;

  return (
    <Box
      display={'flex'} flexDirection={'column-reverse'}
      margin={['5%', '5%', '10%', '10%']}
      alignItems={'center'}
      gap="20px"
    >
      <Box
        height={'100px'}
        maxWidth={'100%'}
        className="multiple-small-div"
        backgroundColor={'gray.500'}
        display="flex"
        gap="10px"
        bg="gray.100"
        justifyContent="space-around"
      >
        {image?.map((el, i) => {
          return (
            <Box
              onMouseEnter={() => {
                setIndex(i);
              }}
              h="100%" w='100px'
              className="sub-img-1"
            >
              {' '}
              <Image src={el} alt="dthr" h="100%" w="100px" />
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
          <Image src={image && image[index]} alt="" w="100%" h={{base:'400px',md:'450px'}} />
        </Box>
      </Box>
    </Box>
  );
};

export default NewLeft;
