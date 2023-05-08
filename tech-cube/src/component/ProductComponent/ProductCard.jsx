import React from 'react';
import {
  Stack,
  Text,
  Image,
  Flex,
  Button,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { VscHeart } from 'react-icons/vsc';
import { Navigate, useNavigate } from 'react-router-dom';

export const ProductCard = ({
  id,
  title,
  image,
  price,
  description,
  rating,
  review,
  discount,
}) => {
  const navigate = useNavigate();
  return (
    <Flex direction={'column'} pos={'relative'} borderRadius={'12px'}>
      <Box p="20px" bg="#F5F5F5" boxSizing="borderBox" borderRadius={'9PX'}>
        <Box
          className="bestdeal"
          justifyContent={'center'}
          alignItems={'center'}
          display={'flex'}
        >
          <Image
            src={image[0]}
            alt="image"
            height={'220px'}
            width={'260px'}
            onClick={() => navigate('/products/:id')}
          />
        </Box>
      </Box>

      <Stack px="5px">
        <Text
          fontWeight={'bold'}
          fontSize={'18px'}
          fontFamily={'sans-serif'}
          pt={'10px'}
        >
          {title.length < 30 ? title : title.substring(0, 32)}
        </Text>
        <Flex justifyContent={'space-between'}>
          <Flex>
            <Text fontWeight={'bold'} fontSize={'18px'} mt={'2px'} pt={'0px'}>
              {'₹' + price}
            </Text>
            <Text fontSize={'15px'} fontWeight={600} mt={'0px'} mb={'20px'}>
              .00
            </Text>
          </Flex>

          <Text
            fontWeight={'bold'}
            fontSize={'22px'}
            mt={'1px'}
            color={'green.600'}
          >
            {discount > 0 ? discount + '%' : ''}
          </Text>
        </Flex>
        <Text fontSize={'14px'} opacity="80%">
          {description.substring(0, 30)}...
        </Text>
        <Flex>
          <Text color={'green'} fontSize={'19px'}>
            {rating >= 0 && rating <= 1.5
              ? '★☆☆☆☆'
              : rating >= 1.6 && rating <= 2.5
              ? '★★☆☆☆'
              : rating >= 2.6 && rating <= 3.5
              ? '★★★☆☆'
              : rating >= 3.6 && rating <= 4.5
              ? '★★★★☆'
              : '★★★★★'}
          </Text>
          <Text opacity={'90%'}>({review})</Text>
        </Flex>
        <Button
          variant={'unstyled'}
          border={'1px solid black'}
          w="120px"
          borderRadius={'40px'}
          bg={useColorModeValue('light', 'gray.700')}
          _hover={{
            backgroundColor: 'gray.700',
            color: 'white',
            background: useColorModeValue('light', 'gray'),
          }}
        >
          Add To Cart
        </Button>
      </Stack>
      <Button
        p="10px"
        bg="white"
        borderRadius={'50%'}
        pos={'absolute'}
        right={'11px'}
        top="15px"
        _hover={{ bg: 'pink.100' }}
        color={useColorModeValue('light', 'gray.700')}
      >
        <VscHeart style={{ width: '20px', height: '20px' }} />
      </Button>
    </Flex>
  );
};
