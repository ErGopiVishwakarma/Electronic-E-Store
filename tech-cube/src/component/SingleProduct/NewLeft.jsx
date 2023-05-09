import { Box, Flex, HStack, Text, flexbox } from '@chakra-ui/react';
import React, { useState } from 'react';

const NewLeft = props => {
  const [index, setIndex] = useState(0);
  const { spData } = props;
  const { image } = spData;

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
