import { Box, Container, Link, SimpleGrid, Stack, Text, IconButton, useColorModeValue, HStack, Divider, Image, Center, Grid,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube,FaUser, FaFacebook, FaPinterest } from 'react-icons/fa';
export default function Footer() {
  return (
    <>
    <Box w={'100%'} borderTop="1px solid lightgray">
       <Center>
        <Stack direction={'row'} spacing={{base:'20px',md:"80px"}} py={50} >
            <Stack direction={{base:'column',md:"row"}} alignItems={'center'} spacing={{base:5,md:10}}>
              <Image src="https://images.dailyobjects.com/marche/icons/social/quick-delivery.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"></Image>
              <Text fontSize={14}>Quick Delivery</Text>
            </Stack>
            <Stack direction={{base:'column',md:"row"}} alignItems={'center'} spacing={{base:5,md:10}}>
              <Image src="https://images.dailyobjects.com/marche/icons/social/easy-returns.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"></Image>
              <Text fontSize={14}>Easy Returns</Text>
            </Stack>
            <Stack direction={{base:'column',md:"row"}} alignItems={'center'} spacing={{base:5,md:10}}>
              <Image src=" https://images.dailyobjects.com/marche/icons/social/quality-assured.svg?tr=cm-pad_resize,v-2,w-40,h-40,dpr-1"></Image>
              <Text fontSize={14}>Quality Assured</Text>
            </Stack>
        </Stack>
       </Center>
    </Box>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')} border="0.2px solid lightgray" w="100%">
      <Container as={Stack} maxW={'8xl'} py={19} >
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1.5fr' }}
          spacing={2} py={18}>
          <Stack spacing={2}>
            <Text fontSize={16} fontWeight="bolder">KNOW US</Text>
            <Link fontSize={14}>About Tech-Cube</Link>
            <Link fontSize={14}>Blogs</Link>
         
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={16} fontWeight="bolder">HELPDESK</Text>
            <Link href={'#'} fontSize={14}>Terms Of Use</Link>
            <Link href={'#'} fontSize={14}>Warranty Policy</Link>
            <Link href={'#'} fontSize={14}>Shipping Policy</Link>
            <Link href={'#'} fontSize={14}>Cancellation Policy</Link>
            <Link href={'#'} fontSize={14}>Return and Exchange Policy</Link>
            <Link href={'#'} fontSize={14}>Privacy & Security Policy</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={16} fontWeight="bolder">NETWORK</Text>
            <Link href={'#'} fontSize={14}>Contact Us</Link>
            <Link href={'#'} fontSize={14}>Corporate Gifting</Link>

          </Stack>
          <Stack align={'flex-start'} borderLeft="1px solid lightgray" spacing={10}>
            
            <Stack direction={'column'} pl={5}>
              {/* forth orbit ========================= */}
            <Text fontSize={25} fontWeight={'bolder'}>FOLLOW US ON</Text>
            <Divider ></Divider>
            <HStack>
              <Link><IconButton borderRadius={'50%'} border={'2px solid black'} variant={'outline'} color="black"  icon={<FaInstagram />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={'2px solid black'} variant={'outline'} color="black" icon={<FaFacebook />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={'2px solid black'} variant={'outline'} color="red"  icon={<FaYoutube />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={'2px solid black'} variant={'outline'} color="blue.500"  icon={<FaTwitter />} /></Link>
              <Link><IconButton borderRadius={'50%'} border={'2px solid black'} variant={'outline'} color="brown.500"  icon={<FaPinterest />} /></Link>

            </HStack>
            </Stack>
            <Divider border={'1px solid lightgray'} w="100%"/>
            <Stack direction={'column'} pl={5}>
              {/* forth orbit ========================= */}
              <Text fontSize={25} fontWeight={'bolder'} >DOWNLOAD OUR APP</Text>
              <HStack spacing={7}>
                <Link><Image src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" /></Link>
                <Link><Image src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1" /></Link>
              </HStack>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    <Box w={'100%'}>
       <Center>
        <Stack direction={'column'}  py={50}>
         <Center><Text fontSize={16}>100% SECURE PAYMENT</Text></Center>
            <Grid direction={{base:'column', md:'row'}} templateColumns={{base:'repeat(3,1fr)',md:'repeat(8,1fr)'}} gap={'15px'} p="15px">
               <Image src="https://images.dailyobjects.com/marche/icons/payments/amex-update.png?tr=cm-pad_resize,v-2,dpr-1"  w={{base:'100%',md:'80px'}}/>
               <Image src="https://images.dailyobjects.com/marche/icons/payments/maestro-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} />
               <Image src="https://images.dailyobjects.com/marche/icons/payments/mastercard-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} /> 
               <Image src="https://images.dailyobjects.com/marche/icons/payments/mobikwik-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} />
               <Image src="https://images.dailyobjects.com/marche/icons/payments/paytm-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} /> 
               <Image src="https://images.dailyobjects.com/marche/icons/payments/rupay-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} /> 
               <Image src="https://images.dailyobjects.com/marche/icons/payments/upi-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} />
               <Image src="https://images.dailyobjects.com/marche/icons/payments/visa-update.png?tr=cm-pad_resize,v-2,dpr-1" w={{base:'100%',md:'80px'}} />
             
            </Grid>
        </Stack>
       </Center>
    </Box>
    {/* <Box w={'100%'} border="0.2px solid lightgray">
       <Center>
        <Stack direction={'column'} fontWeight="bold">
         <Center><Text fontSize={20}>HONEST REVIEWS. NOTHING ELSE.</Text></Center>
            <Stack direction={'row'}>
              <Image src="https://images.dailyobjects.com/marche/assets/images/other/reviews-desktop-updated-23.png?tr=cm-pad_resize,v-2,w-1349,h-200,dpr-1" />     
            </Stack>
        </Stack>
       </Center>
    </Box> */}
    </>
  );
}