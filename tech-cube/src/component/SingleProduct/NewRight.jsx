import { Box, Heading, Text, Flex, Img, Input, border } from "@chakra-ui/react";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa";
import delivery from '../../Assets/delivery.svg';

const data = {
  color: ["black", "white", "green", "yellow"],
  image: [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_600x.png?v=1668599490",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI_1f060ff5-cbbf-43f3-b673-41e4aacc7d79_700x.jpg?v=1657869596",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI-1_2_d9489be8-8f88-4832-991d-28b012711719_700x.jpg?v=1655369215",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI-2_5f7d05ca-6358-4ff8-899f-c6720e201a72_700x.jpg?v=1655369215",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI-3_25e4be39-aa68-4c07-94de-75afabaeef11_700x.jpg?v=1655369215",
  ],
  tag_badge: "42 Hours Playback",
  title: "Boat Airdopes 141",
  price: 999,
  discount: 71,
  mrp: 4490,
  rating: 2.5,

  category: "wireless_earbuds",
  id: 1,
  description: "Up to 42HRS Playback Clear Calling ASAP™ Charge   ",
  brand: "BOAT",
  review: 2159,
};

const NewRight = () => {
  const roundedRating = Math.round(data.rating);



  // console.log("Today is day-3")

  return (
    <Box  textAlign={"left"} margin={['5%','5%','10%','10%']}>
      <Box >
        <Heading
          size="md"
          fontSize="22px"
          fontWeight={550}
          fontFamily={"sans-serif"}
        >
          {data.title}
        </Heading>

        <Text
          fontSize={'sm'}
          textAlign={"left"}
          opacity="70%"

          paddingY={'1.5%'}
        >
          {data.description}
        </Text>
        <Box display={"flex"} fontSize={"10px"}>
          {Array.from({ length: 5 }).map((_, index) => {
            const isFilled = index < roundedRating;
            return isFilled ? (
              <FaStar key={index} color="green" className="stroke-1 " />
            ) : (
              <FaRegStar key={index} color="gray" />
            );
          })}
        </Box>
      </Box>



<Box paddingY={'4%'}  >

      <Box display="flex" alignItems="center" >
        <Box paddingRight={'3%'}>
          <Text fontSize={'xl'} display={'flex'} >Price: <Text fontWeight={ 'semibold'} textDecoration={'line-through'}>1710</Text> </Text>
        </Box>
        <Box
          boxShadow="0px 4px 4px rgba(0, 1, 0, 3), 0px 4px 16px rgba(0, 0, 0, 0.12), 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 0px 8px skyblue"
          borderRadius={"3xl"}
          backgroundImage={`linear-gradient(to right, #03fcd3, #14deda)`} // added a gradient that fades from left to right
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          height="40px"
          width="150px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" fontWeight="extrabold">
            {data.discount}%
          </Heading>
          <Text  color={'black'} fontWeight={'bold'} paddingLeft={"4px"}>off</Text>
        </Box>
      </Box>
        <Box >
          <Heading display={"flex"}>
            <Heading paddingRight={"2px"}>₹</Heading>
            {data.price}
          </Heading>
        </Box>
</Box>

      <Box >
        <Heading size={"md"}>Specification</Heading>
        <Box spac paddingLeft={'2%'} marginY={'3%'} borderLeft={'3px solid #03fcd3'} fontSize={'xs'}>

        <Text>Brand:{data.brand}</Text>
        <Text>Category:{data.category}</Text>
        <Text>Battery Life:{data.tag_badge}</Text>
        </Box>
      </Box>

      <Flex  paddingY={'2%'}>
        <Button  size="sm" backgroundColor={'white'} _hover={{ bg: "#03fcd3", color: "black" }} border={'2px solid black'} marginRight={'7%'} borderRadius={"3xl"}>
          Add to Cart
        </Button>
        <Button  size="sm" bg={"white"}  _hover={{ bg: "#03fcd3", color: " #black" }} border={'2px solid black'} borderRadius={"3xl"}>
          Buy Now
        </Button>
      </Flex>

      <Box >
      <Box display={'flex'} marginY={'1.5'} justifyItems={'center'}>
          <Img maxWidth={'30px'} src={delivery}/>
        <Text fontWeight={'semibold'}>Free Delivery</Text>
      </Box>
        <Text fontSize={'sm'} fontWeight={'semibold'}  opacity={'80%'} paddingBottom={'3%'}>Enter your Postal code for Delivery Availibility</Text>
        <Box  display={'flex '} justifyItems={'center'}>
        <Input maxHeight={'33px'} marginRight={'2%'} borderRadius={"3xl"} placeholder="Enter your postal code here" fontSize={'sm'} width={'40%'} border={'2px solid black '} _focus={''}/>
          <Button size="sm"  _hover={{ bg: "#03fcd3", color: " #black" }} border={'2px solid black'} borderRadius={"3xl"} bg={'white'}>Check Now</Button>
        </Box>
      </Box>

      <Box marginY={'3'}>
        <Text  fontWeight={'medium'}>Return Policy</Text>
        <Text fontSize={'md'} >7 Days Reaplacement</Text>
      </Box>
      <Box >
        <Text cursor={'pointer'} _hover={{opacity:"70%"}} textDecoration={'underline'} fontWeight={'medium'}>Terms & Condition</Text>
      </Box>
    </Box>
  );
};

export default NewRight;
