import { Box, Heading, Text, Flex, Img, Input, border, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa";
import delivery from '../../Assets/delivery.svg';
import { useDispatch } from "react-redux";
import { postSingleProductItem } from "../../redux/CartReducer/action";
import { useNavigate } from "react-router-dom";
// const data = {
//   color: ["black", "white", "green", "yellow"],
//   image: [
//     "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_600x.png?v=1668599490",
//     "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI_1f060ff5-cbbf-43f3-b673-41e4aacc7d79_700x.jpg?v=1657869596",
//     "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI-1_2_d9489be8-8f88-4832-991d-28b012711719_700x.jpg?v=1655369215",
//     "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI-2_5f7d05ca-6358-4ff8-899f-c6720e201a72_700x.jpg?v=1655369215",
//     "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-141-FI-3_25e4be39-aa68-4c07-94de-75afabaeef11_700x.jpg?v=1655369215",
//   ],
//   tag_badge: "42 Hours Playback",
//   title: "Boat Airdopes 141",
//   price: 999,
//   discount: 71,
//   mrp: 4490,
//   rating: 2.5,

//   category: "wireless_earbuds",
//   id: 1,
//   description: "Up to 42HRS Playback Clear Calling ASAP™ Charge   ",
//   brand: "BOAT",
//   review: 2159,
// };

const NewRight = ({spData}) => {
const dispatch=useDispatch()
const navigate=useNavigate()

// console.log("😍😂spData at NewRight.jsx ",spData)

  const roundedRating = Math.round(spData.rating);

     const handleAddToCart=()=>{
      // console.log(" ❤️❤️❤️❤️❤️❤️add handle to cart item from NewRight")
       dispatch(postSingleProductItem(spData)).then((res)=>navigate("/cart"))
     }

      const handleBuySingleProduct=()=>{
        // console.log(" 💕💕💕💕💕💕add handle to cart item from NewRight")
        dispatch(postSingleProductItem(spData)).then((res)=>navigate("/payment"))
      }




  return (
    <Box  textAlign={"left"} margin={['5%','5%','10%','10%']}>
      <Box >
        <Heading
          size="1000px"
          fontSize="xl"
          fontWeight={"extrabold"}
          fontFamily={"sans-serif"}
        >
          {spData.title}
        </Heading>

        <Text
          fontSize={'sm'}
          textAlign={"left"}
          opacity="70%"

          paddingY={'1.5%'}
        >
          {spData.description}
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
          <Text fontSize={'xl'} display={'flex'} >Price: <Text fontWeight={ 'semibold'} textDecoration={'line-through'}>{spData.mrp}</Text> </Text>
        </Box>
        <Box
          // boxShadow="0px 4px 4px rgba(0, 1, 0, 3), 0px 4px 16px rgba(0, 0, 0, 0.12), 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 0px 8px skyblue"
          
          // backgroundImage={`linear-gradient(to right, #03fcd3, #14deda)`} // added a gradient that fades from left to right
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          height="40px"
          width="150px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" fontWeight="bold">
            {spData.discount}%
          </Heading>
          <Text  color={'black'} fontWeight={'bold'} paddingLeft={"4px"}>off</Text>
        </Box>
      </Box>
        <Box fontWeight={"5px"}>
          <Heading display={"flex"}>
            <Heading paddingRight={"2px"}>₹</Heading>
            {spData.price} 
          </Heading>
        </Box>
</Box>

      <Box >
        <Heading size={"md"}>Specification</Heading>
        <Box spac paddingLeft={'2%'} marginY={'3%'} borderLeft={'3px solid #03fcd3'} fontSize={'md'} opacity={"70%"}>

        <Text>Brand:{spData.brand}</Text>
        <Text>Category:{spData.category}</Text>
        <Text>Battery Life:{spData.tag_badge}</Text>
        </Box>
      </Box>

      <Box  display={'flex'} flexDirection={'column'} gap={'5px'}>
        <Button onClick={handleAddToCart}  backgroundColor={'black'} textColor={'white'} fontSize={'17px'} width={'250px'}    border={'2px solid black'}  >
          Add to Cart
        </Button>
        <Button  onClick={handleBuySingleProduct} backgroundColor={'black'} textColor={'white'} fontSize={'17px'} width={'250px'}    border={'2px solid black'} >
          Buy Now
        </Button>
      </Box>

      <Box >
      <Box display={'flex'} marginY={'1.5'} justifyItems={'center'}>
          <Img maxWidth={'30px'} src={delivery}/>
        <Text fontWeight={'semibold'}>Free Delivery</Text>
      </Box>
        <Text fontSize={'sm'} fontWeight={'semibold'}  opacity={'80%'} paddingBottom={'3%'}>Enter your Postal code to Check Delivery Availibility</Text>
        
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm'>
       Check now 
        </Button>
      </InputRightElement>
    </InputGroup>


      </Box>

      <Box marginY={'3'}>
        <Text  fontWeight={'medium'}>Return Policy</Text>
        <Text fontSize={'md'}  opacity={"70%"}>7 Days Reaplacement</Text>
      </Box>
      <Box >
        <Text cursor={'pointer'} _hover={{opacity:"70%"}} textDecoration={'underline'} fontWeight={'medium'}>Terms & Condition</Text>
      </Box>
    </Box>
  );
};

export default NewRight;
