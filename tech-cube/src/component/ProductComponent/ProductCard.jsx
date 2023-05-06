import React from 'react';
import {
  Stack,
  Text,
  Image,
  VStack,
  HStack,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { VscHeart } from 'react-icons/vsc';
import { BsStarFill } from 'react-icons/bs';
export const ProductCard = ({
  id,
  title,
  image,
  price,
  description,
  rating,
  review,
}) => {
  return (
    <VStack>
      <Stack
        align="flex-start"
        bg="#FAFAFA"
        p="12px"
        key={id}
        borderRadius={'10PX'}
      >
        <Image
          box-shadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          transition-timing-function="ease-in-out"
          transition="width .2s"
          _hover={{
            cursor: 'pointer',
            transition: 'all .25s ease-in-out',
            width: '410px',
          }}
          src={image[0]}
          alt="image"
          height={'270px'}
          width={'300px'}
          position={'relative'}
        />
      </Stack>
      <Button
        position={'absolute'}
        marginBottom={'100px'}
        marginRight={'100px'}
        backgroundColor={'white'}
        borderRadius={'30px'}
        padding={'1px'}
        _hover={{
          cursor: 'pointer',

          backgroundColor: 'pink.100',
        }}
        color={useColorModeValue('light', 'gray.700')}
        style={{ marginLeft: '220px' }}
      >
        <VscHeart style={{ width: '20px', height: '20px' }} />
      </Button>
      <Stack>
        <Flex justifyContent={'space-between'}>
          <Text fontSize="19px" fontWeight={550} fontFamily={'sans-serif'}>
            {title.substring(0, 20)}...
          </Text>
          <Flex>
            <Text pl="7px" fontSize="19px" fontWeight={600}>
              {'₹' + price}
            </Text>
            <Text fontSize={'15px'} fontWeight={600}>
              .00
            </Text>
          </Flex>
        </Flex>

        <Text
          fontSize="13px"
          textAlign={'left'}
          opacity="80%"
          margin={'0px'}
          padding={'0px'}
        >
          {description.substring(0, 30)}...
        </Text>
        <Flex style={{ padding: '0px' }}>
          <Text color={'green.400'} fontSize={'25px'}>
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
      </Stack>
      <Button
        background={'white'}
        border={'1px solid black'}
        borderRadius={'20PX'}
        marginRight={'100px'}
        bg={useColorModeValue('light', 'gray.700')}
        style={{ marginRight: '180px', height: '38px' }}
        _hover={{
          backgroundColor: 'gray.700',
          color: 'white',
          background: useColorModeValue('light', 'gray'),
        }}
      >
        Add to Cart
      </Button>
    </VStack>
  );
};
