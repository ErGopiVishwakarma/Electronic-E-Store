import React from 'react';
import {
  Stack,
  Text,
  Image,
  VStack,
  HStack,
  Flex,
  Button,
} from '@chakra-ui/react';
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
          _hover={{
            cursor: 'pointer',
          }}
          src={image[0]}
          alt="image"
          height={'270px'}
          width={'300px'}
        />
      </Stack>
      <Stack>
        <Flex justifyContent={'space-between'}>
          <Text fontSize="19px" fontWeight={600} fontFamily={'sans-serif'}>
            {title.substring(0, 70)}
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

        <Text fontSize="13px" textAlign={'left'} opacity="80%">
          {description.substring(0, 100)}
        </Text>
        <Flex>
          <Text>{rating}</Text>

          <Text opacity={'80%'}>({review})</Text>
        </Flex>
      </Stack>
      <Button
        background={'white'}
        border={'1px solid black'}
        borderRadius={'20PX'}
        marginRight={'100px'}
      >
        Add to Cart
      </Button>
    </VStack>
  );
};
